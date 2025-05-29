import mechoImage from "../images/origami/mecho.webp";
import ochoImage from "../images/origami/ocho.webp";
import weddingRitual from "../images/origami/wedding-ritual.png";
import mechoInstructions1 from "../images/origami/instructions/mecho/formal-mecho-1.webp";
import mechoInstructions2 from "../images/origami/instructions/mecho/formal-mecho-2.webp";
import mechoInstructions3 from "../images/origami/instructions/mecho/formal-mecho-3.webp";
import mechoInstructions4 from "../images/origami/instructions/mecho/formal-mecho-4.webp";
import mechoInstructions5 from "../images/origami/instructions/mecho/formal-mecho-5.webp";
import ochoInstructions1 from "../images/origami/instructions/ocho/formal-ocho-1.webp";
import ochoInstructions2 from "../images/origami/instructions/ocho/formal-ocho-2.webp";
import ochoInstructions3 from "../images/origami/instructions/ocho/formal-ocho-3.webp";
import ochoInstructions4 from "../images/origami/instructions/ocho/formal-ocho-4.webp";
import ochoInstructions5 from "../images/origami/instructions/ocho/formal-ocho-5.webp";

const instructionsImagesMecho = [
  mechoInstructions1,
  mechoInstructions2,
  mechoInstructions3,
  mechoInstructions4,
  mechoInstructions5,
];
const instructionsImagesOcho = [
  ochoInstructions1,
  ochoInstructions2,
  ochoInstructions3,
  ochoInstructions4,
  ochoInstructions5,
];

export default function Origami() {
  return (
    <section className="flex flex-col fluid-column items-stretch gap-8 bg-gradient-to-bl from-teal-400 to-yellow-200">
      <section>
        <h1 className="title font-urbanist">🐛Transformación🦋</h1>
        <p className="p-4">
          Puede parecer que el hilo rojo del destino es a veces un poco puñetero
          y que todo aquel que cruza en nuestro camino no parece ser nuestra
          alma gemela.
        </p>

        <p className="p-4">
          Pero, como todo en esta vida, el no es fácil y hay que pelear por él.
          Para que este perdure y crezca más allá del noviazgo (o de un simple
          ligue, si os va ese rollo) los novios deben transformarse. Dejar el
          pasado atrás, las rencillas y rencores y abrazar con fuerza todo el
          potecial que la pareja nos aporta para llegar a ser nuestra mejor
          versión de nosotros.
        </p>

        <p className="p-4">
          Para favorecer esto, nuestro equipo en HotRiXXX<span>&#8482;</span>,
          ha recorrido el mundo estudiando que es aquello que diferencia a las
          parejas que perduran juntas de las que no. Curiosmamente, en su última
          expedición a Japón, se percataron de que una gran mayoría de parejas
          realizan una ceremonia tradicional que se perpetua en el tiempo
          generación tras generación en las familias.
        </p>

        {/*https://www.shutterstock.com/es/g/NihonSugi */}

        <section className="w-full flex justify-center items-center">
          <img
            src={weddingRitual.src}
            className="w-[600px]"
            alt="Imágen de ritual de boda"
            title="Ritual de boda japonés"
          />
        </section>

        <p className="p-4">
          Este ritual consiste en ofrecer sake el uno al otro y beber ... Dicho
          sake se sirve en una tetera ornamentada con dos mariposas hechas de
          papel basadas en el tradicional arte del origami. Las mariposas,
          conocidas como <span className="font-bold">mecho</span> y{" "}
          <span className="font-bold">ocho</span>, son unas de las primeras
          representaciones con origami de la historia y representan la
          transformación de los novios como pareja. Además de estas mariposas,
          sulen ir envueltas o acompañadas de una cuerda o cordón de color
          (misteriosamente parecido a nuestro hilo rojo) formando formas o
          patrones.
        </p>
      </section>

      <section>
        <p className="p-4">
          A continuación, intentaréis desvelar el secreto que esconde el hilo
          rojo al envolver a estas mariposas. Para ello, debéis seguir una hoja
          de papel o folio y seguir las instrucciones de cada mariposa hasta
          alcanzar su forma final. Una vez tengáis (cada uno) cada mariposa,
          pasad al siguiente paso.
        </p>
      </section>

      <section className="flex justify-around items-center">
        <div className="flex flex-col items-stretch gap-4">
          <div className="flex justify-center items-center">
            <img
              src={mechoImage.src}
              className="w-64"
              title="Mecho"
              alt="Mecho Butterfly"
            />
          </div>
          <h2 className="text-2xl text-center">Mecho</h2>
          <div className="flex flex-col items-stretch gap-8">
            <h3 className="text-xl text-center">Instrucciones</h3>
            <div className="flex flex-col items-stretch">
              {instructionsImagesMecho.map((instructionImage) => (
                <img
                  src={instructionImage.src}
                  className="w-96"
                  alt="Ocho Instruction"
                ></img>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-4">
          <div className="flex justify-center items-center">
            <img
              src={ochoImage.src}
              className="w-64"
              title="Ocho"
              alt="Ocho Butterfly"
            />
          </div>
          <h2 className="text-2xl text-center">Ocho</h2>
          <div className="flex flex-col items-stretch gap-8">
            <h3 className="text-xl text-center">Instrucciones</h3>
            <div className="flex flex-col items-stretch">
              {instructionsImagesOcho.map((instructionImage) => (
                <img
                  src={instructionImage.src}
                  className="w-96"
                  alt="Ocho Instruction"
                ></img>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="p-4">Ahora intercambiad vuestras mariposas y</p>
      </section>

      <section className="flex items-center justify-center">
        <a
          href="/labodadebrunoysusana/cross-words"
          className="border-2 p-4 rounded-4xl hover:text-white"
        >
          <span>Siguiente</span>
        </a>
      </section>
    </section>
  );
}
