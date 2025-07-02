import CardComponent from "@/components/ui/cardComponent";
import InputField from "@/components/ui/inputField";
import MainCard from "@/components/ui/mainCard";
import { CheckCircle, Trophy, Upload } from "lucide-react";
import Image from "next/image";

export default function panelPage() {
  return (
    <MainCard>
      <div>
        <div className="flex flex-col gap-8">
          <div className=" px-4 pb-4 rounded-xl" style={{
            background:
              `radial-gradient(circle at left top, rgba(94, 30, 243, 0.9) 0%, transparent 50%),` +
              `radial-gradient(circle at right bottom, rgba(251, 0, 126, 0.3) 0%, transparent 50%)`,
          }}>
            <div className="flex justify-between items-center">
              <h1 className="text-4xl w-72 font-extrabold bg-gradient-to-r from-purple-600 to-pink-300 bg-clip-text text-transparent">Dashboard do Jogador</h1>

              <div>
                <Image
                  src="/logo.png"
                  alt="Gamers codex logo"
                  width={150}
                  height={100}
                  priority
                />
              </div>
            </div>

            <span className="text-gray-300 ">
              Gerencie seus jogos, conquistas e progresso com facilidade.
            </span>

            <div className="mt-4 flex gap-4">
              <span className="flex gap-2 bg-gray-700 w-fit text-xs items-center rounded-full px-2 py-1">
                <Trophy width={16} color="#fbe605" />
                Total de Jogos: <span>1</span>
              </span>

              <span className="flex gap-2 bg-gray-700 w-fit text-xs items-center rounded-full px-2 py-1">
                <CheckCircle width={16} color="#05fb70" />
                Zerados: <span>1</span>
              </span>
            </div>
          </div>

          <CardComponent >
            <h2>Adicionar Novo Jogo</h2>

            <div className="my-4 flex justify-around">
              <div className="flex gap-4">
                <InputField placeholder="Titulo do jogo" type="text" />
                <InputField placeholder="Plataforma (Ex: PC, Xbox)" type="text" />
              </div>

              <div>
                <button className="bg-purple-700 flex items-center gap-2 p-2 rounded-2xl cursor-pointer hover:bg-purple-800">
                  <Upload width={14} />
                  Imagem do jogo
                </button>
              </div>
            </div>

            <button className="bg-green-600 w-full rounded-xl py-2 mt-2 cursor-pointer hover:bg-green-700">+ Adicionar Jogo</button>
          </CardComponent>
        </div>
      </div>
    </MainCard>
  )
}