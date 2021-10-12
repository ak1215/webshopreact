import React, { useContext, useEffect, useState } from "react";
import LoginContextProvider, { LoginContext } from "../Contexts/LoginContext";
import ProductCard from "./ProductCard";
import { ProductType } from "./ProductType";

import "../Style/Main.css";
import { Row, Col, Container } from "react-bootstrap";
import { SearchContext } from "../Contexts/SearchContext";

export default function AllProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
        setisLoading(false);
        console.log("done");
      });
  }, []);

  const { isAuthenticated } = useContext(LoginContext);
  const {searchTerm} = useContext(SearchContext)

  return (
    <LoginContextProvider>
      <div className="AllProducts">
        <Container>
          <div className="ListOfCards">

            <Row>
              {isLoading && <h1>Loading...</h1>}
              {isAuthenticated && <h1>...</h1>}
              {products.filter((filtered) => {
             return filtered.product_name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === "";
              }).map((product: ProductType) => {
                return (
                  <Col md={4}>
                    <ProductCard
                      id={product.id}
                      product_name={product.product_name}
                      product_price={product.product_price}
                      is_available={product.is_available}
                    />
                  </Col>
                );
              })}{" "}
            </Row>
          </div>
        </Container>
      </div>
    </LoginContextProvider>
  );
}
