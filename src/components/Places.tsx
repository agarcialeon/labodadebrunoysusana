import { useState } from "react";
import styles from './Places.module.css';

const steps = [
  {
    title: "Calle Laurel",
    emojis: ["🍷", "🍤", "🍢", "🐘"],
  },
  {
    title: "Iglesia de Santiago el Real",
    emojis: ["⛪", "🗡️", "🧑‍🦰", "🦶", "🛤️", "🌟"],
  },
  {
    title: "Barrio de Chamberí",
    emojis: ["🌳", "🧸", "🍻", "🦶", "🛤️", "🌟"],
  },
  {
    title: "Palacio de la Vega",
    emojis: ["🏰", "🍾", "👰", "🤵", "🍽️", "🎉"],
  },
  {
    title: "Kyoto",
    emojis: ["🏯", "🍂", "🎎", "🌸", "🍵", "⛩️", "🦌", "🗻", "🧧"],
  },
  {
    title: "Iglesia de San Juan Bautista",
    emojis: ["🌙", "✨", "🏰", "💍", "👫", "👩🏻‍❤️‍💋‍👨🏻"],
  },
];

export default function Places() {
  const [inputs, setInputs] = useState(Array(steps.length).fill(""));
  const [unlockedSteps, setUnlockedSteps] = useState(1);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (
      value.trim().toLocaleLowerCase() === steps[index].title.toLocaleLowerCase() &&
      unlockedSteps === index + 1 &&
      index + 1 < steps.length
    ) {
      setUnlockedSteps(unlockedSteps + 1);
    }
  };

  const allCorrect = inputs.every((input, idx) => input.trim() === steps[idx].title);

  return (
    <div className="flex flex-col gap-8">
      <h1>Viajemos un poco por vuestra historia, a lo largo de esta página encontraréis ciertos símbolos, los cuales tienen mucha relacion con vosotros. ¿Podéis encontrar los lugares que se encuentran tras ellos?</h1>
      <h2>PD: Poned tíldes, sino muchos gatitos morirán.</h2>
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col gap-2">
          {index < unlockedSteps && (
            <div className={styles.puzzle}>
              <h3>Puzzle número {index + 1}</h3>
              <ul className="flex items-center">
                {step.emojis.map((emoji, i) => (
                  <li key={i} className={styles.emoji}>{emoji}</li>
                ))}
              </ul>
              <div className={styles.respuesta}>
              <label htmlFor={`respuesta-${index}`} className="font-medium mt-2">
                Respuesta:
              </label>
              <input
                id={`respuesta-${index}`}
                type="text"
                placeholder="Escribe el nombre exacto"
                value={inputs[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                className={styles.input}
              />
              </div>
            </div>
          )}
        </div>
      ))}

      {allCorrect && (
        <a
          href="/labodadebrunoysusana/maths"
          className="text-blue-500 underline mt-4"
        >
          Siguiente
        </a>
      )}
    </div>
  );
}