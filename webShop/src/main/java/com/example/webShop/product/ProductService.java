package com.example.webShop.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private ProductDao productDao;

    public ProductService(){}
    @Autowired
    public ProductService(ProductDao productDao){
        this.productDao = productDao;
    }


    public Product addProduct(Product product){
        return productDao.save(product);
    }

    public void deleteProduct(int id){
         productDao.deleteById(id);
    }


    public List<Product> getAllProduct(){
        List<Product> products = productDao.findAll();
        System.out.println(products);
        return products;

    }

   public Product getSingleProduct(int id){
        Optional<Product> product = productDao.findById(id);
        return product.orElse(null);
    }

    public Product updateProduct(int id, Product newProduct){
        Product updatedProduct = productDao.findById(id) //
                .map(product -> {
                    product.setProduct_name(newProduct.getProduct_name());
                    product.setProduct_price(newProduct.getProduct_price());
                    product.setIs_available(newProduct.isIs_available());
                    return productDao.save(product);
                }) //
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return productDao.save(newProduct);
                });
        return updatedProduct;
    }
}
