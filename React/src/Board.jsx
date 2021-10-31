import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = ({ sudoku, onChange }) => {
  return (
    <div>
      {sudoku.rows.map((row) => {
        return (
          <div className="field" key={row.index}>
            {row.cols.map((field) => {
              return (
                <Square field={field} key={field.col} onChange={onChange} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
