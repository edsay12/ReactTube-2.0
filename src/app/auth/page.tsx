import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { AiOutlineUnlock } from "react-icons/ai";
function Auth() {
  return (
    <>
      <section className="w-screen h-screen flex  flex-col items-center justify-center ">
        <div className=" md:w-96 w-4/5">
          <div className="text-7xl text-cian-800 w-full flex justify-center mb-4">
            <FaReact />
          </div>
          <h1 className="text-2xl text-center text-white mb-3">ReactTube</h1>
          <p className="text-gray-400 text-sm text-center">
            Faça login e comece a usar
          </p>
          <form action="" className="mt-10 flex flex-col gap-3 ">
            <div className="flex group flex-col gap-2 text-white text-sm">
              <label htmlFor="">Endereço de e-mail</label>
              <div className="text-xl border border-transparent focus-within:border-cyan-500  placeholder:text-gray-400 w-full flex gap-2 bg-gray-800 p-3 rounded items-center">
                <TbMail />
                <input
                  className="text-sm w-full p-0 outline-none bg-transparent border-none focus:ring-0"
                  type="text"
                  placeholder="edvan@gmail.com"
                />
              </div>
            </div>

            <div className="flex group flex-col gap-2 text-white text-sm ">
              <label htmlFor="">Sua senha</label>
              <div className="text-xl border border-transparent   focus-within:border-cyan-500  placeholder:text-gray-400 w-full flex gap-2 bg-gray-800 p-3 rounded items-center">
                <AiOutlineUnlock />
                <input
                  className=" text-sm w-full p-0 appearance-none outline-none bg-transparent border-none focus:ring-0"
                  type="password"
                  placeholder="edvan@gmail.com"
                />
              </div>
            </div>

            <div className="text-gray-200 flex gap-2 text-sm items-center">
              <input
                className="form-checkbox appearance-none cursor-pointer  bg-gray-800 checked:hover:bg-gray-700 checked:bg-gray-800 border-none focus:outline-none checked:focus:bg-gray-800 focus:ring-0 focus:border-x-cian-500 focus:ring-offset-0"
                type="checkbox"
              />
              <p>Lembra de mim por 30 dias</p>
            </div>

            <button type="submit" className="bg-cian-500 rounded text-gray-200 text-sm hover:opacity-90 py-3 mt-5 mb-5 w-full">Entrar na plataforma</button>
          </form>
        </div>

        <div className="space-y-4  flex flex-col justify-center items-center text-gray-500">
          <a href="" className="underline hover:text-gray-400">Esqueceu sua senha?</a>
          <a href="" className="underline hover:text-gray-400">Não possui uma conta? Crie uma agora</a>
        </div>
      </section>
    </>
  );
}

export default Auth;
