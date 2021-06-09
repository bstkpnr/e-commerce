import React from "react";
import { Navbar,Nav} from "react-bootstrap";
import {FaShoppingBasket} from 'react-icons/fa'

function NavBar() {
  return (
      

    <Navbar bg="dark" variant="dark" expand="dark">
      <Navbar.Brand href="#">Shopping</Navbar.Brand>
        <Nav className="row">
          <Nav.Link href="/home" className="mr-2">Ana Sayfa</Nav.Link>
          <Nav.Link href="/favori" className="mr-2">Favoriler</Nav.Link>
          <Nav.Link href="/basket"><FaShoppingBasket /></Nav.Link>
        </Nav>
     
    </Navbar>
  );
}
export default NavBar;
