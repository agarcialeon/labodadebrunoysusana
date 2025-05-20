import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import ConfettiExplosion from "react-confetti-blast";

type Inputs = {
  date: string;
  place: string;
  password: string; //siquiero
};

export default function Vault() {
  const [isUnlocked] = useState(true);
  const [isExploding] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <div className="h-full w-full min-h-dvh">
      {!isUnlocked ? (
        <>
          <h1 className="urbanist-900 text-4xl">El último paso</h1>

          <section className="flex flex-col px-8 py-2">
            <form
              className="flex flex-col gap-y-2 border-2 border-slate-100 rounded-lg p-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-slate-100" htmlFor="pass">
                Introduce la clave:
              </label>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="date"
                {...register("date")}
              />
              {errors.date && <span>This field is required</span>}
              <input
                id="pass"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="password"
                {...register("password")}
              />

              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" name="siquiero" id="siquiero" />
                <label htmlFor="siquiero">Sí quiero</label>
              </div>

              <button
                type="submit"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold bg-gray-200 text-gray-900 rounded-lg shadow-2xl shadow-black/60 group hover:text-white"
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
        </>
      ) : (
        <section>
          {isExploding && <ConfettiExplosion />}
          <h1 className="urbanist-900 text-4xl">¡Enhorabuena pareja!</h1>

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
