import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import HeaderNavBar from "./components/HeaderNavBar";
import AboutUsScreen from "./scrreens/AboutUsScreen";
import ContactUsScreen from "./scrreens/ContactUsScreen";
import CatalogueScreen from "./scrreens/CatalogueScreen";
import TvChannelsScreen from "./scrreens/TvChannelsScreen";
import HomeScreen from "./scrreens/HomeScreen";
function App() {
  return (
    <>
      <HeaderNavBar />

      <div className="h-[300px] w-full">
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
          <Route path="/ContactUs" element={<ContactUsScreen />} />
          <Route path="/CatalogueScreen" element={<CatalogueScreen />} />
          <Route path="/TvChannelsScreen" element={<TvChannelsScreen />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
export default App;
