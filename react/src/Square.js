import React from "react";
import { useState } from "react";

const isValidInput = (input) => {
  return input === "" || (input.length === 1 && !isNaN(input));
};

const Square = ({ squareValue, rowIndex, colIndex, editable }) => {
  const [value, setValue] = useState(0);
  const [isEditable, setIsEditable] = useState(!editable);
  const [row, setRow] = useState(rowIndex);
  const [col, setCol] = useState(colIndex);
  const style = {};

  if (row > 0 && row % 3 === 0) {
    style["borderTop"] = "2px solid black";
  }
  if (col > 0 && col % 3 === 0) {
    style["borderLeft"] = "2px solid black";
  }

  const handleSquareValueChange = (e) => {
    const newValue = e.target.value;
    if (isValidInput(newValue)) {
      setRow(rowIndex);
      setCol(colIndex);
      setValue(value);
    }
  };
  return (
    <div>
      <input
        style={style}
        type="text"
        value={value}
        isEditable={isEditable}
        onChange={handleSquareValueChange}
      />
      <h3>jeoi</h3>
    </div>
  );
};

export default Square;
