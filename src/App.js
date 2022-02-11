import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import BodyComponent from "./components/bodyComponent";
import FeaturedBlog from "./components/featured";
import FooterComponent from "./components/footer";
import NavbarComponent from "./components/navbar";

function App() {
  return (
    <div style={{ paddingRight: "7em", paddingLeft: "7em" }}>
      <NavbarComponent />
      <FeaturedBlog />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
