import "./App.css";

import { Route, Router, Routes } from "react-router-dom";

import AboutUsScreen from "./scrreens/AboutUsScreen";
import CatalogueScreen from "./scrreens/CatalogueScreen";
import Footer from "./components/Footer";
import HeaderNavBar from "./components/HeaderNavBar";
import HomeScreen from "./scrreens/HomeScreen";
import OurProcessScreen from "./scrreens/OurProcessScreen";

function App() {
  return (
    <>
      <HeaderNavBar />

      <div className=" w-full">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Catalogue" element={<CatalogueScreen />} />
          <Route path="/OurProcess" element={<OurProcessScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
export default App;
