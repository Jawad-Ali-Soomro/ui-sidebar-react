import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  items = [],
  isOpen,
  bgColor = "#111",
  textColor = "#fff",
  logo,
  tileColor = "orange",
  showLogout,
  logoutFn,
  radius = "10px",
  Icon
}) => {
  const [open, setIsOpen] = React.useState(isOpen);
  return (
    <>
      {open && (
        <div
          onClick={() => setIsOpen(false)}
          className={`sidebar ${open ? "open" : "closed"}`}
        >
          <div
            className="animated-side"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <img className="logo" src={logo} alt="" />
            <div className="navigation">
              {items?.map((item, i) => {
                return (
                  <a
                    href={item?.link}
                    className="nav-tile"
                    key={i}
                    style={{ background: tileColor, borderRadius: radius }}
                  >
                    <Icon />
                    <p>{item?.text}</p>
                  </a>
                );
              })}
            </div>
            {showLogout && (
              <button
                className="logout-btn flex"
                style={{ borderRadius: radius }}
                onClick={() => logoutFn()}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
