import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav margin-inline">
        <div>
          <h1>Podcasts</h1>{" "}
          <div className="copyright">
            <p>&copy; Studio Records</p> <p>Inc 2020</p>
          </div>
        </div>
        <div className="explore">
          <svg
          style={{width:"36px", height:"36px"}}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <p>Explore all</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
