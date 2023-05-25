import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./routes/navbar/Navbar";
import Signin from "./routes/signIn/Signin";

const Shop = () => {
  return <h1>Iam the Shope</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
