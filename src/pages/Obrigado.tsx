import Footer from "@/components/Footer";
import HeaderNav from "@/components/HearderNav";
import { useRouter } from "next/router";

import Copy from "../assets/Copy.svg";

export default function Obrigado() {
  const router = useRouter();

  return (
    <main>
      <HeaderNav />
      <div className="border-t-[14px] border-gray-800 pt-10"></div>
      <h1
        className="text-3xl leading-7 xxs:text-5xl text-titleServicos font-extralight xxs:leading-[60px] font-openSans
         mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem]
        "
      >
        AGRADECEMOS PELO CONTATO
      </h1>
      <nav className="flex align-middle text-xs mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem] pb-5">
        <button
          className=" hover:border-b border-black"
          onClick={() => router.push("./")}
        >
          Início
        </button>
        <div> &#8811;</div>
        <div className=" font-bold">Agradecemos pelo contato</div>
      </nav>
      <div className="mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem] text-2xl pb-20">
        EM BREVE NOSSA EQUIPE ENTRARÁ EM CONTATO!
      </div>

      <Footer />
    </main>
  );
}
