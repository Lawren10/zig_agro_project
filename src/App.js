import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navComponent/Navigation";
import Footer from "./components/footerComponent/Footer";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import CrowdFoundingPage from "./pages/crowdFundingPage/CrowdFounding";
import ProductDetailPage from "./pages/productDetailPage/ProductDetail";
import CartPage from "./pages/cartPage/CartPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Accounts from "./pages/paymentPage/Accounts";
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<Accounts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
