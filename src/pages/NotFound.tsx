import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-center">
      <h1 className="text-7xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>

      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
