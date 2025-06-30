"use client"

import { CircleUserIcon, House, LogOut, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathName = usePathname();

  return (
    <main style={{ backgroundColor: "var(--sub-background)" }}
      className="bg-subbackground inline-block px-5 py-4 h-screen fixed"
    >
      <div className="-mt-12">
        <Image
          src="/logo.png"
          alt="Gamers codex logo"
          width={150}
          height={50}
          priority
        />
      </div>

      <div className="flex flex-col justify-between h-11/12 -mt-7">
        <div className="flex flex-col gap-4">
          <Link href={'/dashboard/panel'} className={`transition delay-100 duration-150 ease-in-out flex gap-2 items-center px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer
            ${pathName === "/dashboard/panel" ? "bg-purple-700 hover:bg-purple-700" : ""}`}>
            <House size={16} />
            <span className="text-sm">Painel</span>
          </Link>

          <Link href={'/dashboard/searchUsers'} className={`transition delay-100 duration-150 ease-in-out flex gap-2 items-center px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer
            ${pathName === "/dashboard/searchUsers" ? "bg-purple-700 hover:bg-purple-700" : ""}`}>
            <Search size={16} />
            <span className="text-sm">Buscar Usuários</span>
          </Link>

          <Link href={'/dashboard/profile'} className={`transition delay-100 duration-150 ease-in-out flex gap-2 items-center px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer
          ${pathName === "/dashboard/profile" ? "bg-purple-700 hover:bg-purple-700" : ""}`}>
            <User size={16} />
            <span className="text-sm">Meu perfil</span>
          </Link>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-2 justify-center">
            <CircleUserIcon color="#99a1af" size={16} />
            <span className="text-sm text-gray-400 cursor-pointer hover:text-purple-400">Matheus</span>
          </div>

          <div>
            <button className="transition duration-150 ease-in-out flex gap-2 text-sm bg-red-500 w-full py-2 rounded-md cursor-pointer hover:bg-red-600">
              <div className="m-auto flex items-center gap-2">
                <LogOut size={16} />
                Sair
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}