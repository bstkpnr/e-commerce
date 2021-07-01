import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./Pages/Auth/SignIn/SignIn";
import SignUp from "./Pages/Auth/Signup/SignUp";
import Products from "./Pages/Products/Products";
import ProductsDetail from "./Pages/Detail/ProductsDetail"
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div id="#content">


        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/products/:product_id" component={ProductsDetail}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />

        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

