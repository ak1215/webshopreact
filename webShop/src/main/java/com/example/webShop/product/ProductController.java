package com.example.webShop.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

   @PostMapping("/addProduct")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }

    @GetMapping
    public List<Product> findAllProducts(){
        return productService.getAllProduct();
    }

    @PutMapping("/updateProduct/{id}")
    public Product updateProduct(@RequestBody Product newProduct, @PathVariable int id){
        return productService.updateProduct(id, newProduct);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public void deleteProduct(@PathVariable("id") int id){
         productService.deleteProduct(id);
    }

    @GetMapping("/{id}")
    public Product findProductById(@PathVariable int id){
        return productService.getSingleProduct(id);
    }

}
