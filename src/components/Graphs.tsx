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

// El código de este juego es la fecha de la boda
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
          fn: "1 / x",
        },
      ],
    });

    functionPlot({
      target: "#second",
      width: 250,
      height: 250,
      xAxis: { domain: [-4, 4] },
      yAxis: { domain: [-4, 4] },
      data: [
        {
          fnType: "parametric",
          x: "3 * cos(t)",
          y: "3 * sin(t)",
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
          fn: "abs(2x) - 5",
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
          x: "-3 * abs(sin(t))",
          y: "t",
          graphType: "polyline",
        },
      ],
    });
  });

  return (
    <section className="flex flex-col relative justify-start items-stretch gap-8 fluid-column">
      <div className="bg-white border rounded-2xl w-[64px] absolute right-5 top-5">
        <img src={finger.src} alt="Preguntar al hilo rojo" width={64} />
      </div>
      <div className="title urbanist-900">La ecuación del amor</div>
      <p className="text-center w-full py-4">
        En la historia de las matemáticas existen tres amores imposibles. Todos
        ellos dados por una ecuación que define esa relación.
      </p>

      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-start items-center gap-4">
          <div id="parallel"></div>
          <p>x = 1</p>
          <p>x = -1</p>
          <h3>Lineas paralelas</h3>
          <p>Almas gemelas que nunca están destinadas a encontrarse</p>
        </div>

        <div className="flex flex-col justify-start items-center gap-4">
          <div id="asymptote"></div>
          <p>x = 1</p>
          <p>x = -1</p>
          <h3>Asíntota</h3>
          <p>Cada vez más cerca, pero nunca estarán juntas</p>
        </div>

        <div className="flex flex-col justify-start items-center gap-4">
          <div id="tangent"></div>
          <p>x = 1</p>
          <p>x = -1</p>
          <h3>Tangente</h3>
          <p>Estar juntos una vez, y luego separarse para siempre</p>
        </div>

        <div className="flex flex-col justify-start items-center gap-4">
          <div id="sine"></div>
          <p>y = sin(x)</p>
          <p>y = cos(x)</p>
          <h3>Seno y coseno</h3>
          <p>
            Nunca sincronizados. Enamorándose y desenamorándose a cada paso.
          </p>
        </div>
      </div>

      <p>
        Sin embargo, sabemos que el (verdadero) amor no es tan simple y depende
        de varios factores. Es por eso que para dar con la clave necesitamos más
        de una ecuación.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around items-center gap-8">
          <div className="flex flex-col justify-start items-center gap-4">
            <div id="first"></div>

            <div className="flex items-center gap-2">
              <label htmlFor="input1">x =</label>
              <input
                type="number"
                className="form-input bg-white rounded-sm p-2"
                {...register("input1")}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start items-center gap-4">
            <div id="second"></div>
            <div className="flex items-center gap-2">
              <label htmlFor="input2">x =</label>
              <input
                type="number"
                className="form-input bg-white rounded-sm p-2"
                {...register("input2")}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start items-center gap-4">
            <div id="third"></div>
            <div className="flex items-center gap-2">
              <label htmlFor="input3">x =</label>
              <input
                type="number"
                className="form-input bg-white rounded-sm p-2"
                {...register("input3")}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start items-center gap-4">
            <div id="fourth"></div>

            <div className="flex items-center gap-2">
              <label htmlFor="input4">x =</label>
              <input
                type="number"
                className="form-input bg-white rounded-sm p-2"
                {...register("input4")}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="border-2 p-4 rounded-4xl hover:bg-sky-700"
            type="submit"
          >
            Confirmar
          </button>
        </div>
      </form>

      <section className="flex flex-col justify-start items-center">
        <a href="/labodadebrunoysusana/love-and-other-drugs">
          <span className="border-2 p-4 rounded-4xl hover:bg-sky-700">
            Siguiente
          </span>
        </a>
      </section>
    </section>
  );
}
