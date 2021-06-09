import React,{useState,useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './component/NavBar/NavBar'
import axios from 'axios'
import Home from './Pages/Home'


const API_URL=('https://60b8a865b54b0a0017c04257.mockapi.io/api/v1/products');
function App() {
  useEffect(() => {
    axios
    .get(API_URL)
    .then((response)=>setProducts(response.data))
  }, []);
  const [products, setProducts] = useState([]);
  const [basket,setBasket]=useState([]);
  const[favori,setFavori]=useState([]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar/>
          <Home 
          products={products}
          
          />

        </Route>
      </Switch>
    </div>
  );
}

export default App;