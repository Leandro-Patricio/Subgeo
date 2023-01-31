import BtnParaContato from "@/components/BtnParaContato";
import Footer from "@/components/Footer";
import HeaderNav from "@/components/HearderNav";
import { useRouter } from "next/router";

export default function Equipamentos() {
  const router = useRouter();
  return (
    <main>
      <HeaderNav />
      <div className="border-t-[14px] border-gray-800 pt-10"></div>
      <div className="flex flex-col gap-5 pb-5  mx-4 lg:mx-[10rem] break-normal ">
        <h1 className="text-3xl leading-7 xxs:text-5xl text-titleServicos font-extralight xxs:leading-[60px] font-openSans        ">
          EQUIPAMENTOS
        </h1>
        <nav className="flex align-middle text-xs">
          <button
            className=" hover:border-b border-black"
            onClick={() => router.push("./")}
          >
            Início
          </button>
          <div> &#8811;</div>
          <div className=" font-bold">Equipamentos</div>
        </nav>
        <p className="text-base ">
          A SUBGEO comercializa equipamentos para oceanografia, limnilogia e
          mergulho. Nós oferecemos equipamentos para qualquer ambiente aquático,
          sempre buscando o melhor custo-beneficio e praticidade para sua coleta
          de água, sedimento ou plâncton. Entre em contato com nossa equipe para
          maiores informações e orçamentos.
        </p>
        <div
          className="place-content-center 
        child:py-6 child:border-b border-lines_breaks
        "
        >
          <div className="text-start">
            <h2
              className="text-xl sm:text-3xl pb-3 text-titleServicos  tracking-wide font-openSans
              "
            >
              EQUIPAMENTOS OCEANOGRÁFICOS
            </h2>
            <div className="flex flex-col xxs:grid xxs:grid-cols-2">
              <ul className="col-span-1 text-xs list-disc pl-4 xxs:pl-8">
                <li>Garrafas de Van Dorn</li>
                <li>Disco de Secchi</li>
                <li>Redes de Plâncton</li>
                <li>Draga do tipo Van Veen</li>
              </ul>
              <ul className="col-span-1 text-xs list-disc pl-4 xxs:pl-8">
                <li>Draga do tipo Petersen</li>
                <li>Testemunhador – Piston Corer</li>
                <li>Testemunhador – Gravity Corer</li>
                <li>Boxcorer</li>
              </ul>
            </div>
          </div>
          <div className="text-start">
            <h2 className="text-xl sm:text-3xl pb-3 text-titleServicos  tracking-wide font-openSans">
              EQUIPAMENTOS DE MERGULHO
            </h2>
            <div className="flex flex-col xxs:grid xxs:grid-cols-2">
              <ul className="col-span-1 text-xs list-disc pl-4 xxs:pl-8">
                <li>Cilindros</li>
                <li>Compressores</li>
                <li>Reguladores</li>
                <li>Coletes</li>
                <li>Roupas de Mergulho</li>
              </ul>
              <ul className="col-span-1 text-xs list-disc pl-4 xxs:pl-8">
                <li>Máscaras</li>
                <li>Nadadeiras</li>
                <li>Acessórios apra Mergulho</li>
                <li>Facas</li>
                <li>Lanternas</li>
              </ul>
            </div>
          </div>

          <div className="flex h-fit justify-center ">
            <BtnParaContato texto="Solicite um orçamento" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
