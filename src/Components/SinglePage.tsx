import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { ProductType } from "./ProductType";
import "../Style/Main.css";
import ProductService from "./ProductService";

export default function SinglePage() {
  const { id } = useParams<{ id: string }>();

  const [product, setProducts] = useState<ProductType>({} as ProductType);
  const [isLoading, setisLoading] = useState<boolean>(true);

  const service = new ProductService();

  useEffect(() => {
    service.getProductById(parseInt(id)).then((product) => {
      setProducts(product.data);
      setisLoading(false);
      console.log("done");
    });
  }, [id]);
  return (
    <div className="SinglePage">
      <Container>
        <Row>
          {isLoading && <h1>Loading...</h1>}
          <Card>
            <Card.Img
              src="http://dummyimage.com/174x100.png/ff4444/ffffff"
              variant="top"
              alt="RandPic"
            />
            <Card.Body>
              <Card.Title>{product.product_name}</Card.Title>
              <Card.Text>
                Description: Description: Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. 
              </Card.Text>
              <p>Price: {product.product_price}</p>

              <Button href={"http://localhost:3000/products"}>Back</Button>

              <Button href={"http://localhost:3000/products"} onClick={()=>service.deleteProduct(id)}>Delete</Button>

            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
