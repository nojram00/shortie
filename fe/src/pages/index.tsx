import { usePage } from "../providers/page";
import { useNavigate } from "react-router";

export default function Home() {
  const page = usePage();

  const navigate = useNavigate();

  return (
    <>
      <h1>{page.data?.message}</h1>
      <button onClick={() => navigate('/test')}>To "Test" Page</button>
      <ul>
        {page.data?.users &&
            (page.data.users || []).map((user: string, idx: number) => (
            <li key={idx}>{user}</li>
            ))}
      </ul>
    </>
  );
}
