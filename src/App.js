import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FeaturedBlog from "./components/featured";
import NavbarComponent from "./components/navbar";

function App() {
  return (
    <div style={{ paddingRight: "7em", paddingLeft: "7em" }}>
      <NavbarComponent></NavbarComponent>
      <FeaturedBlog></FeaturedBlog>
    </div>
  );
}

export default App;
