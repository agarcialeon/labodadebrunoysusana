import React, { useState } from "react";

// Define la estructura de cada palabra
const words = [
  { answer: "VOTOS", clue: "Compromisos matrimoniales", row: 2, col: 1, direction: "across" },
  { answer: "AMIGOS", clue: "Personas queridas que te acompañan", row: 3, col: 3, direction: "across" },
  { answer: "BANQUETE", clue: "Comida compartida con los invitados", row: 4, col: 2, direction: "across" },
  { answer: "UNION", clue: "Acto oficial", row: 5, col: 5, direction: "across" },
  { answer: "FAMILIA", clue: "Base fundamental del matrimonio", row: 6, col: 2, direction: "across" },
  { answer: "CEREMONIA", clue: "Acto central de la boda", row: 7, col: 2, direction: "across" },
  { answer: "RAMO", clue: "Objeto de deseo por las damas de honor", row: 8, col: 5, direction: "across" },
  { answer: "COMPROMISO", clue: "Promesa mutua en la relación", row: 9, col: 0, direction: "across" },
];

const gridSize = 12;

const buildGrid = () => {
  const grid: (string | null)[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

  for (const word of words) {
    const { answer, row, col, direction } = word;

    for (let i = 0; i < answer.length; i++) {
      let r = row;
      let c = col;

      if (direction === "across") c += i;
       if (direction === "down") r += i;

      if (r < gridSize && c < gridSize) grid[r][c] = "";
    }
  }

  return grid;
};

export default function CustomCrossword() {
  const [grid, setGrid] = useState(buildGrid());
  const [completedWords, setCompletedWords] = useState<string[]>([]);

  const handleChange = (row: number, col: number, value: string) => {
    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = value.toUpperCase().slice(-1);
    setGrid(newGrid);

    // Verificar si alguna palabra se completó
    const completed = [];
    for (const word of words) {
      const { answer, row: r, col: c, direction } = word;
      let attempt = "";

      for (let i = 0; i < answer.length; i++) {
        let char;
        if (direction === "across") char = newGrid[r][c + i];
        else if (direction === "down") char = newGrid[r + i][c];
        else continue;

        if (!char || char.length !== 1) {
          attempt = "";
          break;
        }

        attempt += char;
      }

      if (attempt === word.answer) {
        completed.push(word.answer);
      }
    }

    setCompletedWords(completed);
  };

  return (
    <div className="puzzle-container">
      <h2>🧩 Crucigrama del Amor</h2>

      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 2rem)` }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className={`cell ${
    cell === null ? "empty" : ""
  } ${
    colIndex === 5 && rowIndex >= 2 && rowIndex <= 10 ? "special-column" : ""
  }`}>
              {cell !== null ? (
                <input
                  type="text"
                  maxLength={1}
                  value={grid[rowIndex][colIndex] || ""}
                  onChange={(e) =>
                    handleChange(rowIndex, colIndex, e.target.value)
                  }
                />
              ) : (
                <div className="empty" />
              )}
            </div>
          ))
        )}
      </div>
      <div className="clues">
        <h3>Pistas:</h3>
        <ul>
          {words
            .filter((w) => !w.hidden)
            .map((w, i) => (
              <li key={i}>
                {w.direction === "across"
                  ? "→"
                  : "↓"}{" "}
                {w.clue} {completedWords.includes(w.answer) && "✅"}
              </li>
            ))}
        </ul>
      </div>

      {completedWords.length === words.length && (
        <div className="completed-message">
          🎉🎉🎉 <a
            href="/labodadebrunoysusana/unlock"
            className="border-2 p-4 rounded-4xl hover:text-white"
          >
            <span>Siguiente</span>
          </a>🎉🎉🎉
        </div>
      )}
    </div>
  );
}
