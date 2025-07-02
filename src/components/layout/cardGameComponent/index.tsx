import CardComponent from "@/components/ui/cardComponent";
import ProgressBar from "@/components/ui/progressBar";
import { Check, Joystick, Trash2Icon } from "lucide-react";

export default function CardGameComponent() {
  return (
    <div className="w-fit">
      <CardComponent>
        <div className="bg-neutral-600 py-10 px-2 w-48 text-center border border-gray-300">
          <span>Sem Imagem</span>
        </div>

        <div className="flex flex-col mt-2">
          <span>Nome teste</span>
          <div className="flex flex-col gap-2">
            <span className="text-xs flex gap-2 items-center mt-2 text-gray-400">
              Plataforma:
              <span className="text-white">Xbox</span>
            </span>

            <span className="text-xs flex gap-2 items-center text-gray-400">
              Status:
              <span className="px-2 py-1 rounded-full bg-blue-500 text-white">Jogando</span>
            </span>

            <ProgressBar />
            <span className="text-xs flex gap-2 items-center text-gray-400">Progresso:
              <span className="text-white font-bolder">33%</span>
            </span>

            <div className="flex flex-col gap-2">
              <button className="text-xs text-center bg-gradient-to-r from-violet-600 to-purple-400 w-full py-2 rounded-md cursor-pointer flex items-center gap-2 justify-center hover:from-violet-700 hover:to-purple-500">
                <Joystick width={14} /> Ver Detalhes
              </button>

              <button className="text-xs text-center bg-gradient-to-r from-blue-600 to-blue-400 w-full py-2 rounded-md cursor-pointer flex items-center gap-2 justify-center hover:from-blue-700 hover:to-blue-500">
                <Check width={14} />  Marcar como Zerado
              </button>

              <button className="text-xs text-center bg-gradient-to-r from-red-600 to-red-400 w-full py-2 rounded-md cursor-pointer flex items-center gap-2 justify-center hover:from-red-700 hover:to-red-500">
                <Trash2Icon width={14} /> Deletar
              </button>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  )
}