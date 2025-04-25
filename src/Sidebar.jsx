import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {
  LiaAngleDownSolid,
  LiaAngleUpSolid,
  LiaArrowRightSolid,
} from "react-icons/lia";

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
}) => {
  const [open, setIsOpen] = useState(isOpen);
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const toggleSubMenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
            {logo && <img className="logo" src={logo} alt="Logo" />}
            <div className="navigation">
              {items?.map((item, i) => {
                const ItemIcon = item?.icon;
                const hasSubLinks = item?.subLinks?.length > 0;
                const hasLink = item?.link;

                if (hasSubLinks) {
                  return (
                    <div key={i} className="nav-tile submenu-tile">
                      <div
                        className="left-main flex"
                        style={{
                          background: tileColor,
                          cursor: "pointer",
                          borderRadius: radius,
                        }}
                        onClick={() => toggleSubMenu(i)}
                      >
                        <div className="left-wrap">
                          <div
                            className="icon flex"
                            style={{ borderRadius: radius }}
                          >
                            {ItemIcon && <ItemIcon />}
                          </div>
                          <p>{item?.text}</p>
                        </div>
                        <div className="icon">
                          {openSubmenus[i] ? (
                            <LiaAngleUpSolid />
                          ) : (
                            <LiaAngleDownSolid />
                          )}
                        </div>
                      </div>

                      {openSubmenus[i] && (
                        <div className="sub-menu">
                          {item.subLinks.map((sub, idx) => {
                            const SubIcon = sub?.icon;
                            return (
                              <a
                                key={idx}
                                href={sub.link}
                                className="sub-link flex"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  background: tileColor,
                                  borderRadius: radius,
                                }}
                              >
                                {SubIcon && (
                                  <div
                                    className="icon flex"
                                    style={{ borderRadius: radius }}
                                  >
                                    <SubIcon />
                                  </div>
                                )}
                                <p>{sub.text}</p>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                if (hasLink) {
                  return (
                    <a
                      key={i}
                      href={item.link}
                      className="nav-tile flex"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: tileColor,
                        borderRadius: radius,
                      }}
                    >
                      <div className="left-main">
                        <div className="left-wrap">
                          <div
                            className="icon flex"
                            style={{ borderRadius: radius }}
                          >
                            {ItemIcon && <ItemIcon />}
                          </div>
                          <p>{item?.text}</p>
                        </div>
                        <div className="icon">
                          <LiaArrowRightSolid />
                        </div>
                      </div>
                    </a>
                  );
                }
              })}
            </div>

            {showLogout && (
              <button
                className="logout-btn flex"
                style={{ borderRadius: radius }}
                onClick={logoutFn}
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