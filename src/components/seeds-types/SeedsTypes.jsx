import "./SeedsTypes.css"

function SeedsTypes() {
  return (
    <>
      <div className="seeds-types-top-triangle"></div>
      <div className="seeds-types-container">
        <div className="seeds-types-container-variety">
          <div id="flowers"></div>
        </div>
        <div className="seeds-types-container-variety">
          <div id="fruits"></div>
        </div>
        <div className="seeds-types-container-variety">
          <div id="vegetables"></div>
        </div>
        <div className="seeds-types-container-variety">
          <div id="trees"></div>
        </div>
      </div>
      <div className="seeds-types-bottom-triangle"></div>
    </>
  )
}

export default SeedsTypes;