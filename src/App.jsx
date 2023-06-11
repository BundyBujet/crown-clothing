import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./routes/navbar/Navbar";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import Authantication from "./routes/Authantication/Authantication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authantication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
