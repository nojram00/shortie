
type Metatypes = 'title' | 'keywords';
type MetaFunc = { 
    get: () => string;
    set: (value: string) => void;
}

export default function useMeta() {

    const metadata = new Map<Metatypes, () => MetaFunc>([
        ['title', function() {
            return {
                set: (value : string) => {
                    document.title = value
                },
                get: () => document.title
            }
        }]
    ])

    function set(type: Metatypes, value : string) {
        const func = metadata.get(type)?.();
        func?.set(value);
    }

    function get(type : Metatypes) {
        const func = metadata.get(type)?.();
        return func?.get()
    }

    return {
        get,
        set
    }
}