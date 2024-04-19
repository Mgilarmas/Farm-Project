import "./ContactMap.css";

function ContactMap(){
  return (
    <>
    <div className="background">
      <div className="map-container">
        <h1>Meet us</h1>
        <img src="/images/map.png" alt="map" />
      </div>
      <div className="formulary-container">
        <div className="formulary-personal-data">
          <input type="text" placeholder="Your name"/>
          <input type="number" placeholder="Your phone number"/>
          <input type="email" placeholder="Your Email"/>
        </div>
        <div className="formulary-message">
          <input type="text" placeholder="Your message"/>
          <button>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactMap;