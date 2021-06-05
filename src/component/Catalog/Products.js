import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardCol, CardWrapper, Title } from "./styled";
import ProductCard from "./ProductCard/ProductCard";

const API_URL = "https://60b8a865b54b0a0017c04257.mockapi.io/api/v1/products";

export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <Title>E-COMMERCE SİTE</Title>
      <div>
        <Link to="/detail">DETAY</Link>
      </div>
      <CardWrapper>
          {product.map((product)=>{
              return(
                  <div CardWey={product.id}>
                      <CardCol size={3}>
                          <ProductCard
                          image={product.image}
                          title={product.title}
                          price={product.price}
                          category={product.category}
                          description={product.description} 
                          
                          />

                      </CardCol>

                  </div>
              )
          })}
      </CardWrapper>
    </div>
  );
}
