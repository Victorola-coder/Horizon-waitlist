import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="minh- flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn{"'"}t exist.
        </p>
        <Link href="/">
          <a className="text-blue-500 hover:underline">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
