package com.milinda.pos.controller;

import com.milinda.pos.model.Order;
import com.milinda.pos.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping
    public ResponseEntity<?> addOrder(@RequestBody Order order) {
        Order savedOrder = orderRepository.save(order);
        return ResponseEntity.status(201).body(Map.of(
                "success", true,
                "message", "Order created!",
                "data", savedOrder
        ));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable String id) {
        return orderRepository.findById(id)
                .map(order -> ResponseEntity.ok(Map.of("success", true, "data", order)))
                .orElse(ResponseEntity.status(404).body(Map.of(
                        "success", false,
                        "message", "Order not found"
                )));
    }

    @GetMapping
    public ResponseEntity<List<Order>> getOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrder(
            @PathVariable String id,
            @RequestBody Map<String, String> body) {

        return orderRepository.findById(id)
                .map(existingOrder -> {
                    existingOrder.setOrderStatus(body.get("orderStatus"));
                    Order updatedOrder = orderRepository.save(existingOrder);
                    return ResponseEntity.ok(Map.of(
                            "success", true,
                            "message", "Order updated!",
                            "data", updatedOrder
                    ));
                })
                .orElse(ResponseEntity.status(404).body(Map.of(
                        "success", false,
                        "message", "Order not found"
                )));
    }
}