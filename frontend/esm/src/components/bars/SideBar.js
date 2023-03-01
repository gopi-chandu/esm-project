import React, { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutButtonHandler = () => {
    ctx.logout();
    navigate("/");
  };

  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "Chart_fill", to: "/" },
    { title: "Events", src: "Chat", to: "/events" },
    { title: "Chat", src: "Chat", to: "/chat" },
    { title: "Q&A", src: "Chat", to: "/qna" },
    { title: "Articles", src: "Chat", to: "/articles" },
    { title: "About", src: "Chat", to: "/about" },
    // { title: "Accounts", src: "User", gap: true },
  ];
  return (
    <div
      className={`hidden md:block flex-none sticky top-0 ${
        open ? "w-full md:w-1/6" : "w-20"
      } bg-blue-700 h-screen p-5  pt-8 relative duration-300`}
    >
      {/* back button to close */}

      <img
        src="/images/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-700
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      {/* Logo Image */}
      <div className="flex gap-x-4 items-center flex-col">
        <img
          src={`/images/${1024}.png`}
          className={`${
            open && "h-20 w-20"
          }rounded rounded-3xl cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          ESM
        </h1>
      </div>
      {/* List starts here */}
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <NavLink className="flex flex-row gap-x-2" to={Menu.to}>
              <img src={`/images/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      {/* logout */}
      <button
        onClick={logoutButtonHandler}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-2 
              mt-9 `}
      >
        <img src={`/images/Chat.png`} />
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          Logout
        </span>
      </button>
    </div>
  );
};

export default SideBar;
