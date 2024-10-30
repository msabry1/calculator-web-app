package com.learn.calculator.service.Impl;

import com.learn.calculator.service.EvaluatorService;
import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;
import org.springframework.stereotype.Service;

@Service
public class Exp4jEvaluatorImpl implements EvaluatorService {

    @Override
    public double evaluate(String expression) throws Exception {
        Expression expr = new ExpressionBuilder(expression).build();
        double result = expr.evaluate();
        if (Double.isNaN(result)) {
            throw new Exception("Calculation Error (NAN)");
        }
        return result ;
    }
}
