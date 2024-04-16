import "./SideMenu.css";

function SideMenu({ toggleSideMenu }) {
  return (
    <>
      <div className="side-menu">
        <i onClick={toggleSideMenu} class="fa-solid fa-xmark"></i>
        <div className="side-menu-list">
          <a href="#">Home</a>
          <a href="Contact">Contact</a>
        </div>
      </div>
    </>
  )
}

export default SideMenu;