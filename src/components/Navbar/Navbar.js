import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">eCommerce</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
      <Link to="/signin"><Button colorScheme="teal" size="md">
          Login
        </Button></Link>
        <Link to="/signup">
        <Button colorScheme="teal" size="md">
          Register
        </Button>
        </Link>
        
        
      </div>
    </nav>
  );
}
