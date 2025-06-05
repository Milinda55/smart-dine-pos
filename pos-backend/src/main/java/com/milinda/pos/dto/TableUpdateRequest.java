package com.milinda.pos.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class TableUpdateRequest {
    private String status;
    private String orderId;

    @JsonCreator
    public TableUpdateRequest(@JsonProperty("status") String status,
                              @JsonProperty("orderId") String orderId) {
        this.status = status;
        this.orderId = orderId;
    }
}
