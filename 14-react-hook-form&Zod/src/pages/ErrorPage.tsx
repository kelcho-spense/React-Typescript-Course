import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

// Define a type for possible error shapes
type RouteError = {
  statusText?: string;
  message?: string;
};

function ErrorPage() {
  const error = useRouteError(); // The error might be of any type

  // Check if the error is a route error response
  if (isRouteErrorResponse(error)) {
    return (
      <div
        id="error-page"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800"
      >
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="italic text-gray-500">
          {error.statusText || "Unknown error"}
        </p>
      </div>
    );
  }

  // Handle non-route errors (e.g., custom thrown errors)
  const customError = error as RouteError;

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800"
    >
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600 mb-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="italic text-gray-500">
        {customError?.message || "Unknown error"}
      </p>
    </div>
  );
}

export default ErrorPage;
