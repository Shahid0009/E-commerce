import "./App.css";
import "./index.css";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Login from "./components/Login/Login"
// import  Register from "./pages/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import kids from "./components/Assets/banner_kids.png"
import mens from "./components/Assets/banner_mens.png"
import womens from "./components/Assets/banner_women.png"
function App(props) {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mens" element={<ShopCategory banner= {mens} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner= {womens} category="womens" />} />
          <Route path="/kids" element={<ShopCategory banner= {kids} category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element="hi" />
          </Route>
          {/* <Route path="/product/:id" element={<Product/>} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
