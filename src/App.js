import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogComponent from "./components/blog";

import Router from "./components/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/blog" element={<BlogComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
