import cropsImages from "../../services/photos/cropsImages";
import "./SeedsAndTrees.css";

function SeedsAndTrees() {
  return (
    <>
      <div className="crops-container">
        {
          cropsImages.map((cropsImages, index) => (
            <>
              <div className="image-list">
                <img key={index} src={`/images/${cropsImages.fileName}`} alt="imagen" />
                <div className="image-text">
                  <span>{cropsImages.name}</span>
                  <p>{cropsImages.text}</p>
                </div>
              </div>
            </>

          ))
        }
      </div>
    </>
  )
}

export default SeedsAndTrees;