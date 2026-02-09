import { useEffect, useState } from "react";
import { url } from "../environment";

export default function useLink({ code } : { code?: string }) {

    const [originalLink, setOriginalLink] = useState('');
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const initialize = async () => {
            try {
                const data = await fetch(`${url}/api/links/find?code=${code}`).then(res => res.json());
    
                if(data) {
                    setOriginalLink(data?.originalLink);
                }
            } catch (error) {
                setIsError(true);
                setError((error instanceof Error) ? error.message : '')
            }

            setLoading(false);
        }

        initialize();
    }, []);

    return {
        originalLink,
        loading,
        isError,
        error
    }
}