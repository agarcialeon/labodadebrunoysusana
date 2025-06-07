import logoFarmacia from "../images/drugs/logo-farmacia.png";
import barcode from "../images/drugs/barcode.png";
import firma from "../images/drugs/firma.png";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  medicamento1: z.literal("tusclin", {
    errorMap: () => ({ message: "Medicamento incorrecto" }),
  }),
  medicamento2: z.literal("estilsona", {
    errorMap: () => ({ message: "Medicamento incorrecto" }),
  }),
  medicamento3: z.literal("ibudol", {
    errorMap: () => ({ message: "Medicamento incorrecto" }),
  }),
  medicamento4: z.literal("cariban", {
    errorMap: () => ({ message: "Medicamento incorrecto" }),
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function Drugs() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [barcodeFour, setBarcodeFour] = useState<string>("");
  const [barcodeThree, setBarcodeThree] = useState<string>("");
  const [barcodeOne, setBarcodeOne] = useState<string>("");
  const [barcodeZero, setBarcodeZero] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const formValues = watch();

  const onSubmit: SubmitHandler<FormSchema> = (form: FormSchema) => {
    setIsUnlocked(true);
    setBarcodeFour("4");
    setBarcodeThree("3");
    setBarcodeOne("1");
    setBarcodeZero("0");
  };

  return (
    <section className="fluid-column relative bg-gradient-to-br from-teal-200 to-teal-500 flex flex-col items-stretch gap-8">
      <header className="flex justify-center items-center">
        <h1 className="title urbanist-900">😍Amor y otra drogas💊</h1>
      </header>

      <section className="p-4">
        <p className="py-2">
          Como habéis visto el amor nos puede sorprender con cualquier persona
          con un simple match (o lo que nuestros padres llamarían flechazo). El
          problema de los flechazos es que a veces no nos dejan ver la realidad
          y podemos idealizar a las personas perdiéndonos nosotros mismos por el
          camino al seguir el hilo rojo.
        </p>
        <p className="py-2">
          Por eso mismo, nuestros expertos farmacéuticos han desarrollado un
          medicamento con métodos experimentales con resultados prometedores
          para solucionar este problema.
        </p>
        <p className="py-2">
          Aunque en esta ocasión, el problema ha sido el tremendo éxito que ha
          tenido dicho medicamento, lo que ha provocado la falta de stock. Ante
          tal situación, y como sois muy majos (y para que os vamos a engañar,
          es un placebo de manual 😜 😜), os vamos a pasar la receta para que
          vosotros mismos podáis fabricar el medicamento y así continuar vuestro
          camino hacia la persona a la que el destino os ha atado.
        </p>
        <p className="py-2">
          Tan sólo tenéis que seguir las instrucciones de nuestro farmaceutico
          de guardia que amablemente ha apuntado en la siguiente receta, aunque
          os advertimos de que la última vez que hablamos con él, estaba bajo la
          influencia de una sobredosis de azúcar, así que es casi seguro que
          tengais que poner algo de empeño por vuestra parte para entenderla.
        </p>
        <p className="py-2">
          PD: Para que la receta sea válida debéis insertar los nombres de los
          medicamentos necesarios en el orden correcto.
        </p>
      </section>

      <div className="prescription_form bg-blue-50 border-2 border-gray-500">
        <div className="flex flex-col justify-start items-stretch p-4 gap-[1px]">
          <div className="header border">
            <div className="w-full flex justify-start items-stretch">
              <img
                src={logoFarmacia.src}
                width="64"
                height="64"
                alt="Logo hospital"
              />
              <div className="w-full flex justify-center items-center">
                <p>
                  <span className="font-semibold">
                    RECÉTA MÉDICA PARA ASISTENCIA SANITARIA
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="main grid-cols-[1fr]">
            <div className="sm:grid sm:grid-cols-6 sm:grid-rows-4 sm:gap-[1px] border-gray-900">
              <div className="col-span-2 row-span-4 border-1 p-2">
                <p>
                  <span className="font-semibold">PRESCRIPCIÓN:</span>
                </p>
                <p className="py-4">
                  La receta consta de 4 componentes de sacarosa. Cuatro
                  corazones partidos, tres plátanos bien amarillos y un huevo
                  frito son esenciales. Un número redondo de esencia de
                  atracción se añade al final a la mezcla. Todos los
                  ingredientes deben estar 'hilados', en lugar de marcados, para
                  que la mezcla sea homogénea. Evitar la mezcla con otros
                  azúcares (incluidas bebidas) durante la preparación y no
                  exceder la recomendación de ingesta diaría de azúcares.
                </p>
                <p>
                  Vía de administración: _______
                  <span className="underline">Oral</span>_______
                </p>
              </div>
              <div className="col-span-2 col-start-3 row-start-4 border-1 p-2">
                <div className="flex justify-between items-stretch">
                  <p className="w-full flex justify-between items-center">
                    <span> Nº de orden dispensación: </span>
                    <span className="font-bold">#7625</span>
                  </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span>Fecha prevista: </span>
                  <span className="underline">07/06/2025</span>
                </div>
              </div>
              <div className="col-span-2 col-start-3 row-span-3 border-1">
                <div className="grid grid-rows-3">
                  <div className="flex flex-col items-stretch p-2">
                    <p>Duración del tratamiento:</p>
                    <p className="flex justify-end items-center">
                      - Hasta finalizar los sintomas -
                    </p>
                  </div>
                  <div className="grid grid-rows-1 p-2">Posología</div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 col-start-5 row-start-1 border-1 p-2">
                <p>
                  <span className="font-semibold">PACIENTE</span> (Nombre y
                  apellidos):
                </p>
                <p>Bruno Flores</p>
              </div>
              <div className="col-span-6 row-span-1 col-start-1 row-start-5 border-1 p-2">
                <p>
                  <span className="font-semibold">DIAGNÓSTICO</span> (si
                  procede): Sudoración de las manos, fiebre, alteración del
                  ciclo del sueño, sensación de "mariposas en el estómago".
                </p>
              </div>
              <div className="col-span-6 row-span-2 col-start-1 row-start-6 border-1 p-2">
                <span className="font-semibold">INSTRUCCIONES AL PACIENTE</span>{" "}
                (si procede): Tomar tres dosis diarias de los medicamentos
                indicados acompañados de comida. Si los sintomas empeoran,
                añadir una dosis de "chuches" durante la cena.
              </div>
              <div className="col-span-2 row-span-2 col-start-5 row-start-3 border-1 p-2">
                <div>
                  <p>
                    <span className="font-semibold">PRESCRIPTOR </span>(Nombre
                    del médico):
                  </p>
                  <p className="italic w-full flex justify-end items-center">
                    Dr. Ambrosía
                  </p>
                  <p className="flex justify-between items-center">
                    <span>Fecha de la prescripción:</span>
                    <span className="underline">07/06/2025</span>
                  </p>
                  <div className="flex flex-col items-stretch">
                    <p>Firma*</p>

                    <img
                      src={firma.src}
                      className="w-64"
                      title="medicamento"
                      alt="Medicamento 4"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-6 row-span-2 sm:grid sm:grid-cols-3 sm:grid-rows-1 border-1 p-2">
                <div className="p-4">
                  <p>
                    La validez de esta receta expira a los 10 días naturales de
                    la fecha prevista para la dispensación, o en su defecto de
                    la fecha de prescripción. La medicación prescrita no
                    superará los 6 meses de tratamiento. La receta es válida
                    para una única dispensación en la farmacia. Esta receta
                    podrá ser dispensada en cualquier ofician de farmacia del
                    territorio nacional.
                  </p>
                </div>
                <div className="barcode border-t border-b py-2 sm:border-l sm:border-t-0 sm:border-b-0 sm:py-0 sm:px-2 sm:border-r flex flex-col justify-center items-center">
                  <img
                    src={barcode.src}
                    className=""
                    title="barcode"
                    alt="Código de barras"
                  />
                  <p className="w-full flex flex-row justify-between items-center gap-2">
                    <span>{barcodeThree}</span>
                    <span>N</span>
                    <span>{barcodeFour}</span>
                    <span>M</span>
                    <span>{barcodeZero}</span>
                    <span>R</span>
                    <span>{barcodeFour}</span>
                    <span>M</span>
                    <span>{barcodeOne}</span>
                    <span>{barcodeThree}</span>
                    <span>N</span>
                    <span>T</span>
                    <span>{barcodeZero}</span>
                  </p>
                </div>
                <div className="p-4">
                  <p className="pb-2">
                    El paciente puede comprobar la prescripción del medicamento
                    o medicamentos indicados por el prescriptor en la siguiente
                    página web en caso de pérdida del documento prescriptivo que
                    acompaña a cada medicamento.
                  </p>
                  <p>
                    <a
                      className="text-teal-700"
                      href="https://cima.aemps.es/cima/publico/home.html"
                    >
                      https://cima.aemps.es/cima/publico/home.html
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col py-2 gap-4 "
      >
        <div className="flex flex-col justify-start items-stretch gap-4 py-4 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col items-stretch gap-4">
            <label htmlFor="medicamento1">Medicamento nº 1:</label>
            <input
              type="text"
              id="medicamento1"
              {...register("medicamento1")}
              defaultValue={""}
              className="bg-white rounded-md p-2"
            />
            {errors.medicamento1 && (
              <span className="text-red-400">
                {errors.medicamento1.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-stretch gap-4">
            <label htmlFor="medicamento2">Medicamento nº 2:</label>
            <input
              type="text"
              id="medicamento2"
              {...register("medicamento2")}
              defaultValue={""}
              className="bg-white rounded-md p-2"
            />
            {errors.medicamento2 && (
              <span className="text-red-400">
                {errors.medicamento2.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-stretch gap-4">
            <label htmlFor="medicamento3">Medicamento nº 3:</label>
            <input
              type="text"
              id="medicamento3"
              {...register("medicamento3")}
              defaultValue={""}
              className="bg-white rounded-md p-2"
            />
            {errors.medicamento3 && (
              <span className="text-red-400">
                {errors.medicamento3.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-stretch gap-4">
            <label htmlFor="medicamento4">Medicamento nº 4:</label>
            <input
              type="text"
              id="medicamento4"
              {...register("medicamento4")}
              defaultValue={""}
              className="bg-white rounded-md p-2"
            />
            {errors.medicamento4 && (
              <span className="text-red-400">
                {errors.medicamento4.message}
              </span>
            )}
          </div>
        </div>
        {!isUnlocked && (
          <div className="flex flex-row items-center justify-center">
            <button
              type="submit"
              className="hover:cursor-pointer border-2 p-4 rounded-4xl hover:text-white"
            >
              Confirmar
            </button>
          </div>
        )}
      </form>

      {isUnlocked && (
        <section className="flex items-center justify-center">
          <a
            href="/labodadebrunoysusana/butterflies"
            className="border-2 p-4 rounded-4xl hover:text-white"
          >
            <span>Siguiente</span>
          </a>
        </section>
      )}
    </section>
  );
}
