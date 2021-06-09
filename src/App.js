import React, { useState, useEffect } from "react";
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import NavBar from "./component/NavBar/NavBar";
import axios from "axios";
import Home from "./Pages/Home";
import Basket from "./component/Basket/Basket";
import Detail from "./Pages/Detail";
import Favories from "./component/Favories/Favories";

const API_URL = "https://60b8a865b54b0a0017c04257.mockapi.io/api/v1/products";
function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [favori, setFavori] = useState([]);
  useEffect(() => {
    axios.get(API_URL).then((response) => setProducts(response.data));
  }, []);

  const addBasket = (product) => {
    const productArr = basket.find((item) => item.id === product.id);
    if (productArr) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...productArr, count: productArr.count + 1 }
            : item
        )
      );
    } else {
      setBasket([...basket, { ...product, count: 1 }]);
      console.log("eklendi",setBasket)
    }
  };
  const addFavories = (product) => {
    const productArr = favori.find((item) => item.id === product.id);
    if (!productArr) {
      setFavori([...favori, { ...product, favorite: true }]);
    }

    alert("Favorilere Eklendi!");
    console.log("eklendi",setFavori)
  };
  const removeBasket = (product) => {
    const productArr = basket.find((item) => item.id === product.id);
    if (productArr) {
      if (productArr.counter === 0) {
        productArr.counter -= 1;
        setBasket([
          ...basket.filter((item) => item.id !== product.id),
          productArr,
        ]);
      } else {
        setBasket([...basket.filter((item) => item.id !== product.id)]);
        console.log("Silindi")
      }
    }
  };
  const removeFavorite = (product) => {
    const productArr = favori.find((item) => item.id === product.id);
    if (productArr) {
      setFavori([...favori.filter((item) => item.id !== product.id)]);
    }
  };
  useEffect(() => {
    console.log(favori);
  }, [favori]);

  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
            <NavBar />
            {/* <Basket basket={basket} /> */}
            <Home
              products={products}
              basket={basket}
              addProduct={addBasket}
              addFavori={addFavories}
              onRemoveFavori={removeFavorite}
              removeProductBasket={removeBasket}
              />
          </Route>
          <Route path="/favori">
            <NavBar />
            <Basket basket={basket} />
            <Favories favorities={favori} addFavories={removeFavorite} />
            </Route>
            <Route path="/">
            <NavBar />
            <Basket basket={basket} />
            <Detail products={products} />
          </Route>
        </Switch>
          </Router>
    </div>
  );
}

export default App;
