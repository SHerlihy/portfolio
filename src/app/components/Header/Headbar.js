import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../../../actions/index";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./headbar.css";

const ContactInfo = (props) => {
  return (
    <div className="contact-info">
      <p>steven_herlihy@yahoo.com</p>
    </div>
  );
};

const Headbar = () => {
  const currentPage = useSelector((state) => state.currentPage);

  const [showContact, setShowContact] = useState(false);

  const dispatch = useDispatch();

  const changePage = (page) => {
    dispatch(changeCurrentPage(page));
  };

  const renderContact = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <div className="headbar-wrap">
      <nav className="headbar">
        <Link
          onClick={() => changePage("home")}
          className={`ends ${currentPage === "home" && "highlight"}`}
          to="/"
        >
          <i class="fas fa-home"></i>
        </Link>
        <div className="proj-button">
          <Link
            onClick={() => changePage("multiplayer")}
            className={currentPage === "multiplayer" && "highlight"}
            to="/multiplayer"
          >
            Multiplayer Game
          </Link>
          <Link
            onClick={() => changePage("builder")}
            className={currentPage === "builder" && "highlight"}
            to="/builder"
          >
            Burger Builder
          </Link>
          <Link
            onClick={() => changePage("inventory")}
            className={currentPage === "inventory" && "highlight"}
            to="/inventory"
          >
            Inventory Management
          </Link>
        </div>
        <button
          className={`ends contact ${showContact && "highlight"}`}
          onClick={renderContact}
        >
          Contact
        </button>
      </nav>
      {showContact &&
        ReactDOM.createPortal(
          <ContactInfo />,
          document.getElementById("contact-modal")
        )}
    </div>
  );
};

export default Headbar;
