import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { LoginContext } from "../Contexts/LoginContext";
import "../Style/Main.css";
import { ProductType } from "./ProductType";

export default function ProductCard({
  id,
  product_name,
  product_price,
  is_available,
}: ProductType) {
  const { isAuthenticated, login } = useContext(LoginContext);

  return (
    <Card>
      <Card.Img
        src="http://dummyimage.com/174x100.png/ff4444/ffffff"
        variant="top"
        alt="RandPic"
      />
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text>
          Description: Description: Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </Card.Text>
        <p>Price: {product_price}</p>

        <Button href={"http://localhost:3001/products/" + id}>View</Button>
      </Card.Body>
    </Card>
  );
}
