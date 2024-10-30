package com.learn.calculator.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CalculationResponse {
    private double result;
    private String errorMessage;

    public CalculationResponse(double result) {
        this.result = result;
    }
}
