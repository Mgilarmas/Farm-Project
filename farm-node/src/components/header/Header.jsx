import { useState } from "react";
import SideMenu from "../side-menu/SideMenu";
import "./Header.css"

function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(sideMenuOpen ? false : true);
  }

  return (
    <>
      <div className="header">
        <i onClick={toggleSideMenu} class="fa-solid fa-bars"></i>
        <a href="Home">Home</a>
        <a href="Flowers">Flowers</a>
        <a href="Forum">Forum</a>
        <a href="Contact">Contact</a>
      </div>
      {sideMenuOpen ? <SideMenu toggleSideMenu={toggleSideMenu} /> : ""}
    </>

  )
}

export default Header;