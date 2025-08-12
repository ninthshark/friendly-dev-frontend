import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
      <h1 className="text-6xl font-extrabold text-blue-400 mb-2">
        404 - Page Not Found
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-4">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
