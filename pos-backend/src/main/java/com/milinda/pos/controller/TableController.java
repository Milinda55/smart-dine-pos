package com.milinda.pos.controller;

import com.milinda.pos.dto.TableUpdateRequest;
import com.milinda.pos.model.Order;
import com.milinda.pos.model.Table;
import com.milinda.pos.repository.TableRepository;
import com.milinda.pos.service.TableService;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/table")
public class TableController {

    private final TableRepository tableRepository;
    private final TableService tableService;

    public TableController(TableRepository tableRepository, TableService tableService) {
        this.tableRepository = tableRepository;
        this.tableService = tableService;
    }

    @PostMapping
    public ResponseEntity<?> addTable(@RequestBody Table table) {
        if (table.getTableNo() == null) {
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Please provide table number"
            ));
        }

        if (tableRepository.existsByTableNo(table.getTableNo())) {
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Table already exists"
            ));
        }

        Table savedTable = tableRepository.save(table);
        return ResponseEntity.status(201).body(Map.of(
                "success", true,
                "message", "Table added!",
                "data", savedTable
        ));
    }

    @GetMapping
    public ResponseEntity<List<Table>> getTables() {
        return ResponseEntity.ok(tableRepository.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTable(
            @PathVariable String id,
            @RequestBody TableUpdateRequest updateRequest) {

        try {
            Table updatedTable = tableService.updateTable(id, updateRequest);
            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "Table updated!",
                    "data", updatedTable
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(Map.of(
                    "success", false,
                    "message", e.getMessage()
            ));
        }
    }
}
