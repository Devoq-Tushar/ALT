import { Routes, Route } from "react-router-dom";
import What_We_Offer from "./pages/LandingPage";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import './App.css'

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Landing page */}
        <Route path="/what-we-offer" element={<What_We_Offer />} />
      </Routes>
    </MainLayout>
  )
}

export default App;
