package com.learn.calculator.controller;

import com.learn.calculator.dto.CalculationRequest;
import com.learn.calculator.dto.CalculationResponse;
import com.learn.calculator.service.EvaluatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class EvaluatorController {
    EvaluatorService evaluatorService;

    @Autowired
    public EvaluatorController(EvaluatorService evaluatorService) {
        this.evaluatorService = evaluatorService;
    }

    @PostMapping("/evaluate")
    ResponseEntity<CalculationResponse> evaluate(@RequestBody CalculationRequest calculationRequest) throws Exception{
        String exp = calculationRequest.getExpression();
        double result = evaluatorService.evaluate(exp);
        return ResponseEntity.ok(new CalculationResponse(result));
    }
}
