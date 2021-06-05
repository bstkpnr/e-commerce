import React from "react";
import { Wrapper, ImageWrapper, Title, Paragraph } from "./styledcard";

function ProductCard(props) {
  // title, price, image, description, category
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={props.image}
          alt={props.title}
        />
      </ImageWrapper>
      <Title>{props.title}</Title>
      <Paragraph weight={"bold"}>{props.price}</Paragraph>
      <Paragraph color={"black"}>{props.category}</Paragraph>
      <Paragraph>{props.description}</Paragraph>
    </Wrapper>
  );
}

export default ProductCard;
