import { useEffect, useRef, useState } from "react";
import { url } from "../environment";

class PubSub {
    public copied : (() => void)[]
    constructor() {
        this.copied = []
    }

    subscribe(callback : () => void) {
        this.copied.push(callback);

        return () => { this.copied = this.copied.filter(cb => cb !== callback) };
    }

    clear() {
        this.copied = [];
    }

    publish() {
        this.copied.forEach(cb => cb());
    }
}

export default function useShortener() {
    const [link, setLink] = useState('');
    const [shortenLink, setShortenLink] = useState('');
    
    const pubsubRef = useRef<PubSub | null>(null);
    const [pubsub, setPubsub] = useState<PubSub | null>(null);


    useEffect(() => {
        if(!pubsubRef.current) {
            pubsubRef.current = new PubSub();
            setPubsub(pubsubRef.current);
        }
    }, []);

    const shorten = async () => {
        const data = await fetch(`${url}/api/links/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                originalLink: link,
                url: `${window.location.origin}/`
            })
        }).then(res => res.json());

        console.log("data: ", data);
        setShortenLink(data?.result?.shortenedLink ?? '');
    }

    const copyLink = async () => {
        pubsub!.publish();
        await navigator.clipboard.writeText(shortenLink);
        // alert('Link Copied');
    } 

    return {
        link,
        setLink,
        shorten,
        shortenLink,
        copyLink,
        pubsub
    }
}