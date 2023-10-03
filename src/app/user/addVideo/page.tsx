"use client";
import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { render } from "@testing-library/react";

function AddVideo() {
  const [fileName, setFileName] = useState("");
  const onDrop = useCallback((acceptedFiles: FileList) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      console.time("carregando");
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        console.log(render);
        console.timeEnd("carregando");
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
    // Do something with the files
    if (!acceptedFiles[0].name) return;

    setFileName(acceptedFiles[0].name);
    console.log(fileName);
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ onDrop, accept:{
      'video/mp4':['.mp4']
    } });

  // console.log(acceptedFiles[0].name)

  return (
    <>
      <div className=" mt-5 pr-11  rounded ">
        <div className=" px-5 py-5">
          <div>Adicionar novo video</div>
          <form action="" method="GET">
            <div className="">
              <div
                {...getRootProps()}
                className={`
              
              w-full h-64  border border-dashed border-collapse rounded-lg mt-5 max-h-80 flex flex-col p-10 items-center hover:bg-gray-300 justify-center cursor-pointer
              ${isDragActive ? "bg-blue-400" : ""}
              `}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  
                    
                    <p>solte o arquivo aqui</p>
                  
                ) : (
                  <div className="flex gap-10 items-center flex-col">
                    {fileName ? (
                      <div className=" flex h-full w-full bg-white rounded-md text-black gap-5 p-2">
                        <p>{fileName}</p>
                        <button type="button" onClick={()=> setFileName('')}>X</button>

                      </div>
                    ) : (
                      <>
                        <div className="text-8xl text-white">
                          <BsFillCloudArrowUpFill />
                        </div>
                        <p>
                          Araste e solte ou
                          <span className="text-blue-800 hover:opacity-80 cursor-pointer">
                            escolha um video
                          </span>
                          para fazer upload
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5">
              <div className="flex flex-col gap-5">
                <Input name="titulo" type="text" label="Titulo" />
                <TextArea name="descrição" type="text" label="Descrição" />
              </div>
            </div>
            <div className="flex py-5 w-full justify-end ">
              <div className=" flex flex-1 gap-5 max-w-xs ">
                <Button
                  text="Confirmar"
                  rounded="rounded"
                  bg="bg-red-600"
                  type="submit"
                ></Button>
                <Button text="Cancelar" type="reset" rounded="rounded"></Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddVideo;
