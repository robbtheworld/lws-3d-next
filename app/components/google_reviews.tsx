import React from "react";

const GoogleReviews: React.FC = () => {
  const handleAuth = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div>
      <button onClick={handleAuth}>Authenticate with Google</button>
    </div>
  );
};

export default GoogleReviews;
