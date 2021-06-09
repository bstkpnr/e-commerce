import React from "react";
import { FavoriRemove } from "../Buttons/Buttons";
import { Card } from "react-bootstrap";

function Favorite({ favorities, onRemoveFavori }) {
  return (
    <Card style={{ width: "18rem" }} border="primary">
      {favorities.map((favori) => (
        <div key={favori.id} className="card">
          <Card.Header>{favori.title}</Card.Header>

          <Card.Img src={favori.image} alt={favori.title} variant="top" />
          <Card.Title className="subTitle">{favori.category}</Card.Title>
          <Card.Text className="text">{favori.description}</Card.Text>
          <Card.Text className="text">${favori.price}</Card.Text>
          <div className="remove">
            <FavoriRemove favoriRemove={() => onRemoveFavori} />
          </div>
        </div>
      ))}
    </Card>
  );
}

export default Favorite;
