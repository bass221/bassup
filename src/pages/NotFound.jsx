const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
