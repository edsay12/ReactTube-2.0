import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

function AddVideo() {
  return (
    <>
      <div className=" mt-5 pr-11  rounded ">
        <div className=" px-5 py-5">
          <div>Adicionar novo video</div>

          <div className="w-full border border-dashed border-collapse rounded-lg mt-5 flex flex-col p-10 items-center justify-center gap-10">
            <div className="text-8xl text-white">
              <BsFillCloudArrowUpFill />
            </div>
            <p>
              Araste e solte ou
              <span className="text-blue-800 hover:opacity-80 cursor-pointer">
                {" "}
                escolha um video{" "}
              </span>
              para fazer upload
            </p>
          </div>

          <div className="mt-5">
            <form
              className="flex flex-col gap-5"
              action="
            "
            >
              <Input type="text" label="Titulo"  />
              <TextArea type="text" label="Descrição"  />
            </form>
          </div>
          <div className="flex py-5 w-full justify-end ">
            <div className=" flex flex-1 gap-5 max-w-xs ">
              <Button
                text="Confirmar"
                rounded="rounded"
                bg="bg-red-600"
              ></Button>
              <Button text="Cancelar" rounded="rounded"></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddVideo;
