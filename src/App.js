import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import axios from "axios";
import Home from "./Pages/Home";

//const API_URL = "https://60b8a865b54b0a0017c04257.mockapi.io/api/v1/products";
function App() {
  useEffect(() => {
    axios.get("https://60b8a865b54b0a0017c04257.mockapi.io/api/v1/products").then((response) => setProducts(response.data));
  }, []);
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [favori, setFavori] = useState([]);

  const addBasket = (product) => {
    const deneme = basket.find((item) => item.id === product.id);
      if (deneme) {
        setBasket(

          basket.map((item)=>item.id===product.id ? {...deneme,count:deneme.count+1} : item)
          );
      } else {
        setBasket.push([...basket,{ ...deneme, count: 1 }]);
      }
  };
  const addFavori = (product) => {
    const deneme = favori.find((item) => item.id === product.id);
    if (!deneme) {
      setFavori([...favori, { ...product, favorite: true }]);
    }

    alert("Favorilere Eklendi!");
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home
            products={products}
            basket={basket}
            addButtons={addBasket}
            favoriButtons={addFavori}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
