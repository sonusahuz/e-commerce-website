import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import SingleProduct from "./pages/SingleProduct";
import SearchProduct from "./pages/SearchProduct";
import Cart from "./pages/Cart";
import SuccessOrder from "./pages/SuccessOrder";
import PaymentMode from "./pages/PaymentPage";
import Header from "./components/ui/Header";
import OrderForm from "./components/ui/OrderForm";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/products/:id" Component={SingleProduct} />
        <Route path="/search/:query" Component={SearchProduct} />
        <Route path="/cart" Component={Cart} />
        <Route path="/order" Component={OrderForm} />
        <Route path="/payment" Component={PaymentMode} />
        <Route path="/success" Component={SuccessOrder} />
      </Routes>
    </BrowserRouter>
  );
}
