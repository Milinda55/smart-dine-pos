package com.milinda.pos.repository;

import com.milinda.pos.model.Table;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TableRepository extends MongoRepository<Table, String> {
    boolean existsByTableNo(Integer tableNo);
    Table findByTableNo(Integer tableNo);

    @Aggregation(pipeline = {
            "{ $lookup: { from: 'orders', localField: 'currentOrder', foreignField: '_id', as: 'currentOrder' } }",
            "{ $unwind: { path: '$currentOrder', preserveNullAndEmptyArrays: true } }",
            "{ $project: { " +
                    "tableNo: 1, " +
                    "status: 1, " +
                    "seats: 1, " +
                    "currentOrder: { " +
                    "customerDetails: 1" +
                    "}" +
                    "} }"
    })
    List<Table> findAllWithOrderDetails();
}