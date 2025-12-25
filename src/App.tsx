import { Routes, Route } from "react-router-dom";
import What_We_Offer from "./pages/LandingPage";
import Home from "./pages/Home";
import './App.css'
import OfferLayout from "./layouts/OfferLayout";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <Routes>
      {/* HOME LAYOUT */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* OFFER LAYOUT */}
      <Route element={<OfferLayout />}>
        <Route path="/what-we-offer" element={<What_We_Offer />} />
      </Route>
    </Routes>
  )
}

export default App;
