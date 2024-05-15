import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
        <img src="/images/starcrop-logo.png" alt="logo" />
        </div>
        <div className="seed-list">
          <h3>Seeds</h3>
          <ul>
            <a href="">Fruits</a>
            <a href="">Vegetables</a>
            <a href="">Flowers</a>
            <a href="">Trees</a>
          </ul>
        </div>
        <div className="fruit-list">
          <h3>Fruits</h3>
          <ul>
            <a href="">Apple</a>
            <a href="">Tomato</a>
            <a href="">Strawberry</a>
            <a href="">Orange</a>
          </ul>
        </div>
        <div className="autor">
          <h3>Web design by: Mauricio Gil Armas</h3>
          <h3>Contact: mauriciogilarmas@gmail.com</h3>
        </div>
        <div className="webs">
          <a className="fa-brands fa-instagram" href="https://instagram.com/mauri_gab?igshid=OGQ5ZDc2ODk2ZA=="></a>
          <a className="fa-brands fa-tiktok" href="https://www.tiktok.com/@mauri_gab?_t=8hPhxFb0AcL&_r=1"></a>
          <a className="fa-brands fa-github" href="https://github.com/Mgilarmas"></a>
          <a className="fa-brands fa-linkedin"
            href="https://www.linkedin.com/in/gilarmas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"></a>
          <a className="fa-brands fa-facebook" href="https://www.facebook.com/mauricio.j.gil.1"></a>
          <a className="fa-solid fa-square-rss" href="./RSS/RSS.xml"></a>
        </div>
        <div className="terms">
          <a href="PrivacyCookies">Privacy and Cookies policy</a>
          <p>|</p>
          <a href="TermSales">Terms of sale</a>
        </div>
        <p>© 2024 STAR CROPS Todos los derechos reservados</p>
      </div>
    </>
  )
}

export default Footer;