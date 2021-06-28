import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./Pages/Auth/SignIn/SignIn";
import SignUp from "./Pages/Auth/Signup/SignUp";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div id="#content">


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />

        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
function Home() {
  return <h2>Home</h2>;
}
