import "./SeedsTypes.css"

function SeedsTypes() {
  return (
    <>
      <div className="seeds-types-top-triangle"></div>
      <div className="seeds-types-container">
        <div className="seeds-types-container-variety">
          <div className="seeds-types-container-seeds">
            <img src="/images/roses.jpeg" alt="Roses" />
          </div>
        </div>
        <div className="seeds-types-container-variety">
          <div className="seeds-types-container-seeds">
          <img src="/images/manzano.jpg" alt="Roses" />
          </div>
        </div>
        <div className="seeds-types-container-variety">
          <div className="seeds-types-container-seeds">
          <img src="/images/berenjenas.jpg" alt="Roses" />
          </div>
        </div>
        <div className="seeds-types-container-variety">
          <div className="seeds-types-container-seeds">
          <img src="/images/olive-tree.jpg" alt="Roses" />
          </div>
        </div>
      </div>
      <div className="seeds-types-bottom-triangle"></div>
    </>
  )
}

export default SeedsTypes;