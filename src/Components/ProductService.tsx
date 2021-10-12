import axios from "axios";
<<<<<<< HEAD
import { url } from "inspector";
import { Values } from "./Contact";

class ProductService {
  private data = axios.create({ baseURL: "http://localhost:8080/" });
  private productDate = {};
=======

class ProductService {
  private data = axios.create({ baseURL: "http://localhost:3000/" });
>>>>>>> 4e77cd3d6f476fd9da641515a3db418d922d7983

  public getAllProducts() {
    return this.data.get("products/");
  }

  public getProductById(id: number) {
<<<<<<< HEAD
    return this.data.get("products/" + id);
  }

  public deleteProduct(id: string){
    return this.data.delete("products/deleteProduct/" + id);
  }

  public addProduct(values: Values){
    return this.data.post("/person", values)

=======
    return this.data.get("/products/" + id);
>>>>>>> 4e77cd3d6f476fd9da641515a3db418d922d7983
  }
}
export default ProductService;
