import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <nav className="nav">
        <a className="nav-link active" href="#">
          Blog
        </a>
        <a className="nav-link" href="#">
          Review
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </nav>
      <PostList />
    </div>
  );
};

export default App;
