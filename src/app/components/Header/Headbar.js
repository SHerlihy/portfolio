import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentPage,
  setProjectsIcon,
  setIconContact,
  toggleShowContact,
} from "../../../actions/index";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "./headbar.css";

const ContactInfo = (props) => {
  return (
    <div className="contact-info">
      <p>steven_herlihy@yahoo.com</p>
    </div>
  );
};

const Headbar = () => {
  const dispatch = useDispatch();

  const viewVertical = useSelector((state) => state.viewVertical);
  const iconContact = useSelector((state) => state.iconContact);
  const iconProjects = useSelector((state) => state.iconProjects);
  const showContact = useSelector((state) => state.showContact);
  const currentPage = useSelector((state) => state.currentPage);

  const changePage = (page) => {
    dispatch(changeCurrentPage(page));
  };

  const renderContact = () => {
    dispatch(toggleShowContact());
  };

  useEffect(() => {
    let timeoutId = null;

    const setContactIcon = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const smallWidth = window.innerWidth < 850;
        dispatch(setIconContact(smallWidth && !viewVertical));
      }, 500);
    };

    window.addEventListener("resize", setContactIcon);

    return () => {
      window.removeEventListener("resize", setContactIcon);
    };
  }, []);

  const projectsFormatter = (icon, text) => {
    return iconProjects ? icon : text;
  };

  const contactFormatter = () => {
    return iconContact ? (
      <i data-test="contact-icon" class="far fa-envelope-open"></i>
    ) : (
      "Contact Me"
    );
  };

  return (
    <div data-test="component-headbar" className="headbar-wrap">
      <nav className="headbar">
        <NavLink
          onClick={() => changePage("home")}
          className={`ends ${currentPage === "home" && "highlight"}`}
          to="/"
        >
          <i class="fas fa-home"></i>
        </NavLink>
        <div className="proj-button">
          <NavLink
            data-test="project-one"
            onClick={() => changePage("multiplayer")}
            className={currentPage === "multiplayer" && "highlight"}
            to="/multiplayer"
          >
            {viewVertical ? (
              <i class="fas fa-gamepad"></i>
            ) : (
              projectsFormatter(
                <i data-test="project-one-icon" class="fas fa-gamepad"></i>,
                "Multiplayer Game"
              )
            )}
          </NavLink>
          <NavLink
            data-test="project-two"
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
          </NavLink>
          <NavLink
            data-test="project-three"
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
          </NavLink>
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
