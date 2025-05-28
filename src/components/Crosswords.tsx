// Palabras a buscar
const lovePhases = [
  "FLECHAZO", // Tinder
  "ENAMORAMIENTO", // Drugs
  "COMPROMISO", // Photos
  "DESILUSION", // Differences
  "AMOR REAL", // Amor real
  "TRANSFORMACION", // Origami,
];

const weddingWords = [
  "PREBODA",
  "FAMILIA",
  "AMIGOS",
  "CEREMONIA",
  "BANQUETE",
  "TARTA",
  "BAILE",
];

const finalWord = "SIQUIERO";

// Añadir palabras como: invitados, iglesia, baile, photocall, para rellenar...

// Matriz de letras para la sopa de letras (15x15)
// Las palabras están en filas separadas, el resto se rellena con 'X'
const matrix = [
  [
    "X",
    "C",
    "O",
    "M",
    "P",
    "R",
    "O",
    "M",
    "I",
    "S",
    "O",
    "X",
    "X",
    "X",
    "X",
    "X",
  ],
  [
    "X",
    "E",
    "N",
    "A",
    "M",
    "O",
    "R",
    "A",
    "M",
    "I",
    "E",
    "N",
    "T",
    "O",
    "X",
    "X",
  ],
  [
    "X",
    "X",
    "X",
    "M",
    "X",
    "X",
    "X",
    "X",
    "X",
    "Q",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ],
  [
    "E",
    "X",
    "X",
    "O",
    "D",
    "E",
    "S",
    "I",
    "L",
    "U",
    "S",
    "I",
    "O",
    "N",
    "X",
    "X",
  ],
  [
    "T",
    "X",
    "X",
    "R",
    "X",
    "X",
    "I",
    "N",
    "V",
    "I",
    "T",
    "A",
    "D",
    "O",
    "S",
    "X",
  ],
  [
    "E",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "E",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ],
  [
    "U",
    "X",
    "T",
    "R",
    "A",
    "N",
    "S",
    "F",
    "O",
    "R",
    "M",
    "A",
    "C",
    "I",
    "O",
    "N",
  ],
  [
    "Q",
    "X",
    "X",
    "E",
    "C",
    "E",
    "R",
    "E",
    "M",
    "O",
    "N",
    "I",
    "A",
    "X",
    "X",
    "X",
  ],
  [
    "N",
    "X",
    "X",
    "A",
    "X",
    "X",
    "P",
    "X",
    "X",
    "X",
    "X",
    "L",
    "M",
    "X",
    "X",
    "X",
  ],
  [
    "A",
    "X",
    "X",
    "L",
    "X",
    "X",
    "R",
    "X",
    "X",
    "X",
    "X",
    "I",
    "I",
    "X",
    "X",
    "X",
  ],
  [
    "B",
    "X",
    "X",
    "X",
    "X",
    "X",
    "E",
    "X",
    "X",
    "X",
    "X",
    "M",
    "G",
    "X",
    "X",
    "X",
  ],
  [
    "X",
    "A",
    "X",
    "X",
    "X",
    "X",
    "B",
    "T",
    "A",
    "R",
    "T",
    "A",
    "O",
    "X",
    "X",
    "X",
  ],
  [
    "X",
    "X",
    "I",
    "X",
    "X",
    "X",
    "O",
    "X",
    "X",
    "X",
    "X",
    "F",
    "S",
    "X",
    "X",
    "X",
  ],
  [
    "X",
    "X",
    "X",
    "L",
    "X",
    "X",
    "D",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ],
  [
    "X",
    "X",
    "X",
    "X",
    "E",
    "X",
    "A",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ],
];

export default function Crosswords() {
  return (
    <section className="flex flex-col fluid-column items-stretch gap-8 bg-gradient-to-bl from-lime-400 to-lime-500 w-full h-full">
      <div className="flex flex-col items-stretch md:grid md:grid-cols-2 w-full h-full gap-8">
        <div className="flex flex-col items-stretch gap-8 w-full h-full">
          <div className="">
            <h1 className="title">🔠 Palabras cruzadas</h1>
            <p className="py-4"></p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-stretch gap-8">
              <h3 className="text-3xl">Palabras a buscar:</h3>
              <div className="flex justify-between items-center gap-8">
                <ul className="list-disc">
                  {lovePhases.map((word) => (
                    <li>{word}</li>
                  ))}
                </ul>
                <ul className="list-disc">
                  {weddingWords.map((word) => (
                    <li>{word}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <h3 className="title">- {finalWord} -</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(16,1fr] select-none font-mono border bg-white rounded">
          {matrix.flat().map((letter, index) => (
            <div
              className="w-full h-full flex items-center justify-center border font-bold  text-xl appearance-none tabular-nums"
              key={index}
            >
              <input
                type="text"
                name={letter}
                id={letter}
                defaultValue={letter}
                className="text-center w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <section className="w-full flex items-center justify-center">
        <a
          href="/labodadebrunoysusana/unlock"
          className="border-2 p-4 rounded-4xl hover:text-white"
        >
          <span>Siguiente</span>
        </a>
      </section>
    </section>
  );
}
