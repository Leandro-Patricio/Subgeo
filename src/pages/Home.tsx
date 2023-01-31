import HeaderNav from "@/components/HearderNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";

import Vanveen from "../assets/Vanveen.svg";
import ShipEcosond from "../assets/ShipEcosond.svg";
import Waves from "../assets/Waves.svg";
import Ecosond from "../assets/Ecosond.svg";
import ServicosSubgeo1 from "../assets/ServicosSubgeo1.svg";
import ServicosSubgeo2 from "../assets/ServicosSubgeo2.svg";
import ServicosSubgeo3 from "../assets/ServicosSubgeo3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { useEffect } from "react";
import BtnParaContato from "@/components/BtnParaContato";

export default function Home() {
  useEffect(() => {
    console.log(document.body.innerText);
  });
  const router = useRouter();
  const worksDone = [
    {
      tipo: "ShipEcosond",
      img: ShipEcosond,
      descricao: (
        <div className="break-all xxs:break-normal ">
          Realizamos <b> sondagens batimétricas </b> e topobatimétricas com
          equipamentos de ponta e equipe experiente, adaptando o plano amostral
          e mobilização à sua demanda e prazo.
        </div>
      ),
    },
    {
      tipo: "Vanveen",
      img: Vanveen,
      descricao: (
        <div className="break-all xxs:break-normal">
          A equipe possui experiência teórica e prática no planejamento e
          <b>coleta de sedimentos</b> através de dragas, pegadores e
          testemunhadores, utilizando técnicas desenvolvidas internamente.
        </div>
      ),
    },
    {
      tipo: "Ecosond",
      img: Ecosond,
      descricao: (
        <div className="break-all xxs:break-normal">
          O <b>Side-scan sonar</b> permite a identificação de feições e objetos.
          A Equipe Subgeo já utilizou essa ferramenta no mapeamento de
          naufrágios, descrição de habitats e arqueologia.
        </div>
      ),
    },
    {
      tipo: "Waves",
      img: Waves,
      descricao: (
        <div className="break-all xxs:break-normal">
          Utilizamos equipamentos e softwares de ponta na medição de correntes
          em corpos d’água. A <b>correntometria</b> é realizada por ADCP e
          correntógrafos em fundeios ou medições pontuais.
        </div>
      ),
    },
  ];

  return (
    <main className="text-center">
      <HeaderNav />
      <div className="pt-5 pb-10">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={ServicosSubgeo1}
              alt="Serviços oferecidos pela SubGeo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ServicosSubgeo2}
              alt="Serviços oferecidos pela SubGeo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ServicosSubgeo3}
              alt="Serviços oferecidos pela SubGeo"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="flex flex-col sm:flex-row justify-around pb-10
        mx-4 lg:mx-[10rem] gap-5 border-b border-lines_breaks "
      >
        {worksDone.map((work, key) => {
          return (
            <div
              id={work.tipo}
              key={work.tipo}
              className="flex flex-col items-center text-sm leading-5 gap-3 text-justify "
            >
              <Image width={70} src={work.img} alt={`${work.tipo} image`} />

              {work.descricao}
            </div>
          );
        })}
      </div>

      <h1 className="sm:mt-12 mb-2 lg:mx-[10rem] break-all xxs:break-normal text-title font-bold text-2xl sm:text-[2.5rem] tracking-tight">
        SONDAGENS E MONITORAMENTOS AMBIENTAIS
      </h1>
      <h2
        className="lg:mx-[10rem] sm:mb-12 text-subTitle font-bold text-xl sm:text-4xl first-letter:
      "
      >
        CRIANDO SOLUÇÕES À SUA DEMANDA
      </h2>
      <div
        className="text-xs tracking-tight mx-4 lg:mx-[10rem] text-justify flex flex-col gap-5 
      border-t border-b border-lines_breaks py-12
      "
      >
        <p>
          A SUBGEO, desde 2011, presta serviços ambientais e técnicos nas áreas
          de oceanografia e limnologia, possuindo entre seus clientes
          universidades e empresas de engenharia ambiental. Realizamos
          levantamentos hidrográficos, investigações geofísicas e
          oceanográficas, monitoramento de água e sedimento, além de mergulho
          especializado. Nossos serviços são realizados em ambientes marinhos,
          rios, represas e outros reservatórios.
        </p>
        <p>
          Nossa equipe conta com profissionais e consultores de diversas áreas
          para, assim, atingir a integração de cientistas, oceanógrafos,
          geólogos, engenheiros, biólogos para melhor atendê-los, de forma
          segura, eficaz e econômica.
        </p>
        <p>
          A SUBGEO também está presente no mercado de venda de equipamentos
          oceanográficos, náuticos e mergulho, apresentando a solução certa para
          sua necessidade.
        </p>
      </div>
      <div className="flex justify-end py-10 px-5 sm:pr-10 sm:pl-0 lg:mx-[10rem]">
        <BtnParaContato texto="Fale agora com um dos nossos especialistas" />
      </div>
      <Footer />
    </main>
  );
}
