import { useEffect, useState } from "react";
import finger from "../images/finger.png";

const steps = [
  {
    title: "Chamberi",
    emojis: ["🌳", "🧸", "🍻", "🦶", "🛤️", "🌟"],
  },
  {
    title: "Calle Laurel",
    emojis: ["🍷", "🍤", "🍢", "🐘"],
  },
  {
    title: "Zamora",
    emojis: ["🌙", "✨", "🏰", "💍", "👫", "👩🏻‍❤️‍💋‍👨🏻"],
  },
  {
    title: "Iglesia de Santiago el Real",
    emojis: ["⛪", "🗡️", "🧑‍🦰", "🦶", "🛤️", "🌟"],
  },
  {
    title: "Palacio de la Vega",
    emojis: ["🏰", "🍾", "👰", "🤵", "🍽️", "🎉"],
  },
  {
    title: "Kyoto",
    emojis: ["🏯", "🍂", "🎎", "🌸", "🍵"], // TODO: Usar emojis extra como pistas "⛩️", "🦌", "🗻", "🧧"
  },
];

export default function Places() {
  const [inputs, setInputs] = useState(Array(steps.length).fill(""));
  const [unlockedSteps, setUnlockedSteps] = useState(1);
  // const [allCorrect, setAllCorrect] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (
      value.trim().toLocaleLowerCase() ===
        steps[index].title.toLocaleLowerCase() &&
      unlockedSteps === index + 1 &&
      index + 1 < steps.length
    ) {
      setUnlockedSteps(unlockedSteps + 1);
    }
  };

  const allCorrect = inputs.every(
    (input, idx) => input.trim() === steps[idx].title.toLowerCase()
  );

  return (
    <div className="fluid-column relative flex flex-col gap-8 bg-gradient-to-t from-fuchsia-500 to-cyan-500 text-white">
      <div className="bg-white border rounded-2xl w-[64px] absolute right-5 top-5">
        <img src={finger.src} alt="Preguntar al hilo rojo" width={64} />
      </div>
      <section className="">
        <h1 className="title font-urbanist">🗺️ Aquí y en todas partes</h1>
        <p className="py-2">
          El mito del hilo rojo dice que encontraremos a nuestra persona ideal
          en algún lugar, sin embargo como bien cuenta la historia
          <span className="italic">
            no siempre se piensa que el lugar en el que nos encontramos es el
            indicado.
          </span>
        </p>
        <p className="py-2">
          Para encontrar el otro extremo del hilo rojo visitaremos algunas
          localizaciones por las que los nudos del hilo nos guía y que os
          resultarán conocidas. Una de ellas tiene un significado especial en
          esta experiencia. Sin embargo lo que os proponemos, es que adivinéis
          que emplazamientos han sido aquí representados.
        </p>
        <p className="py-2">
          Por desgracia no nos llevamos bien con los mapas y nos parecen muy
          complejos de entender, así que nos hemos decantado por un mapa de
          Emojis, que además son mucho más cuquis.
        </p>
        <p className="py-2">
          Para continuar, debeis escribir los nombres de los lugares en los
          campos a la derecha de los emojis y automaticamente se irán
          desbloqueando los siguientes acertijos. ¿Podéis encontrar los lugares
          que se encuentran tras ellos?
        </p>
        <p className="py-2">PD: Poned tíldes, sino muchos gatitos morirán.</p>
      </section>

      <section className="flex flex-col items-stretch gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-2">
            {index < unlockedSteps && (
              <div className="flex flex-col items-stretch gap-4">
                <h3 className="text-xl">Acertijo {index + 1}</h3>
                <div className="flex flex-col items-stretch gap-4 md:grid md:grid-cols-2 md:gap-4">
                  <ul className="flex justify-center items-center">
                    {step.emojis.map((emoji, i) => (
                      <li key={i} className="text-5xl">
                        {emoji}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-xl md:text-3xl">
                    <label
                      htmlFor={`respuesta-${index}`}
                      className="font-medium"
                    >
                      Respuesta:
                    </label>
                    <input
                      id={`respuesta-${index}`}
                      type="text"
                      placeholder="Escribe el nombre exacto"
                      value={inputs[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="border-2 bg-white text-black rounded-xl px-2 w-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {allCorrect && (
          <section className="pt-8 flex items-center justify-center">
            <a href="/labodadebrunoysusana/maths">
              <span className="border-2 p-4 rounded-4xl hover:text-white">
                Siguiente
              </span>
            </a>
          </section>
        )}
      </section>
    </div>
  );
}
