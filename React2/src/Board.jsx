import React from "react";
import Square from "./Square";

const Board = (props) => {
  const { sudoku } = props;
  return (
    <div>
      {sudoku.rows.map((row) => {
        <div key={row.index}>
          {row.cols.map((field) => {
            <Square field={field} key={field.col} />;
          })}
        </div>;
      })}
    </div>
  );
};

export default Board;
