import pabloProfilePicture from "../images/tinder/pablo.jpg";
import susanaProfilePicture from "../images/tinder/susana.jpg";
import brunoProfilePicture from "../images/tinder/bruno.jpg";
import allonaProfilePicture from "../images/tinder/allona.jpg";
import maisoProfilePicture from "../images/tinder/maiso.jpg";
import victorRubioProfilePicture from "../images/tinder/victor-rubio.jpg";
import victorMartinezProfilePicture from "../images/tinder/victor-martinez.jpg";
import andreaProfilePicture from "../images/tinder/andrea.jpg";
import tatianaProfilePicture from "../images/tinder/tatiana.jpg";
import noraProfilePicture from "../images/tinder/nora.png";
import alvaroProfilePicture from "../images/tinder/alvaro.jpg";
import cristianProfilePicture from "../images/tinder/cristian.jpg";

import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Flame, Heart, Settings, X } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import "swiper/css";
import { useRef, useState } from "react";

const correctCandidates = [
  { index: 1, name: "tatiana" },
  { index: 2, name: "andrea" },
  { index: 5, name: "nora" },
];
const incorrectCandidates = [
  { index: 0, name: "pablo" },
  { index: 3, name: "manuel" },
  { index: 4, name: "jesus" },
  { index: 6, name: "victor-m" },
  { index: 7, name: "victor-r" },
  { index: 8, name: "alvaro" },
  { index: 9, name: "cristian" },
];
const matchedCandidate = 10;

export default function Tinder() {
  const [isSusanaMatched, setIsSusanaMatched] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const acceptCandidate = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper === undefined) {
      return;
    }

    if (
      correctCandidates.find(
        (candidate) => swiper.activeIndex === candidate.index
      )
    ) {
      swiper.slideNext();
      return;
    } else {
      swiper.slideTo(0, 500);
    }
  };

  const rejectCandidate = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper === undefined) {
      return;
    }

    if (
      incorrectCandidates.find(
        (candidate) => swiper.activeIndex === candidate.index
      )
    ) {
      swiper.slideNext();
      return;
    } else {
      swiper.slideTo(0, 500);
    }
  };

  const matchCandidate = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper === undefined) {
      return;
    }

    if (swiper.activeIndex === matchedCandidate) {
      setIsSusanaMatched(true);
    } else {
      swiper.slideTo(0, 500);
    }
  };

  const showMessages = () => {};

  return (
    <section className="flex flex-col items-stretch w-full h-full ">
      <section className="h-full w-full flex flex-col items-stretch md:grid md:grid-cols-2 gap-4 px-8 py-4 bg-gradient-to-t from-amber-200 to-yellow-400">
        <section className="flex flex-col justify-start items-stretch text-balance h-full w-full py-4 sm:p-8 md:p-8">
          <div className="text-5xl text-white urbanist-900 pb-4">
            Amor a primer match! 💘
          </div>
          <p className="py-4">
            Aún reduciendo la formula del amor a un sistema de ecuaciones, son
            <span className="italic"> múltiples las variables </span>a tener
            encuenta para encontrarlo.
          </p>
          <p>
            Para reducir su búsqueda, algunas personas se ayudan de teoremas,
            corolarios y otras reglas, aunque sin mucho éxito. Sin embargo con
            los últimos avances en inteligencia artificial hemos desarrollado un
            algoritmo capaz de reducir el número de personas compatibles.
          </p>
          <p className="py-4">
            El único problema es que nuestros desarrolladores senior están de
            vacaciones y hemos tenido que dejar al becario de turno a cargo de
            los sistemas que cargan y procesan los datos de usuarios dados de
            alta en nuestra plataforma.
          </p>
          <p className="py-4">
            Así que si que no te extrañe que los "candidatos" que muestra
            nuestra app no sean del todo acordes con tu personalidad. De todas
            formas, como en todo esto del amor, nuestra recomendación es guiarse
            por
            <span className="font-bold mx-1">
              la intuición, el corazón o la vista,
            </span>
            pero siempre acorde con nuestras preferencias o gustos.
          </p>
          <p className="py-4">
            <span className="font-bold">
              A continuación te dejamos algúnas pautas como guía de uso de
              nuestra app.
            </span>
          </p>
          <p className="py-4">
            <span className="font-bold">INSTRUCCIONES DE USO:</span>
          </p>
          <ul>
            <li>- El botón de la X roja sirve para rechazar un candidato.</li>
            <li>- El botón del corazón verde acepta al candidato mostrado.</li>
            <li>
              - Si tienes muy claro que el candidato actual que se muestra es tu
              elección favorita sobre los demás, pulsa el botón central de la
              llama.
            </li>
            <li>
              - Si en cualquier momento deseas comprobar tus ajustes de usuario,
              pulsa sobre el engranaje de la barra superior.
            </li>
          </ul>
        </section>

        <section className="relative h-full w-full flex flex-col items-stretch justify-center gap-8 py-2 md:fluid-column">
          <div className="relative mx-auto drop-shadow-2xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {!isSettingsOpen ? (
                <div className="h-full flex flex-col items-stretch bg-white border mx-auto my-0 border-solid border-[#c0c0c0]">
                  <div className="flex flex-row justify-around items-center h-[65px] p-3 border-b-[#c0c0c0] border-b border-solid">
                    <button
                      onClick={toggleSettings}
                      className=" cursor-pointer"
                    >
                      <Settings
                        size={32}
                        className="text-gray-400 hover:rotate-90 transition-transform hover:text-gray-600 hover:drop-shadow-gray-400"
                      />
                    </button>

                    <div className="w-[100px] mx-auto my-0 p-2.5">
                      <img
                        className="w-[100px]"
                        src="https://worldvectorlogo.com/logos/tinder-1.svg"
                        alt="Tinder Logo"
                        title="Tinder Logo"
                      />
                    </div>

                    <button onClick={showMessages}>
                      <MessagesSquare size={32} className="text-gray-200" />
                    </button>
                  </div>

                  <div className="p-2.5 flex flex-col justify-between items-stretch gap-4 h-full">
                    <div className="flex flex-col items-stretch h-[350px] w-full overflow-hidden relative border bg-white shadow-[2px_2px_2px_#c0c0c0] mx-auto my-0 rounded-[10px] border-solid border-[#c0c0c0] top-[15px]">
                      <Swiper
                        className="w-full h-full"
                        ref={swiperRef}
                        spaceBetween={50}
                        slidesPerView={1}
                        allowTouchMove={false}
                        keyboard={{ enabled: false }}
                      >
                        <SwiperSlide id="slide-1">
                          <img
                            src={pabloProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Pablo"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Pablo Escobar, <span className="age">32</span>
                            </div>
                            <div className="tinfo">
                              De pequeño metió los dedos en un enchufe y salió
                              pelirrojo. Trafico con código, manías y una
                              obsesión por no pasar calor.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide id="slide-1">
                          <img
                            src={tatianaProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Tatiana"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Tatiana, <span className="age">32</span>
                            </div>
                            <div className="tinfo">
                              Adepta al senderismo, el reggeaton, y la novela
                              negra o de ciencia ficción. Si me quieres
                              conquistar llévame a ver amaneceres.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide id="slide-1">
                          <img
                            src={andreaProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Andrea"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Andrea, <span className="age">29</span>
                            </div>
                            <div className="tinfo">
                              Aficionada a los juegos de mesa, la lectura
                              romantica o de fantasía. Adepta al sushi y los
                              helados.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          id="slide-5"
                          className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                        >
                          <img
                            src={maisoProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Manuel"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Manuel Maiso, <span className="age">32</span>
                            </div>
                            <div className="tinfo">
                              Entusiasta el rock and roll. Amigo de mis amigos.
                              Soy portero de fútbol sala y no dejo pasar ni una.
                              Pero si me lo pides con amabilidad puedo hacer una
                              excepción 😈.
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide
                          id="slide-4"
                          className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                        >
                          <img
                            src={allonaProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Jesús"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex justify-end items-start p-2 text-md absolute w-full h-full">
                            <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
                              <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  className="text-yellow-500"
                                  fill="currentColor"
                                  d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                                />
                                <path
                                  fill="#fff"
                                  d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                                />
                              </svg>
                              <span className="sr-only">Usuario premium</span>
                            </span>
                          </div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Jesús Allona, <span className="age">33</span>
                            </div>
                            <div className="tinfo">
                              Soy un tío sin pelos en la lengua. Tengo un
                              ejercito de alumnos a mis espaldas y no me importa
                              usarlo para hacer maldades.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide id="slide-1">
                          <img
                            src={noraProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Nora"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Nora Olazabal, <span className="age">26</span>
                            </div>
                            <div className="tinfo">
                              Doy clase, cuido plantas que no sé si sobrevivirán
                              y tropezar con estilo es mi especialidad.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          id="slide-3"
                          className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                        >
                          <img
                            src={victorMartinezProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Victor M."
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Victor Martínez, <span className="age">32</span>
                            </div>
                            <div className="tinfo">
                              Me gustan las motos, los videojuegos, la
                              naturaleza y los paisajes. También me apasiona ver
                              alguna serie y escuchar música. Nada de reggeaton
                              pls.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          id="slide-6"
                          className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                        >
                          <img
                            src={victorRubioProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Victor Rubio."
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Victor Rubio, <span className="age">32</span>
                            </div>
                            <div className="tinfo">
                              Informático mediocre de profesión y friki de
                              corazón. Ex-adicto al WoW. Antítesís del orden
                              bardo profesional en D&D.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          id="slide-6"
                          className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                        >
                          <img
                            src={alvaroProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Álvaro"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Álvaro, <span className="age">32</span>
                            </div>
                            <div className="tinfo">
                              "Koka" para los amigos. Viciado a las galletas
                              lotus y los videojuegos. Jugador de pádel en horas
                              bajas.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          id="slide-6"
                          className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                        >
                          <img
                            src={cristianProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Cristian"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Cristian, <span className="age">39</span>
                            </div>
                            <div className="tinfo">
                              Profesor de primaria frustrado, músico y ex-tenor
                              de renombre en "Las abelardas" Maniático del orden
                              y la caligrafía.
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                          id="slide-2"
                          className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                        >
                          <img
                            src={susanaProfilePicture.src}
                            className="absolute w-[350px] h-[350px] object-cover aspect-[1]"
                            title="Avatar"
                            alt="Avatar de Susana."
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                            <div className="text-xl float-left py-2">
                              Susana, <span className="age">32</span>
                            </div>
                            <div className="tinfo">
                              Fan del sushi, Harry Potter y el arte románico.
                              También me encantan los animales.
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>

                    <div className="flex justify-between items-center relative">
                      <button
                        onClick={rejectCandidate}
                        className="cursor-pointer flex justify-center items-center transition-colors bg-white h-[64px] w-[64px] relative rounded-full border-2 border-solid border-[#f0f0f0] hover:border-red-500"
                      >
                        <X
                          className="text-red-500 transition-colors"
                          size={64}
                        />
                      </button>
                      <button
                        onClick={matchCandidate}
                        className="cursor-pointer flex justify-center items-center bg-white h-[50px] w-[50px] relative rounded-full border-2 border-solid border-[#f0f0f0] hover:border-amber-500"
                      >
                        <Flame
                          className="fill-amber-500 text-white transition-colors"
                          size={48}
                        />
                      </button>
                      <button
                        onClick={acceptCandidate}
                        className="cursor-pointer  bg-white flex justify-center items-center h-[64px] w-[64px] relative rounded-full border-2 border-solid border-[#f0f0f0] hover:border-green-500"
                      >
                        <Heart
                          className="fill-green-500 text-white transition-colors"
                          size={64}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="w-[400px] h-auto relative text-center bg-[#f0f0f0] px-0 py-0.5 top-[60px]">
                    <a
                      className="text-[7px] tracking-[5px] text-[#c0c0c0] no-underline uppercase italic"
                      href="http://themakery.jcink.net"
                    >
                      Created by HotRixx<span>&#8482;</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-stretch bg-white border mx-auto my-0 border-solid border-[#c0c0c0]">
                  <div className="flex flex-row justify-around items-center h-[65px] p-3 border-b-[#c0c0c0] border-b border-solid">
                    <button
                      onClick={toggleSettings}
                      className=" cursor-pointer"
                    >
                      <Settings
                        size={32}
                        className="text-gray-400 hover:rotate-90 transition-transform hover:text-gray-600 hover:drop-shadow-gray-400"
                      />
                    </button>

                    <div className="w-[100px] mx-auto my-0 p-2.5">
                      <img
                        className="w-[100px]"
                        src="https://worldvectorlogo.com/logos/tinder-1.svg"
                        alt="Tinder Logo"
                        title="Tinder Logo"
                      />
                    </div>

                    <button onClick={showMessages} className="cursor-pointer">
                      <MessagesSquare
                        size={32}
                        className="text-gray-400 hover:text-sky-600 hover:drop-shadow-sm transition-colors"
                      />
                    </button>
                  </div>

                  <div className="flex flex-col justify-between items-stretch gap-4 h-full p-4">
                    <div className="w-full h-full flex items-center justify-center relative">
                      <img
                        src={brunoProfilePicture.src}
                        className="rounded-full absolute w-[100px] h-[100px] object-cover aspect-[1]"
                        title="Avatar"
                        alt="Avatar de Bruno"
                      />
                    </div>

                    <h1 className="text-center font-bold">Bruno Flores</h1>

                    <h2 className="font-semibold">Gustos:</h2>
                    <p className="py-4 px-2 border rounded-sm bg-gray-100 text-sm border-gray-400">
                      Chicas, a ser posible morenas, a las que les gusten los
                      animales, los juegos de mesa y viajar. También me encanta
                      el sushi, ver series y jugar a videojuegos. La música
                      indie es lo mío.
                    </p>

                    <h2 className="font-semibold">Busco:</h2>
                    <p className="py-4 px-2 border rounded-sm bg-gray-100 text-sm border-gray-400">
                      Alguien para una cita tomando unas cervezas, dar un paseo
                      haciendo 'turismo' o lo que surja.
                    </p>
                  </div>

                  <div className="w-[400px] h-auto relative text-center bg-[#f0f0f0] px-0 py-0.5 top-[60px]">
                    <a
                      className="text-[7px] tracking-[5px] text-[#c0c0c0] no-underline uppercase italic"
                      href="http://themakery.jcink.net"
                    >
                      Created by HotRixx<span>&#8482;</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {isSusanaMatched && (
            <section className="flex flex-col justify-start items-center w-full gap-3">
              <h2 className="text-xl">
                Wow! Menudo
                <span className="mx-1 uppercase">flechazo</span>
                no?!
              </h2>
              <a
                href="/labodadebrunoysusana/love-and-other-drugs"
                className="border-2 p-4 rounded-4xl hover:text-yellow-700"
              >
                <span>Siguiente</span>
              </a>
            </section>
          )}
        </section>
      </section>
    </section>
  );
}
