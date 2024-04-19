import flowersImages from "../../services/photos/FlowersImages";
import "./FlowersInfo.css"

function FlowersInfo(){
  return(
    <>
      <div className="flowers-container">
        {
          flowersImages.map((flowersImages, index) => (
            <>
              <div className="flower-image-list">
                <img key={index} src={`/images/${flowersImages.fileName}`} alt="imagen" />
                <span>{flowersImages.name}</span>
                <p>{flowersImages.plant}</p>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default FlowersInfo;