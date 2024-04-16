import SideMenu from "../side-menu/SideMenu";
import "./FieldBackground.css"

function FieldBackground() {
  return (
    <>
      <div className="logo">
        <div className="logo-and-title">
          <img src="/images/starcrop-logo.png" alt="logo" />
          <div>
            <h1>Star</h1>
            <h1>Crops</h1>
          </div>
        </div>
        <input type="text" placeholder="Search"/>
      </div>
      <div className="background-image">
        <div>
          <div className="yellow-filter"></div>
        </div>
      </div>

    </>
  )
}

export default FieldBackground;