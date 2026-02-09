import { useState } from "react";
import { url } from "../environment";

export default function useShortener() {
    const [link, setLink] = useState('');
    const [shortenLink, setShortenLink] = useState('');

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

    return {
        link,
        setLink,
        shorten,
        shortenLink
    }
}