import cropsImages from "../../services/photos/cropsImages";
import "./SeedsAndTrees.css";

function SeedsAndTrees() {
  return (
    <>
      <div className="crops-container">
          <div className="crops-container-triangle-top"></div>
          
        {
          cropsImages.map((cropsImages, index) => (
            <>
              <div className="image-list">
                <div className="image-list-crops">
                  <img key={index} src={`/images/${cropsImages.fileName}`} alt="imagen" />
                </div>
                <div className="image-list-text">
                  <span>{cropsImages.name}</span>
                  <p>{cropsImages.text}</p>
                </div>
              </div>
            </>

          ))
        }
        <div className="crops-container-triangle-bottom"></div>
      </div>
    </>
  )
}

export default SeedsAndTrees;