import Image from "next/image";
import { useRouter } from "next/router";
import Lupa from "../assets/Lupa.svg";

export default function Footer() {
  const router = useRouter();
  return (
    <footer
      className="py-2 sm:px-10 sm:py-10 
      child:px-2
      grid grid-cols-[1fr_1fr_1fr]
      content-center break-all xxs:break-normal
    bg-bg_footer text-almost_white text-left"
    >
      <div className="pb-3 tracking-wider text-xl xxs:text-2xl">QUEM SOMOS</div>

      <div className="pb-3 tracking-wider text-xl xxs:text-2xl">SUBGEO</div>

      <label
        htmlFor="serachInSite"
        className="pb-3 tracking-wider text-xl xxs:text-2xl"
      >
        BUSCA
      </label>

      <div className="text-sm tracking-wide">SUBGEO © Copyright 2015</div>
      <div className="text-sm tracking-wide">
        Rua Tibiriça, 56 – Brooklin, São Paulo, SP
      </div>
      <div className="text-sm tracking-wide flex flex-wrap xxs:flex-nowrap justify-center align-middle items-center">
        <input
          id="serachInSite"
          type="text"
          className="h-8 w-16 xxs:w-32 sm:w-52 bg-titleServicos"
        />
        <button
          className="bg-titleServicos h-8 w-10 m-1 xxs:w-8 ml-1 flex justify-center items-center"
          onClick={() =>
            router.push(
              {
                pathname: "./Procura",
                query: {
                  palavraProcurada: (document.getElementById(
                    "serachInSite"
                  ) as HTMLInputElement)!.value,
                },
              },
              "./Procura"
            )
          }
        >
          <Image src={Lupa} alt="lupa para procurar" width={10} />
        </button>
      </div>
      <div className="text-sm tracking-wide">
        Comércio e Serviços Técnicos Submarinos Ltda.
      </div>
      <div className="text-sm tracking-wide">
        Fone: +55 11 3714-5686 / 11 99858-2270
      </div>
    </footer>
  );
}
