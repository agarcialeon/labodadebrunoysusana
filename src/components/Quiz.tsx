import avatarBruno from "../images/quiz/quiz_bruno.png";
import avatarSusana from "../images/quiz/quiz_susana.png";

export default function Quiz() {
  return (
    <section className="fluid-column bg-blue-400">
      <header className="flex justify-center items-center">
        <h1 className="title urbanist-900">El hilo rojo</h1>
      </header>
      <main className="grid grid-cols-2 gap-4">
        <section className="flex flex-col items-stretch gap-4">
          <div className="flex justify-center items-center">
            <img
              width={150}
              height={150}
              className="rounded-full"
              src={avatarBruno.src}
              alt="Avatar Susana"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              name="nombre1"
              id=""
              className="bg-white rounded-md p-2"
            />
          </div>
        </section>
        <section className="flex flex-col items-stretch gap-4">
          <div className="flex justify-center items-center">
            <img
              width={150}
              height={150}
              className="rounded-full"
              src={avatarSusana.src}
              alt="Avatar Susana"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              name="nombre2"
              id=""
              className="bg-white rounded-md p-2"
            />
          </div>
        </section>
      </main>
      <footer className="p-8 flex justify-center items-center">
        <a href="/labodadebrunoysusana/going-places">
          <span className="border-2 p-4 rounded-4xl hover:bg-sky-700">
            Siguiente
          </span>
        </a>
      </footer>
    </section>
  );
}
