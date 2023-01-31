import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "../assets/Logo.svg";

export default function HeaderNav() {
  const router = useRouter();
  return (
    <nav
      className="flex flex-col sm:flex-row justify-around items-start 
    
    sm:items-center  mt-7 mx-5 "
    >
      <button onClick={() => router.push("./")} className="mb-5 sm:mb-0">
        <Image
          src={Logo}
          alt="Subgeo Logo"
          height={90}
          className="min-w-[100px]"
        />
      </button>
      <div className="text-xxs sm:text-base child:tracking-widest flex gap-3 sm:gap-5 justify-center flex-wrap">
        <button onClick={() => router.push("./")}>INÍCIO</button>
        <button onClick={() => router.push("./Servicos")}>SERVIÇOS</button>
        <button onClick={() => router.push("./Equipamentos")}>
          EQUIPAMENTOS
        </button>
        <button onClick={() => router.push("./Clientes")}>CLIENTES</button>
        <button onClick={() => router.push("./Contato")}>CONTATO</button>
      </div>
    </nav>
  );
}
