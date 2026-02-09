import { usePage } from "../providers/page"

export default function Test() {

    const page = usePage();

    return <>
        <h1>{page?.data?.message}</h1>
    </>
}