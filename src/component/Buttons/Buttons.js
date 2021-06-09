import React from "react";
import {Button} from 'react-bootstrap'

function AddButton({ addButtons }) {
  return  <Button variant="success" onClick={addButtons}>+</Button>
}

function FavoriButton({ favoriButtons }) {
    return <Button variant="info" onClick={favoriButtons}>Favoriler</Button>
}

function FavoriRemove({ favoriRemove }) {
  return <Button variant="warning" onClick={favoriRemove}>Kaldır</Button>
}

function RemoveButton({ removeButtons }) {
  return <Button variant="danger" onClick={removeButtons}>-</Button>
}

export { FavoriButton, FavoriRemove, RemoveButton, AddButton };
