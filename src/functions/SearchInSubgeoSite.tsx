export default function SearchInSubgeoSite(wordSearched: string) {
  const wordsInSite = [
    {
      page: "./",
      title: "Início",
      text: "Realizamos sondagens batimétricas e topobatimétricas com equipamentos de ponta e equipe experiente, adaptando o plano amostral e mobilização à sua demanda e prazo.  A equipe possui experiência teórica e prática no planejamento ecoleta de sedimentos através de dragas, pegadores e testemunhadores, utilizando técnicas desenvolvidas internamente.O Side-scan sonar permite a identificação de feições e objetos. A Equipe Subgeo já utilizou essa ferramenta no mapeamento de naufrágios, descrição de habitats e arqueologia. Utilizamos equipamentos e softwares de ponta na medição de correntes em corpos d’água. A correntometria é realizada por ADCP e correntógrafos em fundeios ou medições pontuais. SONDAGENS E MONITORAMENTOS AMBIENTAIS CRIANDO SOLUÇÕES À SUA DEMANDA A SUBGEO, desde 10011, presta serviços ambientais e técnicos nas áreas de oceanografia e limnologia, possuindo entre seus clientes universidades e empresas de engenharia ambiental. Realizamos levantamentos hidrográficos, investigações geofísicas e oceanográficas, monitoramento de água e sedimento, além de mergulho especializado. Nossos serviços são realizados em ambientes marinhos, rios, represas e outros reservatórios. Nossa equipe conta com profissionais e consultores de diversas áreas para, assim, atingir a integração de cientistas, oceanógrafos, geólogos, engenheiros, biólogos para melhor atendê-los, de forma segura, eficaz e econômica. A SUBGEO também está presente no mercado de venda de equipamentos oceanográficos, náuticos e mergulho, apresentando a solução certa para sua necessidade.",
    },
    {
      page: "./Servicos",
      title: "Serviços",
      text: "Serviços A SUBGEO oferece uma linha completa de serviços de amostragem voltada para as áreas oceanográfica e ambiental. Realizamos mapeamentos geofísicos, serviços especializados de mergulho, coleta e monitoramento de sedimento e água, além de lançamento e recuperação de fundeios. Para maiores informações e orçamentos, por gentileza, entre em contato com nossos especialistas. GEOFÍSICA Batimetria (Mar, Estuários, Rios, Reservatórios, ETEs) Sonar de varredura lateral (Side Scan Sonar) Sísmica de alta resolução (Sub-Bottom Profiler) COLETA DE SEDIMENTO Pegador Van-veen Box corer Testemunhagem OCEANOGRAFIA Monitoramento ambiental Correntometria Medição de Ondas e Marés Estudos de vazão e circulação Amostragem de organismos bentônicos Amostragem de plâncton Lançamento e Recuperação de Fundeios MERGULHO Amostragem de sedimento com Diver corer Busca e recuperação de equipamentos Inspeção de estruturas Foto subaquática Filmagem subaquática Apoio à arqueologia submarina ANÁLISES LABORATORIAIS Análise granulométrica Determinação de carbono orgânico total",
    },
    {
      page: "./Equipamentos",
      title: "Equipamentos",
      text: "Equipamentos A SUBGEO comercializa equipamentos para oceanografia, limnilogia e mergulho. Nós oferecemos equipamentos para qualquer ambiente aquático, sempre buscando o melhor custo-beneficio e praticidade para sua coleta de água, sedimento ou plâncton. Entre em contato com nossa equipe para maiores informações e orçamentos. EQUIPAMENTOS OCEANOGRÁFICOS Garrafas de Van Dorn Disco de Secchi Redes de Plâncton Draga do tipo Van Veen Draga do tipo Petersen Testemunhador – Piston Corer Testemunhador – Gravity Corer Boxcorer EQUIPAMENTOS DE MERGULHO Cilindros Compressores Reguladores Coletes Roupas de Mergulho Máscaras Nadadeiras Acessórios apra Mergulho Facas Lanternas",
    },
    { page: "./Clientes", title: "Clientes", text: "Clientes" },
    {
      page: "./Contato",
      title: "Contato",
      text: "Contato Nome Seu email Sua mensagem ENVIAR FONE: +55 11 3714-5686 +55 11 3714-5686 ",
    },
  ];

  let palavrasAchadas: Array<object> = [];
  let indexPalavra = 0;

  for (let index = 0; index < wordsInSite.length; index++) {
    indexPalavra = wordsInSite[index].text.toLowerCase().search(wordSearched);
    if (indexPalavra > 0) {
      indexPalavra - 100 <= 0 && (indexPalavra = 100);
      palavrasAchadas.push({
        page: wordsInSite[index].page,
        title: wordsInSite[index].title,
        text: wordsInSite[index].text.slice(
          indexPalavra - 100,
          indexPalavra + 100
        ),
      });
    }
  }

  return palavrasAchadas;
}
