package com.milinda.pos.repository;

import com.milinda.pos.model.Table;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TableRepository extends MongoRepository<Table, String> {
    boolean existsByTableNo(Integer tableNo);
    Table findByTableNo(Integer tableNo);
}