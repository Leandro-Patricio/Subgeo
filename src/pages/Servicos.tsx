import BtnParaContato from "@/components/BtnParaContato";
import Footer from "@/components/Footer";
import HeaderNav from "@/components/HearderNav";
import { useRouter } from "next/router";

export default function Servicos() {
  const router = useRouter();
  return (
    <main>
      <HeaderNav />
      <div className="border-t-[14px] border-gray-800 pt-10"></div>
      <div className="flex flex-col gap-5 pb-5  mx-4 sm:mx-[3rem] break-normal lg:mx-[10rem]">
        <h1
          className="text-3xl leading-7 xxs:text-5xl text-titleServicos font-extralight xxs:leading-[60px] font-openSans
        "
        >
          SERVIÇOS
        </h1>
        <nav className="flex align-middle text-xs">
          <button
            className=" hover:border-b border-black"
            onClick={() => router.push("./")}
          >
            Início
          </button>
          <div> &#8811;</div>
          <div className=" font-bold">Serviços</div>
        </nav>
        <p className="text-base ">
          A SUBGEO oferece uma linha completa de serviços de amostragem voltada
          para as áreas oceanográfica e ambiental. Realizamos mapeamentos
          geofísicos, serviços especializados de mergulho, coleta e
          monitoramento de sedimento e água, além de lançamento e recuperação de
          fundeios. Para maiores informações e orçamentos, por gentileza, entre
          em contato com nossos especialistas.
        </p>
        <div
          className="flex flex-col xxs:grid xxs:grid-cols-[1fr_1fr] place-content-center 
        child:py-6 child:border-b border-lines_breaks
        "
        >
          <div className="text-start">
            <h2 className="text-xl sm:text-3xl pb-3 text-titleServicos  tracking-wide font-openSans">
              GEOFÍSICA
            </h2>
            <ul className="text-xs list-disc pl-8">
              <li>Batimetria (Mar, Estuários, Rios, Reservatórios, ETEs)</li>
              <li>Sonar de varredura lateral (Side Scan Sonar)</li>
              <li>Sísmica de alta resolução (Sub-Bottom Profiler)</li>
            </ul>
          </div>
          <div className="text-start">
            <h2 className="text-xl sm:text-3xl pb-3 text-titleServicos  tracking-wide font-openSans">
              COLETA DE SEDIMENTO
            </h2>
            <ul className="text-xs list-disc pl-8">
              <li>Pegador Van-veen</li>
              <li>Box corer</li>
              <li>Testemunhagem</li>
            </ul>
          </div>
          <div className="text-start">
            <h2 className="text-xl sm:text-3xl pb-3 text-titleServicos  tracking-wide font-openSans">
              OCEANOGRAFIA
            </h2>
            <ul className="text-xs list-disc pl-8">
              <li>Monitoramento ambiental</li>
              <li>Correntometria</li>
              <li>Medição de Ondas e Marés</li>
              <li>Estudos de vazão e circulação</li>
              <li>Amostragem de organismos bentônicos</li>
              <li>Amostragem de plâncton</li>
              <li>Lançamento e Recuperação de Fundeios</li>
            </ul>
          </div>
          <div className="text-start">
            <h2 className="text-xl sm:text-3xl pb-3 text-titleServicos  tracking-wide font-openSans">
              MERGULHO
            </h2>
            <ul className="text-xs list-disc pl-8">
              <li>Amostragem de sedimento com Diver corer</li>
              <li>Busca e recuperação de equipamentos</li>
              <li>Inspeção de estruturas</li>
              <li>Foto subaquática</li>
              <li>Filmagem subaquática</li>
              <li>Apoio à arqueologia submarina</li>
            </ul>
          </div>
          <div className="text-start">
            <h2 className="text-xl sm:text-3xl pb-3 text-titleServicos  tracking-wide font-openSans">
              ANÁLISES LABORATORIAIS
            </h2>
            <ul className="text-xs list-disc pl-8">
              <li>Análise granulométrica</li>
              <li>Determinação de carbono orgânico total</li>
            </ul>
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
