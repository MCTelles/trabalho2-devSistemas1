import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Start } from "./views/Start/Start";
import { Login } from "./views/Login/Login";
import { CreateAccount } from "./views/CreateAccount/CreateAccount";
import { BuyProduct } from "./views/BuyProduct/BuyProduct";
import { Cart } from "./views/Cart/Cart";
import { OrderCompleted } from "./views/OrderCompleted/OrderCompleted";
import { Payment } from "./views/Payment/Payment";
import { Profile } from "./views/Profile/Profile";
import { Shop } from "./views/Shop/Shop";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/buy-product" element={<BuyProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-completed" element={<OrderCompleted />} />
      </Routes>
    </Router>
  );
}

export { App };
