/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import useMeta from "../hooks/metadata";
import { url } from "../environment";

// const url = location.origin;

interface Page {
    path: string;
    data: any | null;
}

const PageContext = createContext<Page>({
    path: "/",
    data: null
});

export function PageContextProvider({ path, children } : { path: string; children: React.ReactNode }) {
    const [data, setData] = useState<any>(null);

    const meta = useMeta();

    useEffect(() => {
        const updatedPath = path.split('/').filter(p => p !== '').join('/');
        if(updatedPath.startsWith(":")) return;
        const api_route = `${url}/api/${updatedPath}`;
            fetch(api_route).then(async res => (
                {
                    data: await res.json(),
                    status: res.status
                }
            )).then(data => {
                if(data.status === 200) {
                    setData(data.data);

                    if(data.data['title']) {
                        meta.set('title', data.data.title);
                    }
                }
            }).catch((error) => {
                console.error(error);
            });
    }, [path]);

    return <PageContext.Provider value={{
        path,
        data
    }}>{ children }</PageContext.Provider>
}

export function usePage() {
    return useContext(PageContext);
}