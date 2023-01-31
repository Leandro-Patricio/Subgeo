import Footer from "@/components/Footer";
import HeaderNav from "@/components/HearderNav";
import copiarTexto from "@/functions/CopiarTexto";
import Image from "next/image";
import { useRouter } from "next/router";

import Copy from "../assets/Copy.svg";

export default function Contato() {
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
        CONTATO
      </h1>
      <nav className="flex align-middle text-xs mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem] pb-5">
        <button
          className=" hover:border-b border-black"
          onClick={() => router.push("./")}
        >
          Início
        </button>
        <div> &#8811;</div>
        <div className=" font-bold">Contato</div>
      </nav>
      <div
        className="flex align-top mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem] text-titleServicos text-xs
        border-b border-lines_breaks pb-10 mb-10 
        justify-center md:justify-start
        child:w-full 
      "
      >
        <form
          action="https://formsubmit.co/leandro27patricio@gmail.com"
          method="POST"
          className="flex flex-col items-start gap-1 "
        >
          <label htmlFor="Nome">Nome</label>
          <input
            className="w-[90%] mb-1 pl-2 h-7 border border-gray-400"
            placeholder="Digite o seu nome completo "
            id="Nome"
            type="text"
            name="name"
            required
          />
          <label htmlFor="Email">Seu email</label>
          <input
            className="w-[90%] mb-1 pl-2 h-7  border border-gray-400"
            placeholder="seuEmail@email.com"
            id="Email"
            type="email"
            name="email"
            required
          />
          <label htmlFor="Mensagem">Sua mensagem</label>
          <input
            className="w-[90%] mb-1 pl-2  h-32 border border-gray-400"
            placeholder="O que deseja nos perguntar?"
            id="Mensagem"
            type="text"
            name="mensagem"
            required
          />
          <input
            type="hidden"
            name="_next"
            value="https://subgeo-original-leandro-patricio.vercel.app/Obrigado"
          />
          <input type="hidden" name="_subject" value={`Novo email Subgeo}`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table"></input>
          <input type="hidden" name="_autoresponse" value="resposta" />

          <button
            type="submit"
            className="bg-slate-900 text-almost_white flex justify-center align-middle rounded p-[4px_10px] tracking-wider"
          >
            ENVIAR
          </button>
        </form>
        <div className="flex flex-col justify-start gap-4">
          <h2 className="font-openSans text-titleServicos text-3xl ">FONE:</h2>
          <div
            onClick={(e) => copiarTexto(e.currentTarget.innerText)}
            className="cursor-pointer font-openSans text-titleServicos text-base sm:text-2xl "
          >
            +55 11 3714-5686
            <Image
              className="ml-2 inline-block"
              src={Copy}
              alt="clique para copiar o numero"
              width={20}
            />
          </div>
          <div
            onClick={(e) => copiarTexto(e.currentTarget.innerText)}
            className="cursor-pointer font-openSans text-titleServicos text-base sm:text-2xl "
          >
            +55 11 3714-5686
            <Image
              className="ml-2  inline-block"
              src={Copy}
              alt="clique para copiar o numero"
              width={20}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
