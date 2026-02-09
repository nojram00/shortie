import useShortener from "../hooks/useShortener";

export default function HomePage() {
  const { link, setLink, shorten, shortenLink } = useShortener();

  return (
    <div
      data-theme="cupcake"
      className="min-h-screen bg-base-100 text-base-content"
    >
      {/* Navbar */}
      <nav className="navbar bg-primary text-primary-content px-6 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Shortie</a>
        </div>
        <div className="flex-none gap-4">
          <a className="btn btn-ghost">Home</a>
          <a className="btn btn-ghost">Features</a>
        </div>
      </nav>

      {/* Hero + Shortener */}
      <section className="hero min-h-[60vh] bg-base-200 px-6">
        <div className="hero-content text-center flex-col">
          <h1 className="text-5xl font-bold mb-4">
            Shorten Your Links Instantly
          </h1>
          <p className="mb-6 text-lg max-w-xl">
            Enter any long URL below and get a clean, shareable link in seconds.
          </p>

          {/* URL Input + Button */}
          <div className="flex w-full max-w-lg gap-2">
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="input input-bordered flex-grow"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button className="btn btn-primary" onClick={shorten}>
              Shorten
            </button>
          </div>

          {/* Show Result */}
          {shortenLink && (
            <div className="alert alert-success mt-6 w-full max-w-lg">
              <span className="font-semibold">Shortened Link:</span>
              <a
                href={shortenLink}
                className="underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortenLink}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Use Our Shortener?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body text-center">
              <h3 className="card-title">Fast & Easy</h3>
              <p>
                Just paste and shorten — no distractions, no clutter, no
                confusion. 👌
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body text-center">
              <h3 className="card-title">Custom Alias</h3>
              <p>
                Choose your own short link alias (optional feature for pro
                users).
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body text-center">
              <h3 className="card-title">Mobile Friendly</h3>
              <p>
                Works perfectly on any device — desktop, tablet, or phone. 📱
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer px-8 py-6 bg-base-200 text-base-content text-center">
        <div className="w-full">
          <p>© {new Date().getFullYear()} Shorty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
