import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "Clubs", src: "Chat" },
    { title: "About us", src: "Chat" },
    // { title: "Accounts", src: "User", gap: true },
    // { title: "Schedule ", src: "Calendar" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ];
  return (
    <div
      className={` sticky top-0 ${
        open ? "w-full md:w-1/4" : "w-20 "
      } bg-blue-700 h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="images/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-700
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center flex-col">
        <img
          src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
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
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`images/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
// import React, { useEffect, useState } from "react";

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);
//   const menuLinks = [
//     { name: "HOME", link: "#home" },
//     { name: "ABOUT", link: "#about" },
//     { name: "SKILLS", link: "#skills" },
//     { name: "PROJECTS", link: "#projects" },
//     { name: "CONTACT", link: "#contact" },
//   ];
//   // useEffect(() => {
//   //   window.addEventListener("scroll", () => {
//   //     const nav = document.querySelector("nav");
//   //     window.scrollY > 0 ? setSticky(true) : setSticky(false);
//   //   });
//   // }, []);
//   return (
//     <nav className="fixed w-full left-0 top-0 z-[999] bg-white  text-gray-900">
//       {/* <nav
//       className={`fixed w-full left-0 top-0 z-[999] ${
//         sticky ? "bg-white/60  text-gray-900" : "text-white"
//       }`}
//     > */}
//       <div className="flex items-center justify-between">
//         <div className="mx-7">
//           <h4 className="text-4xl uppercase font-bold">
//             A<span className="text-cyan-600">le</span>x
//           </h4>
//         </div>
//         <div
//           className={` ${
//             sticky ? "md:bg-white/0 bg-white" : "bg-white"
//           } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
//         >
//           <ul className="flex items-center gap-1 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li key={i} className="px-6 hover:text-cyan-600">
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className={`z-[999]  ${
//             open ? "text-gray-900" : "text-gray-100"
//           } text-3xl md:hidden m-5`}
//         >
//           <ion-icon name="menu" className="text-red-300"><p className="text-black">|||</p></ion-icon>
//         </div>
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/3 h-screen
//       px-7 py-2 font-medium bg-white top-0 duration-300 ${
//         open ? "right-0" : "right-[-100%]"
//       }`}
//         >
//           <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li
//                 onClick={() => setOpen(false)}
//                 key={i}
//                 className="px-6 hover:text-cyan-600"
//               >
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
