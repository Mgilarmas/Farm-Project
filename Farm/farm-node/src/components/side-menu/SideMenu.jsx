import "./SideMenu.css";

function SideMenu({ toggleSideMenu }) {
  return (
    <>
      <div className="side-menu">
        <i onClick={toggleSideMenu} class="fa-solid fa-xmark"></i>
      </div>
    </>
  )
}

export default SideMenu;