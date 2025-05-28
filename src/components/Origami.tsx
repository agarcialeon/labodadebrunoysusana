import mechoImage from "../images/origami/mecho.webp";
import ochoImage from "../images/origami/ocho.webp";
import weddingRitual from "../images/origami/wedding-ritual.png";

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

        <p className="p-4">
          Este ritual consiste en ofrecer sake el uno al otro y beber ... Dicho
          sake se sirve en una tetera ornamentada con dos mariposas hechas de
          papel basadas en el tradicional arte del origami. Las mariposas,
          conocidas como mecho y ocho, son unas de las primeras representaciones
          con origami de la historia y representan la transformación de los
          novios como pareja. Además de estas mariposas, sulen ir envueltas o
          acompañadas de una cuerda o cordón de color (misteriosamente parecido
          a nuestro hilo rojo) formando formas o patrones.
        </p>
      </section>

      {/*https://www.shutterstock.com/es/g/NihonSugi */}

      <section className="w-full flex justify-center items-center">
        <img
          src={weddingRitual.src}
          className="w-[600px]"
          alt="Imágen de ritual de boda"
          title="Ritual de boda japonés"
        />
      </section>

      <section className="flex justify-around items-center">
        <div className="mecho">
          <img
            src={mechoImage.src}
            className="w-64"
            title="Mecho"
            alt="Mecho Butterfly"
          />
          <h2 className="text-2xl">Mecho</h2>
        </div>
        <div className="ocho">
          <img
            src={ochoImage.src}
            className="w-64"
            title="Ocho"
            alt="Ocho Butterfly"
          />
          <h2 className="text-2xl">Ocho</h2>
        </div>
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
