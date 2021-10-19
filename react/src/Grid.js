import React from "react";
import Square from "./Square.js";

export default function Grid({ board }) {
  const grid = [];
  for (let row = 0; row < 9; row++) {
    grid.push([]);
    for (let col = 0; col < 9; col++) {
      if ((row + 1) % 3 === 0) {
        grid[row].push(
          <div className="">
            <textarea className="center">
              {/* <Square /> */}
              {board[row][col]}
            </textarea>
          </div>
        );
      } else {
        grid[row].push(
          <div className="">
            <textarea className="center">
              {/* <Square /> */}
              {board[row][col]}
            </textarea>
          </div>
        );
      }
    }
  }
  return <div className="grid-board">{grid}</div>;
}
