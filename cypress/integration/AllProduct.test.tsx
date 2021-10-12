import { mount } from "@cypress/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { visitParameterList } from "typescript";
import AllProducts from "../../src/Components/AllProducts";

beforeEach(() => {
cy.visit("http://localhost:3000/products")
});
describe("", () => {
    it("", () => {
        // Contains
        cy.get("h1").contains("Loading...");
    
    
    });
});
