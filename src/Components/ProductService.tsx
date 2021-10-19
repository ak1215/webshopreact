import axios from "axios";

import { Values } from "./Contact";

class ProductService {
  private data = axios.create({ baseURL: "http://localhost:8080/" });

  public getAllProducts() {
    return this.data.get("products/");
  }

  public getProductById(id: number) {

    return this.data.get("products/" + id);
  }

  public deleteProduct(id: string){
    return this.data.delete("products/deleteProduct/" + id);
  }

  public addProduct(values: Values){
    return this.data.post("/person", values)

  }
}
export default ProductService;
