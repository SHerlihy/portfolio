import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../../../actions/index";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./headbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = (props) => {
  return (
    <div className="contact-info">
      <p>steven_herlihy@yahoo.com</p>
    </div>
  );
};

const Headbar = () => {
  const viewVertical = useSelector((state) => state.viewVertical);

  const [iconContact, setIconContact] = useState(false);

  const [iconProjects, setIconProjects] = useState(false);

  const currentPage = useSelector((state) => state.currentPage);

  const [showContact, setShowContact] = useState(false);

  const dispatch = useDispatch();

  const changePage = (page) => {
    dispatch(changeCurrentPage(page));
  };

  const renderContact = () => {
    setShowContact((prev) => !prev);
  };

  window.addEventListener(
    "resize",
    () => {
      const smallWidth = window.innerWidth < 515;
      setIconProjects(smallWidth && !viewVertical);
    },
    false
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const smallWidth = window.innerWidth < 850;
        setIconContact(smallWidth && !viewVertical);
      },
      false
    );
  });

  const projectsFormatter = (icon, text) => {
    return iconProjects ? icon : text;
  };

  const contactFormatter = () => {
    return iconContact ? <i class="far fa-envelope-open"></i> : "Contact Me";
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
            {viewVertical ? (
              <i class="fas fa-gamepad"></i>
            ) : (
              projectsFormatter(
                <i class="fas fa-gamepad"></i>,
                "Multiplayer Game"
              )
            )}
          </Link>
          <Link
            onClick={() => changePage("builder")}
            className={currentPage === "builder" && "highlight"}
            to="/builder"
          >
            {viewVertical ? (
              <i class="fas fa-hamburger"></i>
            ) : (
              projectsFormatter(
                <i class="fas fa-hamburger"></i>,
                "Burger Builder"
              )
            )}
          </Link>
          <Link
            onClick={() => changePage("inventory")}
            className={currentPage === "inventory" && "highlight"}
            to="/inventory"
          >
            {viewVertical ? (
              <i class="fas fa-clipboard-list"></i>
            ) : (
              projectsFormatter(
                <i class="fas fa-clipboard-list"></i>,
                "Inventory Manager"
              )
            )}
          </Link>
        </div>
        <button
          className={`ends contact ${showContact && "highlight"}`}
          onClick={renderContact}
        >
          {viewVertical ? (
            <i class="far fa-envelope-open"></i>
          ) : (
            contactFormatter()
          )}
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
