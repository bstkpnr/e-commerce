import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./component/Catalog/Products";
import Detail from "./component/Detail/Detail";
import Error from "./component/Error/Error";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/details" component={Detail} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;