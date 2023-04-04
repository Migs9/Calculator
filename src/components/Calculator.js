import React, { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const buttons = [
    'C', '⌫', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const handleClick = (buttonValue) => {
    switch (buttonValue) {
      case '=':
        try {
          setDisplayValue(math.evaluate(displayValue));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'C':
        setDisplayValue('0');
        break;
      case '⌫':
        if (displayValue.length === 1) {
          setDisplayValue('0');
        } else {
          setDisplayValue(displayValue.slice(0, -1));
        }
        break;
      default:
        if (displayValue === '0') {
          setDisplayValue(buttonValue);
        } else {
          setDisplayValue(displayValue + buttonValue);
        }
    }
  }

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttons.map(button =>
          <button key={button} onClick={() => handleClick(button)} 
          className={button === '⌫' || button === '=' ? 'wide-button' : ''}>{button}
          {/* this classname allows the 2 buttons to get their own class for the purposes of being double width */}
          
          </button>
        )}
      </div>
    </div>
  );
}

export default Calculator;