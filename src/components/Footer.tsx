import Image from "next/image";
import { useRouter } from "next/router";
import Lupa from "../assets/Lupa.svg";

export default function Footer() {
  const date = new Date();

  const router = useRouter();
  return (
    <footer
      className="py-2 px-10 sm:py-10 
      child:px-2
      flex flex-col  items-start gap-4 xxs:grid xxs:grid-cols-[1fr_1fr_1fr]
      content-center break-normal
    bg-bg_footer text-almost_white text-left"
    >
      <div className="tracking-wider text-xl xxs:text-2xl">
        QUEM SOMOS
        <div className="text-sm tracking-wide">
          SUBGEO © Copyright {date.getFullYear()}
        </div>
        <div className="text-sm tracking-wide">
          Comércio e Serviços Técnicos Submarinos Ltda.
        </div>
      </div>

      <div className="tracking-wider text-xl xxs:text-2xl">
        SUBGEO
        <div className="text-sm tracking-wide">
          Rua Tibiriça, 56 – Brooklin, São Paulo, SP
        </div>
        <div className="text-sm tracking-wide">
          Fone: +55 11 3714-5686 / 11 99858-2270
        </div>
      </div>

      <label
        htmlFor="serachInSite"
        className="pb-3 tracking-wider text-xl xxs:text-2xl"
      >
        BUSCA
        <div className="text-sm tracking-wide flex justify-start align-middle items-center">
          <input
            id="serachInSite"
            type="text"
            className="h-8 w-[70%] sm:w-52 bg-titleServicos"
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
          </button>{" "}
        </div>
      </label>
    </footer>
  );
}
