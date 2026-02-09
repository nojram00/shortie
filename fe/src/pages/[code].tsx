import { useParams } from "react-router";
import useLink from "../hooks/useLink";
import { useEffect, useState } from "react";

export default function Redirect() {
  const { code } = useParams();
  const { originalLink, loading, error } = useLink({ code });
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (loading || count <= 0) return;

    const timer = setTimeout(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading, count]);

  // Loading View
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-base-100">
        <div className="card shadow-lg p-6 text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-lg font-medium">Fetching your link...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 px-4">
      <div className="card max-w-md shadow-xl p-8 text-center bg-base-200">
        {/* Optional error display */}
        {error && (
          <div className="alert alert-error mb-4">
            <span>Oops! Couldn’t load the link</span>
          </div>
        )}

        {/* Countdown / Ready Section */}
        {count > 0 ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-semibold text-secondary">
              Your link will be ready in
            </p>
            <div className="text-5xl font-bold text-primary">{count}</div>
            <progress
              className="progress progress-primary w-full"
              value={5 - count}
              max="5"
            ></progress>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-xl font-bold text-success">
              🎉 Your link is ready!
            </p>
            <a
              href={originalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Go to Link
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
