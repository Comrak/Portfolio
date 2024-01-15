import { Link } from "react-router-dom";
import { useState } from "react";
import { LiaHamburgerSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState("hidden");
  const [hambMenu, setHambMenu] = useState(false);
  //make a conts with all the menu items
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Education", link: "/Edu" },
    { id: 3, name: "Projects", link: "/Projects" },
  ];
  const path = window.location.pathname;
  return (
    <div className=" text-white font-jost fixed top-0 left-0 right-0 z-50">
      <div className="flex bg-theme justify-between items-center p-2 shadow-lg">
        <div className="flex justify-between w-full">
          <h1
            className="text-4xl font-bold text-white transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Jose Nardulli" : "JN"}
          </h1>
          <button
            onClick={() => {
              setShowMenu(showMenu === "hidden" ? "flex" : "hidden");
              setHambMenu(!hambMenu);
            }}
            className="lg:hidden xl:hidden sm:flex"
          >
            {hambMenu ? (
              <IoMdClose size={50} />
            ) : (
              <LiaHamburgerSolid size={50} />
            )}
          </button>
        </div>
        <div className="hidden lg:flex xl:flex">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 ${
                  item.link === path && "bg-white text-black rounded-md"
                }`}
                key={item.id}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </div>

        <div className={`md:flex flex-col lg:hidden xl:hidden ${showMenu}`}>
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 ${
                  item.link === path && "bg-white text-black rounded-md"
                }`}
                key={item.id}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Header;
