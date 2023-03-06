import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navComponent/Navigation";
import Footer from "./components/footerComponent/Footer";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
