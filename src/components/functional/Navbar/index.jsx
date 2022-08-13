import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <div className="hero">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt="logo"
          />
          <span>ReactJS</span>
        </div>

        <div className="navbar-list">
          <li>
            <a href="#">Menu1</a>
          </li>
          <li>
            <a href="#">Menu2</a>
          </li>
          <li>
            <a href="#">Menu3</a>
          </li>
          <li>
            <a href="#"> Menu4</a>
          </li>
          <li>
            <a href="#">Menu5</a>
          </li>
        </div>

        {!showHamburger ? (
          <div className="navbar-hamburger">
            <img
              onClick={() => setShowHamburger(true)}
              src="https://img.icons8.com/ios/50/000000/menu-2.png"
            />
          </div>
        ) : (
          <div className="navbar-hamburger">
            <button
              onClick={() => {
                setShowHamburger(false);
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
      {showHamburger ? (
        <div className="navbar-sublist">
          <li>
            <a href="#">Menu1</a>
          </li>
          <li>
            <a href="#">Menu2</a>
          </li>
          <li>
            <a href="#">Menu3</a>
          </li>
          <li>
            <a href="#"> Menu4</a>
          </li>
          <li>
            <a href="#">Menu5</a>
          </li>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
