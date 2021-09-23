import axios from "axios";

class ProductService {
  private data = axios.create({ baseURL: "http://localhost:3000/" });

  public getAllProducts() {
    return this.data.get("products/");
  }

  public getProductById(id: number) {
    return this.data.get("/products/" + id);
  }

  public deleteProductById(id: number) {
    return this.data.get("/product/" + id);
  }
}
export default ProductService;
