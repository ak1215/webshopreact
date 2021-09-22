import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SinglePage from "./Components/SinglePage";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchContextProvider from "./Contexts/SearchContext";
import Home from "./Components/Home";
import Support from "./Components/Support";
import AllProducts from "./Components/AllProducts";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={AllProducts} />
          <Route path="/products/:id" exact component={SinglePage} />
          <Route path="/support" exact component={Support} />

        </Switch>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
