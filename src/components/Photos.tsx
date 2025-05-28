export default function Photos() {
  return (
    <section className="fluid-column bg-[linear-gradient(90deg,#fcff9e_0%,#c67700_100%)] flex flex-col items-stretch gap-8">
      <div>
        <div className="title urbanist-900">Empareja-dos!</div>
        <p>En ocasiones no importa el momento, sino el lugar...</p>
      </div>

      {/* <!-- METER AQUÍ FOTOS DE PAREJAS EN FOTOS SEPARADAS Y JUNTARLOS --> */}
      {/* <!-- EN EL CASO DE SOLTEROS, PONER A ALLONA Y VICTOR JUNTOS COMO COLEGAS --> */}

      <div className="app">
        <div className="flex flex-col gap-8 items-stretch sm:grid sm:grid-cols-[repeat(2,1fr)] sm:gap-[20px_20px] md:grid md:grid-cols-[repeat(3,1fr)] md:gap-[8px_8px] xl:grid xl:grid-cols-[repeat(5,1fr)] xl:gap-[8px_8px] mx-2.5 my-5">
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/une-vie-remplie.jpg"
                alt="Une vie remplie"
                title="Une vie remplie"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              A fulfilled life
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/je-peux-le-faire.jpg"
                alt="Je peux le faire"
                title="Je peux le faire"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              I can do it
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/une-folie.jpg"
                alt="Une folie"
                title="Une folie"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              What a madness
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/paris.jpg"
                alt="Paris"
                title="Paris"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Paris
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/surprise.jpg"
                alt="Surprise"
                title="Surprise"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Surprise
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/du-pur-vegan.jpg"
                alt="Du pur vegan"
                title="Du pur vegan"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Pure vegan
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/fashionista.jpg"
                alt="Fashionista"
                title="Fashionista"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Fashionista
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
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/mannequin-pour-dog.jpg"
                alt="Mannequin pour dog"
                title="Mannequin pour dog"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Dog model
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/ma-chérie.jpg"
                alt="Ma chérie"
                title="Ma chérie"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              My sweetheart
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/3-ans-déjà.jpg"
                alt="3 ans déjà"
                title="3 ans déjà"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              3 years of happiness
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
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/sista.jpg"
                alt="Sista"
                title="Sista"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Sister
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
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/sortie-entre-copines.jpg"
                alt="Sortie entre copines"
                title="Sortie entre copines"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Girls trip
            </p>
          </div>
          <div className="bg-white animate-[fadeIn_1s] duration-500 pt-2.5 pb-5 px-2.5 hover:scale-110 hover:cursor-pointer">
            <div className="overflow-hidden object-cover aspect-[1] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full block object-cover object-center duration-500"
                src="https://gitlab.com/anusanbsk/shooshoot/raw/master/img/gallery/détente-au-calme.jpg"
                alt="Détente au calme"
                title="Détente au calme"
              />
            </div>
            <p className="text-center font-bold text-[1.3rem] tracking-[-1px] whitespace-nowrap overflow-hidden text-ellipsis text-black mt-2.5">
              Relaxation
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

      <section className="flex items-center justify-center">
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
