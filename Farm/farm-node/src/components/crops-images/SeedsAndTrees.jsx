import CropsImages from "../../services/photos/CropsImages";
import "./CropsImages.css";

function SeedsAndTrees() {
  return (
    <>
    {/* arreglar esto */}
      <div className="crops-container">
        {
          CropsImages.map((CropsImages, index) => (
            <div className="image-list">
              <img key={index} src={services/photos/CropsImages.fileName} alt="imagen" />
              <span>{CropsImages.name}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SeedsAndTrees;