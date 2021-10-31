import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import generator from "sudoku";
import Board from "./Board";

const generateSudoku = () => {
  const raw = generator.makepuzzle();
  const result = { rows: [] };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value,
        readOnly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
};

function App() {
  const [boardState, setBoardState] = useState(generateSudoku);
  const [isGameWon, setIsGameWon] = useState(false);

  const checkIsGameWon = () => {
    checkList = [];
    for (let i = 0; i < 9; i++) {
      if (boardState.rows[i]) {
      }
    }
  };

  const onChange = (e) => {
    let boardStateCopy = boardState;
    boardStateCopy.rows[e.row].cols[e.col].value = e.value;
    setBoardState(boardStateCopy);
  };

  console.log(boardState);
  return (
    <div className="App">
      <header className="app-header">
        <h3>Sudoku</h3>
      </header>
      <Board sudoku={boardState} onChange={onChange} />
    </div>
  );
}

export default App;
