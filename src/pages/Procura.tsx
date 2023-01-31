import Footer from "@/components/Footer";
import HeaderNav from "@/components/HearderNav";
import SearchInSubgeoSite from "@/functions/SearchInSubgeoSite";
import { useRouter } from "next/router";

export default function Procura() {
  const router = useRouter();

  const searchPassedByQuerry: string = router.query.palavraProcurada as string;
  const pagesAndTextWithWordSearched = SearchInSubgeoSite(searchPassedByQuerry);

  return (
    <main>
      <HeaderNav />
      <div className="border-t-[14px] border-gray-800 pt-10"></div>
      <h1
        className="text-3xl leading-7 xxs:text-5xl text-titleServicos font-extralight xxs:leading-[60px] font-openSans
         mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem]
        "
      >
        Resultado da busca
      </h1>
      <nav className="flex align-middle text-xs mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem] pb-5">
        <button
          className=" hover:border-b border-black"
          onClick={() => router.push("./")}
        >
          Início
        </button>
        <div> &#8811;</div>
        <div className=" font-bold">PROCURA</div>
      </nav>
      <div
        className="flex flex-col align-top mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem] text-titleServicos text-xs
        border-b border-lines_breaks pb-10 mb-10 
        justify-center md:justify-start
        child:w-full gap-4
      "
      >
        {pagesAndTextWithWordSearched.map((pagina: any, key) => {
          return (
            <div
              key={key.toString()}
              className="flex flex-col gap-2 text-titleServicos font-openSans
            pt-4
            border-t border-lines_breaks"
            >
              <h2 className="text-2xl leading-6">{pagina.title}</h2>
              <div className="text-xs">{pagina.text}...</div>
              <button
                className="bg-titleServicos p-[1px_10px] text-almost_white rounded 
                w-24
                "
                onClick={() => router.push(`./${pagina.page}`)}
              >
                Saiba mais
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
