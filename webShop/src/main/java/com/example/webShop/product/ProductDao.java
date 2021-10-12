package com.example.webShop.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface ProductDao extends JpaRepository<Product , Integer> {

}