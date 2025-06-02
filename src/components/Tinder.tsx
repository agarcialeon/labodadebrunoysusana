import pabloProfilePicture from "../images/tinder/pablo.jpg";
import susanaProfilePicture from "../images/tinder/susana.jpg";
import brunoProfilePicture from "../images/tinder/bruno.jpg";
import allonaProfilePicture from "../images/tinder/allona.jpg";
import maisoProfilePicture from "../images/tinder/maiso.jpg";
import victorRubioProfilePicture from "../images/tinder/victor-rubio.jpg";
import andreaProfilePicture from "../images/tinder/andrea.jpg";
import tatianaProfilePicture from "../images/tinder/tatiana.jpg";
import noraProfilePicture from "../images/tinder/nora.png";
import alvaroProfilePicture from "../images/tinder/alvaro.jpg";
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
];
const matchedCandidate = 9;

export default function Tinder() {
  const [isSusanaMatched, setIsSusanaMatched] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

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

  const showSettings = () => {};

  const showMessages = () => {};

  return (
    <section className="flex flex-col items-stretch w-full h-full">
      <section className="flex flex-col items-stretch md:grid md:grid-cols-2 gap-4 px-8 py-4 bg-gradient-to-t from-amber-200 to-yellow-400">
        <section className="flex flex-col justify-start items-stretch text-balance h-full w-full">
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
            <span className="font-bold">
              la intuición, el corazón o la vista.
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
            <li>
              - Y si quieres ver tus mensajes con otros usuarios, pulsa sobre el
              botón de la esquina superior derecha.
            </li>
          </ul>
        </section>

        <section className="relative h-full w-full flex flex-col items-stretch gap-8 py-2">
          <div className="relative mx-auto drop-shadow-2xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {/** Settings */}
              <div className="h-full flex flex-col items-stretch bg-white border mx-auto my-0 border-solid border-[#c0c0c0]">
                <div className="flex flex-row justify-around items-center h-[65px] p-3 border-b-[#c0c0c0] border-b border-solid">
                  <button onClick={showSettings} className=" cursor-pointer">
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

                  <h2 className="font-semibold">Aficiones:</h2>
                  <p className="py-4 px-2 border rounded-sm bg-gray-300 border-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    saepe veniam provident eveniet? Magnam qui quos beatae
                    quisquam delectus? Itaque eius quisquam porro perferendis
                    sed aperiam quod magni, cumque dolore?
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

              {/** Slider */}
              <div className="h-full flex flex-col items-stretch bg-white border mx-auto my-0 border-solid border-[#c0c0c0]">
                <div className="flex flex-row justify-around items-center h-[65px] p-3 border-b-[#c0c0c0] border-b border-solid">
                  <button onClick={showSettings} className=" cursor-pointer">
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

                <div className="p-2.5 flex flex-col justify-between items-stretch gap-4 h-full">
                  <div className="flex flex-col items-stretch h-[350px] w-full overflow-hidden relative border bg-white shadow-[2px_2px_2px_#c0c0c0] mx-auto my-0 rounded-[10px] border-solid border-[#c0c0c0] top-[15px]">
                    <Swiper
                      className="w-full h-full"
                      ref={swiperRef}
                      spaceBetween={50}
                      slidesPerView={1}
                      allowTouchMove={false}
                      keyboard={{ enabled: false }}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
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
                            Me encantan los paseos en bici y hacer snowboard.
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
                            Me encantan los paseos, los animales, etc...
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
                            Me encantan los paseos, los animales, etc...
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
                            Me encantan los paseos en bici y hacer snowboard.
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
                        <div className="flex flex-col justify-end items-stretch p-4 text-md absolute w-full h-full text-white">
                          <div className="text-xl float-left py-2">
                            Jesús Allona, <span className="age">32</span>
                          </div>
                          <div className="tinfo">
                            Me encantan los paseos en bici y hacer snowboard.
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
                            Nora Olazabal, <span className="age">32</span>
                          </div>
                          <div className="tinfo">
                            Me encantan los paseos, los animales, etc...
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        id="slide-3"
                        className="snap-start shrink-0 w-[350px] h-[350px] origin-[center_center] transition-transform duration-[0.5s] relative mr-[50px] scale-100"
                      >
                        <img
                          src={brunoProfilePicture.src}
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
                            Disfruto de mi tiempo con mi moto.
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
                            Yonki de los escape rooms, los gatitos y el gym.
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
                            Álvaro García, <span className="age">32</span>
                          </div>
                          <div className="tinfo">
                            Apasionado de la tecnología, friki de los
                            videojuegos y jugador de pádel en mi tiempo libre.
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
                            Fan de los pantocrátores, Harry Potter y los
                            perritos.
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div className="flex justify-between items-center relative">
                    <button
                      onClick={rejectCandidate}
                      className="cursor-pointer flex justify-center items-center transition-colors bg-white h-[64px] w-[64px] relative rounded-full border-2 border-solid border-[#f0f0f0]"
                    >
                      <X
                        className="text-red-500  transition-colors"
                        size={64}
                      />
                    </button>
                    <button
                      onClick={matchCandidate}
                      className="cursor-pointer flex justify-center items-center bg-white h-[50px] w-[50px] relative rounded-full border-2 border-solid border-[#f0f0f0]"
                    >
                      <Flame
                        className="fill-amber-500 text-white transition-colors"
                        size={48}
                      />
                    </button>
                    <button
                      onClick={acceptCandidate}
                      className="cursor-pointer  bg-white flex justify-center items-center h-[64px] w-[64px] relative rounded-full border-2 border-solid border-[#f0f0f0]"
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
            </div>
          </div>

          {isSusanaMatched && (
            <section className="flex flex-col justify-start items-center w-full">
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
