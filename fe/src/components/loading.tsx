export default function LoadingFallback({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 text-base-content">
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>
      
      {/* Loading text */}
      {text && (
        <p className="ml-4 text-lg font-medium">{text}</p>
      )}
    </div>
  );
}
