package com.learn.calculator.controller;

import com.learn.calculator.dto.CalculationResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class EvaluatorExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<CalculationResponse> handleException(Exception ex) {
        CalculationResponse response = new CalculationResponse();
        response.setErrorMessage(ex.getMessage());
        return ResponseEntity.badRequest().body(response);
    }
}
