import React from 'react';
import {Card} from 'react-bootstrap';

function Details({products}){
    return(

        <Card style={{ width: "18rem" }} border="primary">
      {products.map((product) => (
          <div key={product.id} className="card">
          <Card.Header>{product.title}</Card.Header>

          <Card.Img src={product.image} alt={product.title} variant="top" />
          <Card.Title className="subTitle">{product.category}</Card.Title>
          <Card.Text className="text">{product.description}</Card.Text>
          <Card.Text className="text">${product.price}</Card.Text>
          </div>
              ))}
              </Card>
    )
      };
export default Details;