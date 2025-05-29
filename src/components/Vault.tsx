import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import ConfettiExplosion from "react-confetti-blast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const weddingDate = new Date("2025-06-07T00:00:00.000Z");

const formSchema = z.object({
  novio: z.string().refine((val) => val.toLowerCase() === "bruno", {
    message: `Introduce el nombre correcto del novio`,
  }),
  novia: z.string().refine((val) => val.toLowerCase() === "susana", {
    message: `Introduce el nombre correcto de la novia`,
  }),
  date: z
    .string()
    .transform((date) => new Date(date))
    .refine(
      (date: Date) =>
        date.getDay() === weddingDate.getDay() &&
        date.getMonth() === weddingDate.getMonth() &&
        date.getFullYear() === weddingDate.getFullYear(),
      {
        message: `La fecha introducida no es correcta`,
      }
    ),
  place: z
    .string()
    .refine((val) => val.toLowerCase() === "iglesia de santiago el real", {
      message: `Oops! Parece que ese no es el lugar correcto`,
    }),
  password: z.string().superRefine((val, ctx) => {
    if (val.toLowerCase() !== "si quiero") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Clave incorrecta",
      });
      return;
    }

    if (val !== "SI QUIERO") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "No pareces muy convencid@, prueba a decirlo con fuerza",
      });
    }
  }),
  passwordCheck: z.literal(true, {
    errorMap: () => ({ message: "¿Dudas de última hora?" }),
  }),
});

type FormInputSchema = z.input<typeof formSchema>;
type FormOutputSchema = z.infer<typeof formSchema>;

export default function Vault() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormInputSchema, unknown, FormOutputSchema>({
    defaultValues: {
      novio: "",
      novia: "",
      date: "",
      place: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<FormOutputSchema> = (
    data: FormOutputSchema
  ) => {
    setIsUnlocked(true);
    setIsExploding(true);
  };

  console.log(watch());

  return (
    <div className="flex flex-col items-stretch h-full w-full min-h-dvh bg-gradient-to-t from-blue-800 via-purple-600 to-blue-400">
      {!isUnlocked ? (
        <section className="flex flex-col gap-8 justify-center items-center w-full h-full">
          <h1 className="urbanist-900 text-6xl text-white text-center">
            💌 El último paso
          </h1>
          <form
            className="flex flex-col min-w-[90%] md:min-w-[50%] gap-y-2 border-2 border-slate-100 rounded-lg p-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-slate-100" htmlFor="novio">
              Introduce el primer nombre:
            </label>
            <input
              className="mt-1 block w-full p-2 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              {...register("novio")}
            />
            {errors.novio && <span>{errors.novio?.message}</span>}

            <label className="text-slate-100" htmlFor="novia">
              Introduce el segundo nombre:
            </label>
            <input
              className="mt-1 block w-full p-2 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              {...register("novia")}
            />
            {errors.novia && <span>{errors.novia?.message}</span>}

            <label className="text-slate-100" htmlFor="place">
              Introduce el lugar:
            </label>
            <select
              className="mt-1 block w-full p-2 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              {...register("place")}
            >
              <option value="">Selecciona una opción</option>
              <option value="chamberi">🌳🧸🍻🦶🛤️🌟</option>
              <option value="calle laurel"> 🍷 🍤 🍢 🐘</option>
              <option value="zamora"> 🌙 ✨ 🏰 💍 👫 👩🏻‍❤️‍💋‍👨🏻</option>
              <option value="iglesia de santiago el real">⛪🗡️🧑‍🦰🦶🛤️🌟</option>
              <option value="palacio de la vega">🏰🍾👰🤵🍽️🎉</option>
              <option value="kyoto">🏯🍂🎎🌸🍵</option>
            </select>
            {errors.place && <span>{errors.place?.message}</span>}

            <label className="text-slate-100" htmlFor="date">
              Introduce la fecha:
            </label>
            <input
              className="mt-1 block w-full p-2 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="date"
              {...register("date")}
            />
            {errors.date && <span>{errors.date?.message}</span>}

            <div className="flex justify-center items-center gap-2">
              {!getValues("password") ||
              getValues("password") !== "SI QUIERO" ? (
                <div>
                  <label htmlFor="password" className="text-slate-100">
                    Introduce la clave:
                  </label>
                  <input
                    type="text"
                    {...register("password")}
                    className="mt-1 block w-full p-2 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  ></input>
                  {errors.password && <span>{errors.password?.message}</span>}
                </div>
              ) : (
                <div className="flex flex-col items-stretch text-center">
                  <div>
                    <input type="checkbox" {...register("passwordCheck")} />
                    <label htmlFor="siquiero" className="ml-1 text-slate-100">
                      {getValues("password")}
                    </label>
                  </div>
                  <div className="text-slate-100">
                    {errors.passwordCheck && (
                      <span>{errors.passwordCheck?.message}</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="relative hover:cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold bg-gray-200 text-gray-900 rounded-lg shadow-2xl shadow-black/60 group hover:text-white"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

              <span className="relative text-base font-semibold">
                Desbloquear
              </span>
            </button>
          </form>
        </section>
      ) : (
        <section className="w-full h-full flex flex-col justify-center items-center fluid-column">
          <h1 className="urbanist-900 text-4xl text-white">
            ¡Enhorabuena pareja!
          </h1>

          <section className="flex flex-col items-center">
            <p className="py-4">
              Habéis completado esta experiencia, demostrando que el hilo rojo
              os ha unido por que sois el uno para el otro. Esperamos que hayáis
              disfrutado de ella tanto como nosotros preparándola para vosotros
              y os deseamos de todo corazón que seais felices los dos juntos.
            </p>

            <p className="py-4">
              Como agradecimiento por vuestra paciencia con nuestro equipo, la
              destreza mostrada en las pruebas y por lo ___ que sois, os hacemos
              obsequio de esta tarjeta virtual donde haremos la transferencia
              como regalo de bodas.
            </p>

            <p className="py-4">
              Por último, confiamos en que la luna de miel sea espectacular y
              esperamos con ansias poder seguir viéndonos todos juntos a vuestra
              vuelta para que nos contéis todos los detalles.
            </p>
          </section>
          <section className="w-full h-full flex flex-col justify-center items-center">
            {isExploding && (
              <ConfettiExplosion height={"100dvh"} width={1000} />
            )}
            <div className="relative isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 flex items-center justify-center">
              <div className="absolute top-2 w-full px-8 sm:top-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light">Nombre de los beneficiarios</p>
                    <p className="font-medium tracking-widest">
                      Bruno & Susana
                    </p>
                  </div>
                  <img
                    className="h-14 w-14 object-contain"
                    src="data:image/png;base64,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"
                  />
                </div>
                <div className="pt-1">
                  <p className="font-light">Número de cuenta</p>
                  <p className="tracking-more-wider font-medium">
                    ES04 1465 0100 94 1755094046
                  </p>
                </div>
                <div className="pt-4 pr-6 sm:pt-6">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="text-xs font-light">Válido desde</p>
                      <p className="text-base font-medium tracking-widest">
                        07/06
                      </p>
                    </div>
                    <div className="">
                      <p className="text-xs font-light">Expira</p>
                      <p className="text-base font-medium tracking-widest">
                        Nunca
                      </p>
                    </div>

                    <div className="">
                      <p className="text-xs font-light">CVV</p>
                      <p className="tracking-more-wider text-sm font-bold">
                        521
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <p className="py-4">
              PD: Un fuerte abrazo desde el equipo de HotRiXXX.
            </p>
          </section>

          {/* Mostrar aquí la invitación con la animación del dinero entrando a la cuenta */}
        </section>
      )}
    </div>
  );
}

{
  /* <style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
  .envelope {
    width: 300px;
    height: 200px;
    background-color: #808000;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    overflow: hidden;
  }
  .flap {
    width: 300px;
    height: 100px;
    background-color: #6b6b00;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px 15px 0 0;
    transform-origin: top center;
    transition: transform 1s ease;
  }
  .envelope.open .flap {
    transform: rotateX(-180deg);
  }
  .invitation {
    width: 280px;
    height: 180px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    left: 10px;
    opacity: 0;
    transition: opacity 1s ease 1s;
  }
  .envelope.open .invitation {
    opacity: 1;
  }
</style> */
}
