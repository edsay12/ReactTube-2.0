"use client";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { AiOutlineUnlock, AiOutlineUser } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import Button from "@/components/Button";
import { z } from "zod";
import { useCallback, useState } from "react";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Divider from "@/components/Divider";
import Link from "next/link";

type VarientType = "LOGIN" | "REGISTER";

function Auth() {
  const [variant, setVariante] = useState<VarientType>("LOGIN");
  const schema = z
    .object({
      email: z.string().email({ message: "O email precisa ser valido" }),
      senha: z
        .string()
        .min(5, { message: "A senha deve conter no minimo 5 caracters" }),
      username: z.string().refine(
        (value) => {
          if (variant === "REGISTER") {
            return value.length >= 5; // e obrigatorio
          } else {
            return true; // Não e obrigatorio
          }
        },
        { message: "O seu username deve conter no minimo 5 caracteres" }
      ),
    })
    .transform((fields) => {
      return {
        ...fields,
        username: variant === "REGISTER" ? fields.username : "",
      };
    });
  type formProps = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    criteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      senha: "",
      username: "",
    },
  });

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariante("REGISTER");
    } else {
      setVariante("LOGIN");
    }
  }, [variant]);

  const handleFormSubmit = (dados: formProps) => {
    // eslint-disable-next-line no-var
    console.log(dados);
  };
  return (
    <>
      <section className="w-screen h-screen flex  flex-col items-center justify-center ">
        <div className=" md:w-96 w-4/5">
          <div className="text-7xl text-cian-800 w-full flex justify-center mb-4">
            <FaReact />
          </div>
          <h1 className="text-2xl text-center text-white mb-3">ReactTube</h1>
          <p className="text-gray-400 text-sm text-center">
            {variant === 'REGISTER' ? 'Cadastre-se e comece a usar': 'Faça login e comece a usar'}
            
          </p>
          <form
            action=""
            className="mt-10 flex flex-col gap-3 "
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            {variant === "REGISTER" && (
              <Input
                ico={<AiOutlineUser />}
                label="Nome de usuario"
                type="text"
                placeholder="Paulo"
                helperText={errors.username?.message}
                {...register("username")}
              />
            )}
            <Input
              ico={<TbMail />}
              label="Endereço de e-mail"
              type="text"
              placeholder="edvan@gmail.com"
              helperText={errors.email?.message}
              {...register("email")}
            />
            <Input
              ico={<AiOutlineUnlock />}
              label="Sua senha"
              type="password"
              placeholder="**********"
              helperText={errors.senha?.message}
              {...register("senha")}
            />

            <div className="text-gray-200 flex gap-2 text-sm items-center">
              <input
                className="form-checkbox appearance-none cursor-pointer  bg-gray-800 checked:hover:bg-gray-700 checked:bg-gray-800 border-none focus:outline-none checked:focus:bg-gray-800 focus:ring-0 focus:border-x-cian-500 focus:ring-offset-0"
                type="checkbox"
              />
              <p>Lembra de mim por 30 dias</p>
            </div>

            <Button type="submit" buttonSize="full" rounded="rounded" text={`${variant === 'REGISTER' ? 'Cadastrar-se' : 'Entrar na plataforma' }`}/>
          </form>
        </div>

        <div className="space-y-4  flex flex-col justify-center items-center text-gray-500 md:w-96  w-4/5">
          {variant === "REGISTER" && (
            <>
              <Divider />
              <Button
                text="Entrar com o google"
                type="submit"
                bg="bg-googleColor"
                ico={<BsGoogle />}
                buttonSize="full"
                rounded="rounded"
              />
            </>
          )}

          {variant != "REGISTER" && (
            <Link href={'/forgotpassword'} className="underline hover:text-gray-400">
              Esqueceu sua senha?
            </Link>
          )}

          <a
            href="#"
            className="underline hover:text-gray-400"
            onClick={() => toogleVariant()}
          >
            {variant === "REGISTER"
              ? "Ja possuo uma conta"
              : "Não possui uma conta? Crie uma agora"}
          </a>
        </div>
      </section>
    </>
  );
}

export default Auth;
