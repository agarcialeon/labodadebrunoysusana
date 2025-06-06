import React, { useState } from "react";

// Define la estructura de cada palabra
const words = [
  { answer: "FLECHAZO", clue: "Impacto repentino del amor", row: 0, col: 0, direction: "across" },
  { answer: "ENAMORAMIENTO", clue: "Proceso de caer enamorado", row: 2, col: 0, direction: "across" },
  { answer: "COMPROMISO", clue: "Promesa mutua en la relación", row: 4, col: 0, direction: "across" },
  { answer: "DESILUSION", clue: "Etapa donde se pierde la ilusión", row: 6, col: 0, direction: "across" },
  { answer: "AMORREAL", clue: "Amor que va más allá de la idealización", row: 8, col: 0, direction: "across" },
  { answer: "TRANSFORMACION", clue: "Cambio profundo en la relación", row: 10, col: 0, direction: "across" },
  { answer: "PREBODA", clue: "Celebración previa a la boda", row: 12, col: 0, direction: "across" },
  { answer: "FAMILIA", clue: "Base fundamental del matrimonio", row: 0, col: 0, direction: "down" },
  { answer: "AMIGOS", clue: "Personas queridas que te acompañan", row: 0, col: 2, direction: "down" },
  { answer: "CEREMONIA", clue: "Acto central de la boda", row: 0, col: 4, direction: "down" },
  { answer: "BANQUETE", clue: "Comida compartida con los invitados", row: 0, col: 6, direction: "down" },
  { answer: "TARTA", clue: "Dulce típico de las bodas", row: 0, col: 8, direction: "down" },
  { answer: "BAILE", clue: "Danza después de la celebración", row: 0, col: 10, direction: "down" },
  {
    answer: "SIQUIERO",
    clue: "Anagrama oculto de la boda",
    row: 7,
    col: 7,
    direction: "diagonal",
    hidden: true, // No mostrarla como pista visible
  }
];

const gridSize = 16;

const buildGrid = () => {
  const grid: (string | null)[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

  for (const word of words) {
    const { answer, row, col, direction } = word;

    for (let i = 0; i < answer.length; i++) {
      let r = row;
      let c = col;

      if (direction === "across") c += i;
      else if (direction === "down") r += i;
      else if (direction === "diagonal") {
        r += i;
        c += i;
      }

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
        else if (direction === "diagonal") char = newGrid[r + i][c + i];
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
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="cell">
              {cell !== null ? (
                <input
                  type="text"
                  maxLength={1}
                  value={grid[rowIndex][colIndex] || ""}
                  onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
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
                  : w.direction === "down"
                    ? "↓"
                    : "↘"}{" "}
                {w.clue} {completedWords.includes(w.answer) && "✅"}
              </li>
            ))}
        </ul>
      </div>

      {completedWords.length === words.length && (
        <div className="completed-message">
          🎉 <a
            href="/labodadebrunoysusana/unlock"
            className="border-2 p-4 rounded-4xl hover:text-white"
          >
            <span>Siguiente</span>
          </a>
        </div>
      )}
    </div>
  );
}
