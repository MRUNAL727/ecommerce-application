import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route,Routes , Redirect} from "react-router-dom";
// import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from 'react'

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}> </Route>
        <Route path="/products/:category" element={<ProductList />}> </Route>
        <Route path="/product/:id" element={ <Product />}> </Route>
        <Route path="/cart" element={<Cart />}> </Route>
        {/* <Route path="/success"> */}
          {/* <Success /> */}
        {/* </Route> */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} ></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} > </Route>
      </Routes>
    </Router>
  );
}

export default App;