import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import generator from "sudoku";
import Board from "./Board";
import produce from "immer";

const generateSudoku = () => {
  const raw = generator.makepuzzle();
  const rawSolution = generator.solvepuzzle(raw);

  const formattedSolution = rawSolution.map((e) => e + 1);
  const result = { rows: [], solution: formattedSolution };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value === null ? null : value + 1,
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

  useEffect(() => {}, [boardState]);

  const checkIsGameWon = (sudoku) => {
    const sudokuToCheck = sudoku.rows
      .map((row) => row.cols.map((col) => col.value))
      .flat();
    for (let i = 0; i < sudokuToCheck.length; i++) {
      if (
        sudokuToCheck[i] === null ||
        sudokuToCheck[i] !== boardState.solution[i]
      ) {
        setIsGameWon(false);
        break;
      } else {
        setIsGameWon(true);
      }
    }
  };

  const onChange = (e) => {
    const boardStateCopy = produce(boardState, (draft) => {
      draft.rows[e.row].cols[e.col].value = e.value;
    });
    setBoardState(boardStateCopy);
    checkIsGameWon(boardState);
  };

  const solveSudoku = (e) => {
    setBoardState(
      produce(boardState, (state) => {
        state.rows.forEach((row) =>
          row.cols.forEach((col) => {
            col.value = state.solution[col.row * 9 + col.col];
          })
        );
      })
    );
    setIsGameWon(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Sudoku</h3>
      </header>
      <div className="board">
        <Board sudoku={boardState} onChange={onChange} />
      </div>
      <div>
        {isGameWon && <h3 className="">Du har klart det!</h3>}
        <button className="btn" onClick={solveSudoku}>
          Solve
        </button>
      </div>
    </div>
  );
}

export default App;
