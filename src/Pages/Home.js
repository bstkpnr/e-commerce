import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import './home.css'
import {AddButton,FavoriButton,RemoveButton} from '../component/Buttons/Buttons'

function Home({ products,removeProductBasket,addProduct,addFavori }) {
  return (
    <Card style={{ width: "18rem" }} border="primary">
      {products.map((product) => (
          <div key={product.id} className="card">
          <Card.Header>{product.title}</Card.Header>

          <Card.Img src={product.image} alt={product.title} variant="top" />
          <Card.Title className="subTitle">{product.category}</Card.Title>
          <Card.Text className="text">{product.description}</Card.Text>
          <Card.Text className="text">{product.price}</Card.Text>
            
        <div className="addRemove">
        <RemoveButton removeButtons={()=>removeProductBasket(product) }/>
        <AddButton addButtons={()=>addProduct(product)} />
        <FavoriButton favroriButtons={()=>addFavori(product)}/>
        
        </div>
        </div>
        ))}
        </Card>
        
        
        );
    }
    
export default Home;
