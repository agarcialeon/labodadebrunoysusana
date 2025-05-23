import redThread from "../images/red-thread/red-thread.png";
import { Infinity } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { navigate } from "astro:transitions/client";

type Inputs = {
  novio: string;
  novia: string;
};

export default function Thread() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (inputs) => {
    console.log(`Atando el hilo rojo a ${inputs.novio} y ${inputs.novia}`);
    setTimeout(() => {
      navigate("/labodadebrunoysusana/your-name");
    }, 1000);
  };

  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-rose-400 to-neutral-50">
      <section className="max-w-[65%] flex flex-col items-stretch gap-4 my-4">
        <h1 className="title font-urbanist">El hilo rojo del destino</h1>
        <section className="prose flex flex-col items-stretch">
          <div className="flex justify-center items-center">
            <img src={redThread.src} alt="Manos unidas por hilo rojo" />
          </div>
          <p className="py-2">
            Existe un mito en la Asia oriental (concretamente la china y la
            japonesa) conocido como el "hilo rojo del amor" y en la Occidente
            como "Almas gemelas" según el cual los dioses atan un cordón rojo
            alrededor del tobillo o en el dedo meñique a aquellas personas que
            están destinadas a ser queridos entre sí, independientemente del
            <span className="font-bold">
              momento, el lugar o la circunstancia.
            </span>
          </p>
          <p className="py-2">
            Por tanto, este cordón mágico se puede estirar o enredar, pero nunca
            puede romperse.
          </p>

          <p className="py-2">
            Existen distintas adaptaciones al cine de este mito, entre ellas la
            pelicula de animación japonesa
            <a href="https://www.netflix.com/it-en/title/80161371">
              Kimi no Na wa (Your Name, en español)
            </a>
            la cual destaca por su popularidad.
          </p>

          <p className="py-2">
            <details
              name="accordion"
              className="w-full select-none border m-2 border-solid"
            >
              <summary className="cursor-pointer m-2 p-2 ">
                Pulsa aquí para descubrir la historia detrás de este mito
              </summary>
              <p className="m-0 p-2 italic">
                Hace mucho tiempo, un emperador se enteró de que en una de las
                provincias de su reino vivía una bruja muy poderosa, quien tenía
                la capacidad de poder ver el hilo rojo del destino y la mandó
                traer ante su presencia.
              </p>
              <p className="m-0 p-2 italic">
                Cuando la bruja llegó, el emperador le ordenó que buscara el
                otro extremo del hilo que llevaba atado al dedo corazón y lo
                llevara ante la que sería su esposa. La bruja accedió a esta
                petición y comenzó a seguir y seguir el hilo. Esta búsqueda los
                llevó hasta un mercado, en donde una pobre campesina con una
                bebé en los brazos ofrecía sus productos.
              </p>

              <p className="m-0 p-2 italic">
                Al llegar hasta donde estaba esta campesina, se detuvo frente a
                ella y la invitó a ponerse de pie. Hizo que el joven emperador
                se acercara y le dijo: «Aquí termina tu hilo», pero al escuchar
                esto el emperador enfureció, creyendo que era una burla de la
                bruja, empujó a la campesina que aún llevaba a su pequeña bebé
                en brazos y la hizo caer, haciendo que la bebé se hiciera una
                gran herida en la frente, luego ordenó a sus guardias que
                detuvieran a la bruja y le cortaran la cabeza.
              </p>
              <p className="m-0 p-2 italic">
                Muchos años después, llegó el momento en que este emperador
                debía casarse y su corte le recomendó que lo mejor fuera que
                desposara a la hija de un general muy poderoso. El emperador
                aceptó esta decisión y comenzaron todos los preparativos para
                esperar a quien sería después la elegida como esposa del gran
                emperador. Llegó el día de la boda, pero sobre todo había
                llegado el momento de ver por primera vez la cara de su esposa.
                Ella entro al templo con un hermoso vestido y un velo que la
                cubría totalmente el rostro … Al levantarle el velo, vio por
                primera vez que este hermoso rostro tenía una cicatriz muy
                peculiar en la frente. Era la cicatriz que él mismo había
                provocado al rechazar su destino años antes. Un destino que la
                bruja había puesto frente al suyo y que había decidido no creer.
              </p>

              <p className="m-0 p-2 italic">
                Llegó el día de la boda, pero sobre todo había llegado el
                momento de ver por primera vez la cara de su esposa. Ella entro
                al templo con un hermoso vestido y un velo que la cubría
                totalmente el rostro. Al levantarle el velo, vio por primera vez
                que este hermoso rostro tenía una cicatriz muy peculiar en la
                frente. Era la cicatriz que él mismo había provocado al rechazar
                su destino años antes. Un destino que la bruja había puesto
                frente al suyo y que había decidido no creer.
              </p>
            </details>
          </p>

          <p className="py-2">
            En esta experiencia que hemos creado para vosotros (los novios)
            vamos a embarcarnos en este mito y explorar como vuestros caminos se
            han cruzado.
          </p>
        </section>

        <section className="flex items-center">
          <hr className="h-[1px] w-full bg-red-400 border-0" />
          <Infinity size={64} className="text-red-400 px-2" />
          <hr className="h-[1px] w-full bg-red-400 border-0" />
        </section>

        <section className="flex flex-col items-stretch gap-4">
          <p className="py-2">
            Y como en todos los mitos o historias, que tienen un principio y un
            final, nosotros comenzaremos esta con vuestros nombres. Por favor,
            rellenad cada campo con el nombre de cada uno donde se indica.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col py-2 gap-4"
          >
            <div className="flex flex-col justify-start items-stretch gap-4 py-4">
              <div className="flex flex-col items-stretch gap-4">
                <label htmlFor="novio">Nombre del él:</label>
                <input
                  type="text"
                  id="novio"
                  {...register("novio")}
                  className="bg-white rounded-md p-2"
                />
              </div>
              <div className="flex flex-col items-stretch gap-4">
                <label htmlFor="novia">Nombre del ella:</label>
                <input
                  type="text"
                  id="novia"
                  {...register("novia")}
                  className="bg-white rounded-md p-2"
                />
              </div>
            </div>

            {!isSubmitted ? (
              <button
                type="submit"
                className="hover:cursor-pointer border-2 p-4 rounded-4xl hover:text-red-400"
              >
                Confirmar
              </button>
            ) : (
              <button
                type="button"
                className="hover:cursor-pointer border-2 p-4 rounded-4xl hover:text-red-400"
              >
                Atando un hilo rojo a los novios...
              </button>
            )}
          </form>
        </section>
      </section>
    </section>
  );
}
