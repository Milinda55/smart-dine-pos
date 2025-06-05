package com.milinda.pos.service;

import com.milinda.pos.dto.TableUpdateRequest;
import com.milinda.pos.model.Order;
import com.milinda.pos.model.Table;
import com.milinda.pos.repository.OrderRepository;
import com.milinda.pos.repository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TableService {

    @Autowired
    private TableRepository tableRepository;

    @Autowired
    private OrderRepository orderRepository;

    public Table updateTable(String id, TableUpdateRequest updateRequest) {
        Table table = tableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Table not found"));

        if (updateRequest.getStatus() != null) {
            table.setStatus(updateRequest.getStatus());
        }

        if (updateRequest.getOrderId() != null) {
            Order order = orderRepository.findById(updateRequest.getOrderId())
                    .orElseThrow(() -> new RuntimeException("Order not found"));
            table.setCurrentOrder(order);
        }

        return tableRepository.save(table);
    }
}

