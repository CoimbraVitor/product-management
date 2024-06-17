package com.example.management.products.service;

import com.example.management.products.model.Product;
import com.example.management.products.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> listProducts(){
            return productRepository.findAll();
    }

    public void deleteProduct(UUID productId){
        productRepository.deleteById(productId);
    }

    public Product findProductById(UUID productId){
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.orElse(null);
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }
}
