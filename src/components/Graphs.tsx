import functionPlot from "function-plot";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import finger from "../images/finger.png";

type Inputs = {
  input1: number;
  input2: number;
  input3: number;
  input4: number;
};

// El código de este juego es la fecha de la boda (7/6/25)
export default function Graphs() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    functionPlot({
      target: "#parallel",
      width: 250,
      height: 250,
      data: [
        {
          fn: "1",
        },
        {
          fn: "-1",
        },
      ],
    });

    functionPlot({
      target: "#asymptote",
      width: 250,
      height: 250,
      data: [
        {
          fn: "1 / x",
        },
        {
          fn: "0",
        },
      ],
    });

    functionPlot({
      target: "#tangent",
      width: 250,
      height: 250,
      data: [
        {
          fn: "sqrt(4 - x^2)",
        },
        {
          fn: "2",
        },
      ],
    });

    functionPlot({
      target: "#sine",
      width: 250,
      height: 250,
      data: [
        {
          fn: "sin(x)",
        },
        {
          fn: "cos(x)",
        },
      ],
    });

    // LOVE
    functionPlot({
      target: "#first",
      width: 250,
      height: 250,
      xAxis: { domain: [-1, 9] },
      yAxis: { domain: [-1, 9] },
      data: [
        {
          fn: "1 / x + 7",
        },
      ],
    });

    functionPlot({
      target: "#second",
      width: 250,
      height: 250,
      xAxis: { domain: [2, 10] },
      yAxis: { domain: [2, 10] },
      data: [
        {
          fnType: "parametric",
          x: "3 * cos(t) + 6",
          y: "3 * sin(t) + 6",
          graphType: "polyline",
          range: [0, 2 * Math.PI],
        },
      ],
    });

    functionPlot({
      target: "#third",
      width: 250,
      height: 250,
      data: [
        {
          fn: "abs(2x) + 2",
        },
      ],
    });

    functionPlot({
      target: "#fourth",
      width: 250,
      height: 250,
      xAxis: { domain: [-6, 2] },
      yAxis: { domain: [-2, 8] },
      data: [
        {
          fnType: "parametric",
          x: "-3 * abs(sin(t)) - 5",
          y: "t",
          graphType: "polyline",
        },
      ],
    });
  });

  return (
    <section className="flex flex-col relative justify-start items-stretch gap-8 fluid-column bg-indigo-200">
      <section>
        <div className="bg-white border-2 rounded-2xl w-[64px] absolute right-5 top-5 hover:bg-gray-100 cursor-pointer">
          <img src={finger.src} alt="Preguntar al hilo rojo" width={64} />
        </div>
        <div className="title urbanist-900">La ecuación del amor</div>
        <p className="text-center w-full py-4">
          En la historia de las matemáticas existen tres amores imposibles.
          Todos ellos dados por una ecuación que define esa relación.
        </p>
      </section>

      <section>
        <div className="flex flex-col items-stretch md:flex-row md:justify-around md:items-center gap-8">
          <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
            <div id="parallel"></div>
            <p>x = 1</p>
            <p>x = -1</p>
            <h3>Lineas paralelas</h3>
            <p className="italic text-balance text-center">
              "Almas gemelas que nunca están destinadas a encontrarse"
            </p>
          </div>

          <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
            <div id="asymptote"></div>
            <p>x = 1</p>
            <p>x = -1</p>
            <h3>Asíntota</h3>
            <p className="italic text-balance text-center">
              "Cada vez más cerca, pero nunca estarán juntas"
            </p>
          </div>

          <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
            <div id="tangent"></div>
            <p>x = 1</p>
            <p>x = -1</p>
            <h3>Tangente</h3>
            <p className="italic text-balance text-center">
              "Estar juntos una vez, y luego separarse para siempre"
            </p>
          </div>

          <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
            <div id="sine"></div>
            <p>y = sin(x)</p>
            <p>y = cos(x)</p>
            <h3>Seno y coseno</h3>
            <p className="italic text-balance text-center">
              "Nunca sincronizados. Enamorándose y desenamorándose a cada paso."
            </p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <p className="py-2 text-center">
          Sin embargo, sabemos que el (verdadero) amor no es tan simple y
          depende de varios factores o variables formando así todas ellas parte
          de un sistema de ecuaciones.
        </p>
        <p className="py-2 text-center">
          Dar valor a dichas variables nos permitirá mostrar en que momentos a
          lo largo del hilo rojo tendremos posibilidades de encontrar a nuestro
          amor verdadero.
        </p>
        <p className="py-2 text-center">
          A continuación os mostramos el sistema de ecuaciones que nuestros
          matemáticos han estudiado.
        </p>
      </section>

      <section className="flex flex-col items-stretch gap-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-stretch gap-8"
        >
          <div className="flex flex-col items-stretch md:flex-row md:justify-around md:items-center gap-8">
            <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
              <div id="first"></div>

              <div className="flex items-center gap-2">
                <label htmlFor="input1">x =</label>
                <input
                  type="number"
                  className="form-input bg-white border-2 border-indigo-200 rounded-sm p-2"
                  {...register("input1")}
                />
              </div>
            </div>

            <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
              <div id="second"></div>
              <div className="flex items-center gap-2">
                <label htmlFor="input2">x =</label>
                <input
                  type="number"
                  className="form-input bg-white border-2 border-indigo-200 rounded-sm p-2"
                  {...register("input2")}
                />
              </div>
            </div>

            <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
              <div id="third"></div>
              <div className="flex items-center gap-2">
                <label htmlFor="input3">x =</label>
                <input
                  type="number"
                  className="form-input bg-white border-2 border-indigo-200 rounded-sm p-2"
                  {...register("input3")}
                />
              </div>
            </div>

            <div className="flex flex-col justify-start items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
              <div id="fourth"></div>

              <div className="flex items-center gap-2">
                <label htmlFor="input4">x =</label>
                <input
                  type="number"
                  className="form-input bg-white border-2 border-indigo-200 rounded-sm p-2"
                  {...register("input4")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="border-2 p-4 rounded-4xl hover:text-indigo-400 hover:cursor-pointer"
              type="submit"
            >
              Confirmar
            </button>
          </div>
        </form>

        <section className="flex flex-col justify-start items-center">
          <a href="/labodadebrunoysusana/match">
            <span className="border-2 p-4 rounded-4xl hover:text-indigo-400 hover:cursor-pointer">
              Siguiente
            </span>
          </a>
        </section>
      </section>
    </section>
  );
}
