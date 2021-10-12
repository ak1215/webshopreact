package com.example.webShop.product;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;
@Entity
public class Product {
    @Id
    private int id;
    private String product_name;
    private String product_price;
    private boolean is_available;

    public Product() {

    }

    public Product(int id, String product_name, String product_price, boolean is_available) {
        this.id = id;
        this.product_name = product_name;
        this.product_price = product_price;
        this.is_available = is_available;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getProduct_price() {
        return product_price;
    }

    public void setProduct_price(String product_price) {
        this.product_price = product_price;
    }

    public boolean isIs_available() {
        return is_available;
    }

    public void setIs_available(boolean is_available) {
        this.is_available = is_available;
    }
}
