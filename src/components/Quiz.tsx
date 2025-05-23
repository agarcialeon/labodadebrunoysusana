import avatarBruno from "../images/quiz/quiz_bruno.png";
import avatarSusana from "../images/quiz/quiz_susana.png";
import { Infinity } from "lucide-react";

export default function Quiz() {
  return (
    <section className="fluid-column bg-blue-400">
      <header className="flex justify-center items-center">
        <h1 className="title urbanist-900">Las cosas que nos definen</h1>
      </header>
      <main className="">
        <section className="grid grid-cols-[100px_1fr_100px] gap-4 w-full">
          <section className="flex flex-col items-stretch gap-4">
            <div className="flex justify-center items-center">
              <img
                width={64}
                height={64}
                className="rounded-full"
                src={avatarBruno.src}
                alt="Avatar Susana"
              />
            </div>
          </section>

          <section className="flex items-center gap-2 w-full">
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <Infinity size={64} className="text-red-400 w-full" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
            <hr className="h-[1px] w-full bg-red-400 border-0" />
          </section>

          <section className="flex flex-col items-stretch gap-4">
            <div className="flex justify-center items-center">
              <img
                width={64}
                height={64}
                className="rounded-full"
                src={avatarSusana.src}
                alt="Avatar Susana"
              />
            </div>
          </section>
        </section>

        <section>
          {/* QUIZ FORM */}
          <form className="p-6 flex flex-col items-stretch gap-2 w-full">
            <h2 className="w-full text-center title py-4">¿Pregunta?</h2>
            <div className="flex flex-col items-stretch gap-4">
              <button className="hover:cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-secondary/80 h-10 px-4 py-2 text-left flex-1 hover:opacity-50 border transition-all flex flex-row justify-between items-center">
                Respuesta 1
              </button>
              <button className="hover:cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-secondary/80 h-10 px-4 py-2 text-left flex-1 hover:opacity-50 border transition-all flex flex-row justify-between items-center">
                Respuesta 2
              </button>
              <button className="hover:cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-secondary/80 h-10 px-4 py-2 text-left flex-1 hover:opacity-50 border transition-all flex flex-row justify-between items-center">
                Respuesta 3
              </button>
              <button className="hover:cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-secondary/80 h-10 px-4 py-2 text-left flex-1 hover:opacity-50 border transition-all flex flex-row justify-between items-center">
                Respuesta 4
              </button>
            </div>
            <button
              type="submit"
              className="hover:cursor-pointer border-2 p-4 rounded-4xl hover:text-white"
            >
              Confirmar
            </button>
          </form>
        </section>
      </main>

      <footer className="p-8 flex justify-center items-center">
        <a href="/labodadebrunoysusana/emoji-maps">
          <span className="border-2 p-4 rounded-4xl hover:text-white">
            Siguiente
          </span>
        </a>
      </footer>
    </section>
  );
}
