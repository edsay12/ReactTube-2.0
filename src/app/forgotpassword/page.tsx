"use client";
import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaReact } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { z } from "zod";

function ForgotPassword() {
  const schema = z.object({
    email: z.string().email({ message: "O email precisa ser valido" }),
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
          <h1 className="text-2xl text-center text-white mb-3">Esqueceu sua senha ? </h1>
          <p className="text-gray-400 text-sm text-center flex justify-center self-center justify-self-center w-72 ">
            Entre com seu endereço de email para resetar sua senha
          </p>
          <form
            action=""
            className="mt-10 flex flex-col gap-3 "
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Input
              ico={<TbMail />}
              label="Endereço de e-mail"
              type="text"
              placeholder="edvan@gmail.com"
              helperText={errors.email?.message}
              {...register("email")}
            />

            <Button
              type="submit"
              buttonSize="full"
              rounded="rounded"
              text="Enviar"
            />
          </form>
        </div>

        <div className="space-y-4  flex flex-col justify-center items-center text-gray-500 md:w-96  w-4/5">
          <Link href={"/auth"} className="underline hover:text-gray-400">
            Ja possuo uma conta
          </Link>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
