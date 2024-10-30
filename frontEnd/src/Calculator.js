import React, { useState } from 'react';
import './Calculator.css';
import axios from 'axios';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [expression, setExpression] = useState('');
  const [isEvaluated, setIsEvaluated] = useState(false);


  const handleClick = (value) => {
    setIsEvaluated(0) ;
    if (display === 'Error') {
      setDisplay(value);
      setExpression(value);
    } else {
      setDisplay(prev => prev + value);
      setExpression(prev => prev + value);
    }
  };

  const removelast = () => {
    setIsEvaluated(0) ;
    if (expression.endsWith("sqrt(")) {
      setDisplay(expression.slice(0, -5));
      setExpression(expression.slice(0, -5));
    }
    else{
      setDisplay(expression.slice(0, -1));
      setExpression(expression.slice(0, -1));
    }
  };


  const handleClear = () => {
    setDisplay('');
    setExpression('');
  };

  const handleCalculate = async () => {
    if (isEvaluated === true) return;
    try {
      const response = await axios.post('http://localhost:8080/evaluate', { expression });
      if (response.status === 200) {
        let result = response.data.result;
        if (typeof result === 'number') {
          result = parseFloat(result.toFixed(6));
        }
        setDisplay(result.toString());
        setExpression(result.toString());
      } else {
        setDisplay('Error');
        setExpression('');
      }
    } catch (error) {
      setDisplay('Error');
      setExpression('');
    }
    setIsEvaluated(true);
  };

  return (
    <div>
    <div className="calculator-container">
      <div className="calculator-display">{display}</div>
      
      <div className="calculator-buttons">
        {/* Row 1 */}
        <button onClick={() => handleClick('%')} className="calculator-button">%</button>
        <button onClick={handleClear} className="calculator-button">CE</button>
        <button onClick={handleClear} className="calculator-button">C</button>
        <button onClick={removelast} className="calculator-button remove-button"></button>

        {/* Row 2 */}
        <button onClick={() => handleClick('(')} className="calculator-button">(</button>
        <button onClick={() => handleClick(')')} className="calculator-button">)</button>
        <button onClick={() => handleClick('sqrt(')} className="calculator-button">√</button>
        <button onClick={() => handleClick('/')} className="calculator-button">÷</button>

        {/* Row 3 */}
        <button onClick={() => handleClick('7')} className="calculator-button">7</button>
        <button onClick={() => handleClick('8')} className="calculator-button">8</button>
        <button onClick={() => handleClick('9')} className="calculator-button">9</button>
        <button onClick={() => handleClick('*')} className="calculator-button">×</button>

        {/* Row 4 */}
        <button onClick={() => handleClick('4')} className="calculator-button">4</button>
        <button onClick={() => handleClick('5')} className="calculator-button">5</button>
        <button onClick={() => handleClick('6')} className="calculator-button">6</button>
        <button onClick={() => handleClick('-')} className="calculator-button">-</button>

        {/* Row 5 */}
        <button onClick={() => handleClick('1')} className="calculator-button">1</button>
        <button onClick={() => handleClick('2')} className="calculator-button">2</button>
        <button onClick={() => handleClick('3')} className="calculator-button">3</button>
        <button onClick={() => handleClick('+')} className="calculator-button">+</button>

        {/* Row 6 */}
        <div className="calculator-button-placeholder"></div>
        <button onClick={() => handleClick('0')} className="calculator-button">0</button>
        <button onClick={() => handleClick('.')} className="calculator-button">.</button>
        <button onClick={handleCalculate} className="calculator-button-equals">=</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;