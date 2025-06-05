package com.milinda.pos.controller;

import com.milinda.pos.dto.OrderUpdateRequest;
import com.milinda.pos.model.Order;
import com.milinda.pos.repository.OrderRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

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
            @RequestBody @Valid OrderUpdateRequest updateRequest) {

        return orderRepository.findById(id)
                .map(existingOrder -> {
                    // Update order status
                    if (updateRequest.getOrderStatus() != null) {
                        existingOrder.setOrderStatus(updateRequest.getOrderStatus());
                    }

                    // Update bills
                    if (updateRequest.getBills() != null) {
                        if (existingOrder.getBills() == null) {
                            existingOrder.setBills(new Order.BillDetails());
                        }
                        if (updateRequest.getBills().getTotal() != null) {
                            existingOrder.getBills().setTotal(updateRequest.getBills().getTotal());
                        }
                        if (updateRequest.getBills().getTax() != null) {
                            existingOrder.getBills().setTax(updateRequest.getBills().getTax());
                        }
                        if (updateRequest.getBills().getTotalWithTax() != null) {
                            existingOrder.getBills().setTotalWithTax(updateRequest.getBills().getTotalWithTax());
                        }
                    }

                    // Update items
                    if (updateRequest.getItems() != null) {
                        existingOrder.setItems(updateRequest.getItems()
                                .stream()
                                .map(dtoItem -> {
                                    Order.OrderItem item = new Order.OrderItem();
                                    item.setProductId(dtoItem.getProductId());
                                    item.setName(dtoItem.getName());
                                    item.setQuantity(dtoItem.getQuantity());
                                    item.setPrice(dtoItem.getPrice());
                                    return item;
                                })
                                .collect(Collectors.toList()));
                    }

                    existingOrder.setUpdatedAt(LocalDateTime.now());
                    Order updatedOrder = orderRepository.save(existingOrder);

                    return ResponseEntity.ok(Map.of(
                            "success", true,
                            "message", "Order updated successfully",
                            "data", updatedOrder
                    ));
                })
                .orElse(ResponseEntity.notFound().build());
    }
}