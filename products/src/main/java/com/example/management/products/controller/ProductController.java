package com.example.management.products.controller;


import com.example.management.products.model.Product;
import com.example.management.products.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/products")
public class ProductController {

        @Autowired
        ProductService productService;

        @GetMapping("/{id}")
        public ResponseEntity<Product> getProductsById(@PathVariable UUID id){
            Product product = productService.findProductById(id);
            if(product == null){
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(product);
        }

        @GetMapping
        public List<Product> listProducts(){
            return productService.listProducts();
        }

        @PostMapping
        public ResponseEntity<Product> createProduct(@RequestBody Product product){
            Product createdProduct = productService.saveProduct(product) ;
            return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteProduct(@PathVariable UUID id){
            productService.deleteProduct(id);
            return ResponseEntity.noContent().build();
        }

        @PutMapping("/{id}")
        public ResponseEntity<Object> updateProduct(@PathVariable UUID id, @RequestBody Product product){
            Product produtoEncontrado = productService.findProductById(id);
            if(produtoEncontrado == null){
                return ResponseEntity.notFound().build();
            }
            produtoEncontrado.setName(product.getName());
            produtoEncontrado.setDescription(product.getDescription());
            produtoEncontrado.setImage(product.getImage());
            produtoEncontrado.setPrice(product.getPrice());

           Product savedProduct = productService.saveProduct(produtoEncontrado);

            return ResponseEntity.ok(savedProduct);
        }


}
