"use client";
import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaReact } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { z } from "zod";
import { AiOutlineUnlock } from "react-icons/ai";
function ForgotPassword() {
  const schema = z
    .object({
      senha: z
        .string()
        .min(5, { message: "A senha deve conter no minimo 5 caracters" }),
      confirmSenha: z.string(),
    })
    .refine((fields) => fields.senha === fields.confirmSenha, {
      // faz oque esta ai se for false
      // faz uma especie de validação
      path: ["confirmSenha"],
      message: "As senhas precisam ser iguais",
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
      senha: "",
      confirmSenha: "",
    },
  });

  const handleFormSubmit = (data: formProps) => {
    console.log(data);
  };

  return (
    <>
      <section className="w-screen h-screen flex  flex-col items-center justify-center ">
        <div className=" md:w-96 w-4/5 flex flex-col">
          <div className="text-7xl text-cian-800 w-full flex justify-center mb-4">
            <FaReact />
          </div>
          <h1 className="text-2xl text-center text-white mb-3">ReactTube</h1>
          <p className="text-gray-400 text-sm text-center flex justify-center self-center justify-self-center w-72 ">
            Resetar senha
          </p>
          <form
            action=""
            className="mt-10 flex flex-col gap-3 "
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Input
              ico={<AiOutlineUnlock />}
              label="Nova senha"
              type="password"
              placeholder="**********"
              helperText={errors.senha?.message}
              {...register("senha")}
            />

            <Input
              ico={<AiOutlineUnlock />}
              label="Confirmar senha"
              type="password"
              placeholder="**********"
              helperText={errors.confirmSenha?.message}
              {...register("confirmSenha")}
            />

            <Button
              type="submit"
              buttonSize="full"
              rounded="rounded"
              text="Confirmar"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
