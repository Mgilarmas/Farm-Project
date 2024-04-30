import "./SideMenu.css";

function SideMenu({ toggleSideMenu }) {
  return (
    <>
      <div className="side-menu">
        <i onClick={toggleSideMenu} className="fa-solid fa-xmark"></i>
        <div className="side-menu-list">
          <a href="Home">Home</a>
          <a href="Flowers">Flowers</a>
          <a href="Forum">Forum</a>
          <a href="Contact">Contact</a>
        </div>
      </div>
    </>
  )
}

export default SideMenu;