import sushi from "../images/photo-wall/sushi.jpg";
import rice from "../images/photo-wall/rice.jpg";
import salmon from "../images/photo-wall/salmon.jpg";
import ellie from "../images/photo-wall/ellie.png";
import dina from "../images/photo-wall/dina.png";
// import lastofus from "../images/photo-wall/lastofus.png";
import hermione from "../images/photo-wall/hermione.png";
import ron from "../images/photo-wall/ron.png";
// import ronhermione from "../images/photo-wall/ron-hermione.jpg";
import karolg from "../images/photo-wall/karolg.png";
import anuel from "../images/photo-wall/anuel.png";
// import reggeaton from "../images/photo-wall/reggeaton.jpg";
import heath from "../images/photo-wall/heath.png";
import shannyn from "../images/photo-wall/shannyn.png";
// import caballero from "../images/photo-wall/caballero.jpg";
import bruno from "../images/photo-wall/bruno.png";
import susana from "../images/photo-wall/susanita.png";
// import novios from "../images/photo-wall/novios.jpg";

export default function Photos() {
  return (
    <section className="fluid-column bg-[linear-gradient(90deg,#fcff9e_0%,#c67700_100%)] flex flex-col items-stretch gap-8">
      <div>
        <div className="title urbanist-900">Empareja-dos!</div>
        <p className="py-4">
          Ahora que ya os habéis hecho "TILÍN" a través de Tinder, no podéis
          quedaros así. En la mayoría de relaciones existe un periodo en el que
          las parejas empiezan a hacer planes juntos, haciendo que la relación
          sea más seria. Lo que vendría a ser "formalizar la relación" o
          llamarse "novi@s".
        </p>
        <p className="py-4">
          El hilo rojo nos ha propuesto que emparejeis a las personas de las
          siguientes fotos. Pero ojo, no todas las parejas son evidentes.
        </p>
      </div>

      <div className="app">
        <div className="flex flex-col gap-8 items-stretch sm:grid sm:grid-cols-[repeat(2,1fr)] sm:gap-[20px_20px] md:grid md:grid-cols-[repeat(3,1fr)] md:gap-[8px_8px] xl:grid xl:grid-cols-[repeat(5,1fr)] xl:gap-[8px_8px] mx-2.5 my-5">
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={salmon.src}
                alt="Une vie remplie"
                title="Une vie remplie"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Salmón
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={rice.src}
                alt="Je peux le faire"
                title="Je peux le faire"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Arroz
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-contain object-center duration-500"
                src={sushi.src}
                alt="Une folie"
                title="Une folie"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Sushi
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover duration-500"
                src={ellie.src}
                alt="Paris"
                title="Paris"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Ellie
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={dina.src}
                alt="Surprise"
                title="Surprise"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Dina
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={anuel.src}
                alt="Anuel AA"
                title="Anuel AA"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Anuel AA
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={karolg.src}
                alt="Karol G"
                title="Karol G"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Karol G
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/best-friend-forever.jpg"
                alt="Best friend forever"
                title="Best friend forever"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Best friend forever
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={ron.src}
                alt="Ron"
                title="Ron"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Ron
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={hermione.src}
                alt="Hermione"
                title="Hermione"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Hermione
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={heath.src}
                alt="Heath"
                title="Heath"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Heath
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/bientôt-maman.jpg"
                alt="Bientôt maman"
                title="Bientôt maman"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Baby soon
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/9-mois.jpg"
                alt="9 mois"
                title="9 mois"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              9 months
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={bruno.src}
                alt="Bruno"
                title="Bruno"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Bruno
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/girly.jpg"
                alt="Girly"
                title="Girly"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Girly
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={shannyn.src}
                alt="Shannyn"
                title="Shannyn"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Shannyn
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src={susana.src}
                alt="Bruno"
                title="Susana"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Susana
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/my-pigfriend.jpg"
                alt="My pigfriend"
                title="My pigfriend"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              My pigfriend
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center w-full gap-4">
        <h2 className="text-xl">
          Ups! En menudo <span className="mx-1 uppercase">compromiso</span> les
          has metido.
        </h2>
        <a
          href="/labodadebrunoysusana/butterflies"
          className="border-2 p-4 rounded-4xl hover:text-white"
        >
          <span>Siguiente</span>
        </a>
      </section>
    </section>
  );
}
