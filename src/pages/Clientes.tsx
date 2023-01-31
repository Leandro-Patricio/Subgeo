import Footer from "@/components/Footer";
import HeaderNav from "@/components/HearderNav";
import Image from "next/image";
import { useRouter } from "next/router";

import BeGengenharia from "../assets/clientes/BeGengenharia.svg";
import FOSengenharia from "../assets/clientes/FOSengenharia.svg";
import FRAL from "../assets/clientes/FRAL.svg";
import GERDAU from "../assets/clientes/GERDAU.svg";
import InstitutoDeBotanica from "../assets/clientes/InstitutoDeBotanica.svg";
import IOUsp from "../assets/clientes/IOUsp.svg";
import Lampazul from "../assets/clientes/Lampazul.svg";
import Laquimar from "../assets/clientes/Laquimar.svg";
import oqeisso from "../assets/clientes/oqeisso.svg";
import Sigeo from "../assets/clientes/Sigeo.svg";
import Tetratech from "../assets/clientes/Tetratech.svg";
import UniverdidadeFederalDePermambuco from "../assets/clientes/UniverdidadeFederalDePermambuco.svg";
import UniversidadeDoPara from "../assets/clientes/UniversidadeDoPara.svg";
import UniversidadeFederalDoEspiritoSanto from "../assets/clientes/UniversidadeFederalDoEspiritoSanto.svg";
import CPTI from "../assets/clientes/CPTI.svg";
import InstitutoDeGeociencias from "../assets/clientes/InstitutoDeGeociencias.svg";
import DTAengenharia from "../assets/clientes/DTAengenharia.svg";

export default function Clientes() {
  const router = useRouter();
  const imagensDeClientes = [
    Tetratech,
    BeGengenharia,
    IOUsp,
    Laquimar,
    InstitutoDeBotanica,
    UniverdidadeFederalDePermambuco,
    UniversidadeFederalDoEspiritoSanto,
    InstitutoDeGeociencias,
    Sigeo,
    Lampazul,
    CPTI,
    DTAengenharia,
    FOSengenharia,
    GERDAU,
    UniversidadeDoPara,
    oqeisso,
    FRAL,
  ];
  return (
    <main>
      <HeaderNav />
      <div className="border-t-[14px] border-gray-800 pt-10"></div>
      <div className="flex flex-col gap-5 pb-5  mx-4 lg:mx-[10rem]  break-all xxs:break-normal ">
        <h1 className="text-3xl leading-7 xxs:text-5xl text-titleServicos font-extralight xxs:leading-[60px] font-openSans        ">
          CLIENTES
        </h1>
        <nav className="flex align-middle text-xs">
          <button
            className=" hover:border-b border-black"
            onClick={() => router.push("./")}
          >
            Início
          </button>
          <div> &#8811;</div>
          <div className=" font-bold">Clientes</div>
        </nav>
      </div>
      <div
        className=" grid grid-cols-2 sm:grid-cols-3
      gap-2 mx-1 xxs:mx-4 lg:mx-[10rem]  pb-5
      content-center  
      child:place-self-center
      [&>*:nth-child(1)]:place-self-end
      [&>*:nth-child(3n+1)]:place-self-end
      [&>*:nth-child(3n)]:place-self-start
      "
      >
        {imagensDeClientes.map((imagem, key) => {
          return (
            <div
              className="rounded border border-blue-800 p-2 
              h-20 xxs:h-20 sm:w-32 sm:h-32 
            flex justify-center"
            >
              <Image src={imagem} alt="imagem de cliente" width={500} />
            </div>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
