import React from "react";
import Square from "./Square.js";
import { useState } from "react";

const Board = ({ boardState }) => {
  const board = [];

  const handleSquareValueChange = (i, j, newValue) => {
    this.props.onSquareValueChange(i, j, newValue);
  };

  for (let i = 0; i < boardState.length; i++) {
    let currentRow = [];
    for (let j = 0; j < boardState[i].lenth; j++) {
      let square = (
        <Square
          key={"" + i + j}
          value={boardState[i][j].cellValue}
          editable={boardState[i][j].editable}
          rowIndex={i}
          colIndex={j}
          onValueChange={handleSquareValueChange}
        />
      );
      currentRow.push(<div key={i}>{currentRow}</div>);
    }
  }
  return (
    <div className="grid-board">
      <table>
        <body>{board}</body>
      </table>
    </div>
  );
};

export default Board;
