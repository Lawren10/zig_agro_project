import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navComponent/Navigation";
import Footer from "./components/footerComponent/Footer";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import CrowdFoundingPage from "./pages/crowdFundingPage/CrowdFounding";
import ProductDetailPage from "./pages/productDetailPage/ProductDetail";
import CartPage from "./pages/cartPage/CartPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<CrowdFoundingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/crowdfunding" element={<HomePage />} />
        <Route path="/productdetail" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
