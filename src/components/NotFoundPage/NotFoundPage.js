import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      404
      <p className="description">Not Found</p>
      <h3 className="goHome">
        <Link to="/">Go to Home </Link>
      </h3>
    </div>
  );
};

export default NotFoundPage;
