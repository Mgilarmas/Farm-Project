// import SeedsAndTrees from "../../components/crops-images/SeedsAndTrees";
import FieldBackground from "../../components/field-background/FieldBackground";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SeedsAndTrees from "../../components/seeds-and-trees/SeedsAndTrees";
import SideMenu from "../../components/side-menu/SideMenu";

function Home() {
  return (
    <>
      {/* <SideMenu/> */}
      <Header />
      <FieldBackground />
      <SeedsAndTrees/>
      <Footer />
    </>
  )
}

export default Home;