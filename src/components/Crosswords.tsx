// Palabras a buscar
const words = [
  "FLECHAZO", // Tinder
  "ENAMORAMIENTO", // Drugs
  "COMPROMISO", // Photos
  "DESILUSION", // Differences
  "TRANSFORMACION", // Origami
];

// Añadir palabras como: invitados, iglesia, baile, photocall, para rellenar...

// Matriz de letras para la sopa de letras (15x15)
// Las palabras están en filas separadas, el resto se rellena con 'X'
const matrix = [
  ["E", "N", "A", "M", "O", "R", "A", "M", "I", "E", "N", "T", "O", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["C", "O", "M", "P", "R", "O", "M", "I", "S", "O", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["D", "E", "S", "I", "L", "U", "S", "I", "O", "N", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["T", "R", "A", "N", "S", "F", "O", "R", "M", "A", "C", "I", "O", "N", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

export default function Crosswords() {
  return (
    <section className="flex flex-col fluid-column items-stretch gap-8 bg-gradient-to-bl from-lime-400 to-lime-500 w-full h-full">
      <div className="p-32 w-full h-full flex flex-row justify-between items-center gap-8">
        <div className="grid grid-cols-[repeat(15,1.5em)] grid-rows-[repeat(15,1.5em)] gap-[0.2em] select-none font-mono">
          {matrix.flat().map((letter) => (
            <div className="w-[1.5em] h-[1.5em] flex justify-center items-center border cursor-default border-solid border-[#ccc]">
              {letter}
            </div>
          ))}
        </div>

        <div>
          <h3>Fases del amor:</h3>
          <ul>
            {words.map((word) => (
              <li>{word}</li>
            ))}
          </ul>
        </div>
      </div>

      <section>
        <a href="/labodadebrunoysusana/unlock">Siguiente</a>
      </section>
    </section>
  );
}
