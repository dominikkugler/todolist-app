import React from 'react';

function ErrorPage() {
  return (
    <div className="container text-center mt-5">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary">Go Back Home</a>
    </div>
  );
}

export default ErrorPage;
