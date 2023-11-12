import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function VideosSeed() {
  for (let index = 0; index < videos.length; index++) {
    await prisma.topic.create({
      data: {
        name: videos[index].name,
        videos: {
          create: videos[index].videos.map((element) => {
            return {
              description: element.description,
              time: element.time,
              url: element.url,
            };
          }),
        },
      },
    });
  }
}

const videos = [
  {
    name: "MANUAL PRÁCTICO GANADERO",
    videos: [
      {
        description: "ORGULLO GANADERO",
        time: "06:17:00",
        url: "https://www.youtube.com/watch?v=l1woL_jJxOQ&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=2",
      },
      {
        description: "SOSTENIBILIDAD AMBIENTAL",
        time: "10:57:00",
        url: "https://www.youtube.com/watch?v=CPBCqwHPuDI&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=3",
      },
      {
        description: "BIENESTAR ANIMAL",
        time: "06:57:00",
        url: "https://www.youtube.com/watch?v=hTNlNIfotfA&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=4",
      },
      {
        description: "CULTURA SANITARIA",
        time: "06:44:00",
        url: "https://www.youtube.com/watch?v=IezRUDO0Vdw&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=5",
      },
      {
        description: "ENCADENAMIENTO LÁCTEO",
        time: "07:20:00",
        url: "https://www.youtube.com/watch?v=pQlatsxlYYs&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=6",
      },
      {
        description: "CONCEPTO DE CADENA: CARNE",
        time: "07:05:00",
        url: "https://www.youtube.com/watch?v=NFHxK4hj6xQ&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=7",
      },
      {
        description: "GESTIÓN DEL CONOCIMIENTO",
        time: "06:50:00",
        url: "https://www.youtube.com/watch?v=x47G28XtDbk&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=8",
      },
      {
        description: "ALIMENTACIÓN ANIMAL",
        time: "03:32:00",
        url: "https://www.youtube.com/watch?v=GHJgPHhDL6I&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=9",
      },
      {
        description: "ESPECIES FORRAJERAS, GRAMINEAS Y LEGUMINOSAS",
        time: "05:47:00",
        url: "https://www.youtube.com/watch?v=8JiYswXGLxM&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=10",
      },
      {
        description: "ESTABLECIMIENTO DE PASTURAS MEJORADAS",
        time: "07:28:00",
        url: "https://www.youtube.com/watch?v=dEOPO_TmByI&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=11",
      },
      {
        description: "ANALISIS DE SUELO",
        time: "09:28:00",
        url: "https://www.youtube.com/watch?v=5ZuWAHHWmDE&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=12",
      },
      {
        description: "PREPARACIÓN DEL TERRENO",
        time: "05:41:00",
        url: "https://www.youtube.com/watch?v=qmCfxXSGTvY&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=13",
      },
      {
        description: "LABRANZA MINIMA",
        time: "06:06:00",
        url: "https://www.youtube.com/watch?v=jLvLMXIQLXI&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=14",
      },
      {
        description: "ALIMENTACIÓN ANIMAL SIEMBRA",
        time: "06:37:00",
        url: "https://www.youtube.com/watch?v=5OOl_S-qQFc&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=15",
      },
      {
        description: "MANEJO DE LA PRADERA",
        time: "05:04:00",
        url: "https://www.youtube.com/watch?v=vd-CHJod2Ek&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=16",
      },
      {
        description: "DIVISIÒN DE POTREROS",
        time: "09:19:00",
        url: "https://www.youtube.com/watch?v=4dA1XcOahZ0&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=17",
      },
      {
        description: "CARGA ANIMAL",
        time: "05:46:00",
        url: "https://www.youtube.com/watch?v=Sh8jRUFF6UI&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=19",
      },
      {
        description: "DIVISIÓN Y MODELOS DE PASTOREO",
        time: "09:55:00",
        url: "https://www.youtube.com/watch?v=ralfjzg843I&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=20",
      },
      {
        description: "PASTOS DE CORTE",
        time: "06:59:00",
        url: "https://www.youtube.com/watch?v=JRI18l9PGiw&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=21",
      },
      {
        description: "SISTEMAS SILVOPASTORILES",
        time: "09:44:00",
        url: "https://www.youtube.com/watch?v=Wp5qbTODkuQ&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=22",
      },
      {
        description:
          "DISEÑOS Y CARACTERISTICAS DE LOS SISTEMAS SILVOPASTORILES",
        time: "09:52:00",
        url: "https://www.youtube.com/watch?v=111r1K9diuY&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=23",
      },
      {
        description: "CONTROL DE PLAGAS Y ENFERMEDADES",
        time: "07:40:00",
        url: "https://www.youtube.com/watch?v=xKFhfYGpW0k&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=24",
      },
      {
        description: "CONTROL DE MALEZAS",
        time: "10:53:00",
        url: "https://www.youtube.com/watch?v=6rXizRRytH8&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=25",
      },
      {
        description: "FERTILIZACIÒN",
        time: "11:57:00",
        url: "https://www.youtube.com/watch?v=dKdh6MIblyo&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=26",
      },
      {
        description: "HENIFICACIÓN",
        time: "08:06:00",
        url: "https://www.youtube.com/watch?v=mPNUC5fnc10&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=27",
      },
      {
        description: "ENSILAJE",
        time: "12:06:00",
        url: "https://www.youtube.com/watch?v=YOKJF7jqYZA&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=28",
      },
      {
        description: "HENOLAJE",
        time: "08:17:00",
        url: "https://www.youtube.com/watch?v=nW14j6sV8mg&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=29",
      },
      {
        description: "CONSERVACIÓN DE FORREJES",
        time: "05:39:00",
        url: "https://www.youtube.com/watch?v=Gatw11Ya1XU&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=30",
      },
      {
        description: "SUPLEMENTACIÓN DE GANADO DE LECHE",
        time: "17:13:00",
        url: "https://www.youtube.com/watch?v=h06NrwythOM&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=31",
      },
      {
        description: "SUPLEMENTACIÓN DE GANADO DE CARNE",
        time: "09:29:00",
        url: "https://www.youtube.com/watch?v=4wLM-3ldhn4&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=32",
      },
      {
        description: "PLANIFICACIÓN FORRAJERA",
        time: "09:15:00",
        url: "https://www.youtube.com/watch?v=NTInNPga31g&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=33",
      },
      {
        description: "FIEBRE AFTOSA",
        time: "13:13:00",
        url: "https://www.youtube.com/watch?v=hXfHfzhw64o&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=34",
      },
      {
        description: "BRUCELOSIS BOVINA",
        time: "12:37:00",
        url: "https://www.youtube.com/watch?v=sCdzISzRnhc&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=35",
      },
      {
        description: "RABIA BOVINA",
        time: "09:49:00",
        url: "https://www.youtube.com/watch?v=2SBSP5nv2xM&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=36",
      },
      {
        description: "TUBERCULOSIS BOVINA",
        time: "08:19:00",
        url: "https://www.youtube.com/watch?v=8487unbdtMM&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=37",
      },
      {
        description: "ENFERMEDADES REPRODUCTIVAS",
        time: "18:08:00",
        url: "https://www.youtube.com/watch?v=1GcUerXgx4I&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=38",
      },
      {
        description: "PARÁSITOS INTERNOS",
        time: "15:32:00",
        url: "https://www.youtube.com/watch?v=a2HcU-BpVUM&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=39",
      },
      {
        description: "PARÁSITOS EXTERNOS",
        time: "14:05:00",
        url: "https://www.youtube.com/watch?v=cGFMmmlMOTo&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=40",
      },
      {
        description: "OTRAS ENFERMEDADES BOVINAS",
        time: "16:04:00",
        url: "https://www.youtube.com/watch?v=76UbWIa99rI&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=41",
      },
      {
        description: "MASTITIS BOVINA",
        time: "08:55:00",
        url: "https://www.youtube.com/watch?v=80wFlFmpVPY&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=42",
      },
      {
        description: "GENERALIDADES DEL ANIMAL ENFERMO",
        time: "08:46:00",
        url: "https://www.youtube.com/watch?v=kjrVMOFZprg&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=43",
      },
      {
        description: "MEJORAMIENTO GENETICO",
        time: "09:08:00",
        url: "https://www.youtube.com/watch?v=GbK38_0XpTo&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=53",
      },
      {
        description: "INSEMINACIÓN ARTIFICIAL",
        time: "09:07:00",
        url: "https://www.youtube.com/watch?v=Tt2D7Ls0XBM&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=60",
      },
      {
        description: "TRANSFERENCIAS DE EMBRIONES",
        time: "11:02:00",
        url: "https://www.youtube.com/watch?v=mzREQkz6QRY&list=PLwld9ll-9xWuRyA2PDIhwLgKYU_hhzmQm&index=62",
      },
    ],
  },
  {
    name: "ACELGA",
    videos: [
      {
        description: "COMO SEMBRAR ACELGA",
        time: "09:29:00",
        url: "https://www.youtube.com/watch?v=DMna9Lscz6w",
      },
      {
        description: "SEMILLEROS DE ACELGA",
        time: "10:00:00",
        url: "https://www.youtube.com/watch?v=5NhzZ9z8q4g",
      },
      {
        description: "REQUERIMIENTOS DE CULTIVO DE ACELGA",
        time: "04:13:00",
        url: "https://www.youtube.com/watch?v=N-FFJBlhWho",
      },
      {
        description: "TRANSPLANTE DE ACELGA",
        time: "16:13:00",
        url: "https://www.youtube.com/watch?v=P-_frfHjork",
      },
    ],
  },
  {
    name: "AHUYAMA",
    videos: [
      {
        description: "CULTIVO DE AHUYAMA",
        time: "06:01:00",
        url: "https://www.youtube.com/watch?v=_3BHTZnO-w8",
      },
      {
        description: "SEMILLERO DE AHUYAMA",
        time: "03:56:00",
        url: "https://www.youtube.com/watch?v=ZJAsZsIrfBw",
      },
    ],
  },
  {
    name: "AJI TOPITO DULCE",
    videos: [
      {
        description: "EL CULTIVO DEL AJÍ DULCE Y DEL AJÍ TOPITO",
        time: "1900-01-01 04:47:00",
        url: "https://www.youtube.com/watch?v=TSZKZYKl4YQ&ab_channel=Agro-tecnologia-tropical",
      },
    ],
  },
  {
    name: "AJO",
    videos: [
      {
        description:
          "CARACTERÍSTICAS DEL MANEJO TÉCNICO Y SOSTENIBLE DEL CULTIVO DE AJO",
        time: "08:33:00",
        url: "https://www.youtube.com/watch?v=X2frzHKecU4&ab_channel=TvAgro",
      },
      {
        description: "CULTIVOS DE AJOS, DESDE LA SIEMBRA HASTA LA COSECHA",
        time: "11:14:00",
        url: "https://www.youtube.com/watch?v=zIV0f0nC9V0&ab_channel=LaHuertinaDeToni",
      },
    ],
  },
  {
    name: "APIO",
    videos: [
      {
        description: "APIO, MANEJO DEL CULTIVO",
        time: "02:15:00",
        url: "https://www.youtube.com/watch?v=cY_T-Q-qO7Y&ab_channel=TradecorpM%C3%A9xico",
      },
      {
        description: "CULTIVO DE APIO Y SUS VARIEDADES",
        time: "16:34:00",
        url: "https://www.youtube.com/watch?v=WRP-7zQWRuQ&pp=ygUUYXBpbyBjdWx0aXZvIFRWIEFHUk8%3D",
      },
    ],
  },
  {
    name: "ARVEJA ",
    videos: [
      {
        description: "CULTIVO DE ARVEJA, GUISANTE O CHICHAROS",
        time: "21:43:00",
        url: "https://www.youtube.com/watch?v=wdxtMZAGsC8&pp=ygUUYXJ2ZWphIHZlcmRlIGN1bHRpdm8%3D",
      },
      {
        description: "PARAMETROS PARA EL ESTABLECIMIENTO DE CULTIVO  DE ARVEJA",
        time: "04:28:00",
        url: "https://www.youtube.com/watch?v=d2h9cV00_Zw&pp=ygUUYXJ2ZWphIHZlcmRlIGN1bHRpdm8%3D",
      },
    ],
  },
  {
    name: "BERENJENA",
    videos: [
      {
        description: "MANEJO AGRONÓMICO DEL CULTIVO DE BERENJENA",
        time: "04:14:00",
        url: "https://www.youtube.com/watch?v=jIIPx3DqYGI&ab_channel=LaFincadeHoy",
      },
      {
        description:
          "APRENDA CÓMO PUEDE ESTABLECER CORRECTAMENTE UN CULTIVO DE BERENJENA ",
        time: "11:36:00",
        url: "https://www.youtube.com/watch?v=qBu0wvtC5YE&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "BROCOLI",
    videos: [
      {
        description: "CONDICIONES APROPIADAS PARA CULTIVAS BRÓCOLI",
        time: "2.47",
        url: "https://www.youtube.com/watch?v=F003uqap1is&ab_channel=TvAgro",
      },
      {
        description: "MANEJO ADECUADO DE LA COSECHA EN CULTIVOS DE BRÓCOLI",
        time: "03:52:00",
        url: "https://www.youtube.com/watch?v=gf05b4Od8Oo&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "CALABACIN",
    videos: [
      {
        description: "¡CÓMO PRODUCIR 16KG DE CALABACÍN POR METRO CUADRADO!",
        time: "04:26:00",
        url: "https://www.youtube.com/watch?v=WM8ALuqWCys&ab_channel=Kultiva",
      },
      {
        description:
          "COMO CULTIVAR CALABACITA O CALABACÍN DESDE LA SIEMBRA HASTA LA COSECHA",
        time: "14:57:00",
        url: "https://www.youtube.com/watch?v=Bp3NaYB4Xxo&ab_channel=LaHuertinaDeToni",
      },
    ],
  },
  {
    name: "CALABAZA",
    videos: [
      {
        description: "CUÁLES ES LA CALABAZA BLANCA COLOMBIANA",
        time: "07:02:00",
        url: "https://www.youtube.com/watch?v=rDwbotbXtMw&ab_channel=DoctorCalabaza",
      },
    ],
  },
  {
    name: "CEBOLLA CABEZONA BLANCA",
    videos: [
      {
        description: "CULTIVO DE CEBOLLA DESARROLLO DE LA CEBOLLA",
        time: "11:27:00",
        url: "https://youtube.com/watch?v=UPu19VNTa74&ab_channel=TISBITA",
      },
      {
        description: "TÉCNICAS PARA SEMBRAR CEBOLLA",
        time: "03:52:00",
        url: "https://www.youtube.com/watch?v=MxTN40zrd5I&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "CEBOLLA CABEZONA ROJA",
    videos: [
      {
        description: "CULTIVO DE CEBOLLA ROJA",
        time: "07:08:00",
        url: "https://www.youtube.com/watch?v=YY9GZYgoX_w&ab_channel=TuProfeTV",
      },
      {
        description: "CARACTERISTICAS DEL CULTIVO DE CEBOLLA",
        time: "15:34:00",
        url: "https://www.youtube.com/watch?v=gyEXJbtfF0g&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "CEBOLLA JUNCA",
    videos: [
      {
        description: "ENEMIGOS DEL CULTIVO DE CEBOLLA JUNCA",
        time: "04:09:00",
        url: "https://www.youtube.com/watch?v=14SoA5xRKu4&ab_channel=LaFincadeHoy",
      },
      {
        description:
          "CEBOLLA BLANCA LARGA O CEBOLLA JUNCA, ASÍ ES CÓMO SEMBRAR O PLANTAR",
        time: "15:43:00",
        url: "https://www.youtube.com/watch?v=QPpxUn1yIwI&ab_channel=LuisCaizaAndrango%28VIDAYAVENTURA%29",
      },
    ],
  },
  {
    name: "CEBOLLA PUERRO",
    videos: [
      {
        description: "CULTIVO DE PUERRO ,BUEN MANEJO CULTIVO EXITOSO",
        time: "1900-01-01 03:35:00",
        url: "https://www.youtube.com/watch?v=iNYdAhT4Tik&ab_channel=Sembrandovidachile",
      },
      {
        description:
          "𝗣𝗨𝗘𝗥𝗥𝗢: EL CULTIVO COMPLETO, COMO PRODUCIR PUERROS EN CASA",
        time: "07:49:00",
        url: "https://www.youtube.com/watch?v=g_gN4FpkEIc&pp=ygUZY3VsdGl2byBkZSBDRUJPTExBIFBVRVJSTw%3D%3D&ab_channel=ElHuertoFamiliar",
      },
    ],
  },
  {
    name: "CEBOLLIN CHINO",
    videos: [
      {
        description: 'AGRORIENTE "CEBOLLÍN" ',
        time: "1900-01-01 06:53:00",
        url: "https://www.youtube.com/watch?v=T2VzhcWeUs0&ab_channel=JugoDeNaranja",
      },
      {
        description: "EL CEBOLLINO: EL CULTIVO COMPLETO DEL CEBOLLINO.",
        time: "10:17:00",
        url: "https://www.youtube.com/watch?v=cVEBokC79fE&ab_channel=ElHuertoFamiliar",
      },
    ],
  },
  {
    name: "MAIZ",
    videos: [
      {
        description: "CULTIVO DEL MAIZ O CHOCLO COMPLETO",
        time: "10:09:00",
        url: "https://www.youtube.com/watch?v=M4nxEjnb5T4&ab_channel=Huerto%26EntretenimientoconWillRD",
      },
      {
        description: "ETAPAS PARA LA SIEMBRA DE MAÍZ",
        time: "01:06:00",
        url: "https://www.youtube.com/watch?v=Rhtw5LW2gfQ&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "CIDRA",
    videos: [
      {
        description: " SEMBRADO CIDRA",
        time: "06:18:00",
        url: "https://www.youtube.com/watch?v=Ku6vLhIIB54&ab_channel=SenderoAgroEcologicoLoBolos",
      },
    ],
  },
  {
    name: "CILANTRO",
    videos: [
      {
        description:
          "PASO A PASO: UN AGRICULTOR ENSEÑA CÓMO SEMBRAR CILANTRO CORRECTAMENTE",
        time: "10:31:00",
        url: "https://www.youtube.com/watch?v=3rudz9CjHCA&ab_channel=LaFincadeHoy",
      },
      {
        description: "CULTIVO DE CILANTRO: PLAGAS Y ENFERMEDADES",
        time: "06:25:00",
        url: "https://www.youtube.com/watch?v=cuKHoMfr5-k&ab_channel=SembrandounPa%C3%Ads",
      },
    ],
  },
  {
    name: "COLES",
    videos: [
      {
        description: "COL: COMO CULTIVAR FÁCILMENTE COLES. CULTIVO COMPLETO",
        time: "09:15:00",
        url: "https://www.youtube.com/watch?v=Ib0ApENuWEs&ab_channel=ElHuertoFamiliar",
      },
      {
        description: "CULTIVO DE COLES DE BRUSELAS EN CAMPO ABIERTO",
        time: "08:49:00",
        url: "https://www.youtube.com/watch?v=TFRvWaslG48&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "COLIFLOR",
    videos: [
      {
        description: "CULTIVO DE BROCOLI Y COLIFLOR",
        time: "19:14:00",
        url: "https://youtu.be/zk8jMlvO4NI?si=hYXi5pS2SN8Zga8T",
      },
      {
        description: "COMO PLANTAR COLIFLOR EN EL HUERTO",
        time: "07:39:00",
        url: "https://youtu.be/Hs_bgXchLX4?si=m5p7ZW85zAfKFmlK",
      },
    ],
  },
  {
    name: "ESPINACA",
    videos: [
      {
        description: "PREPARACIÓN DEL SUELO PARA EL CULTIVO DE ESPINACA",
        time: "01:18:00",
        url: "https://www.youtube.com/watch?v=nCLE7z8_-H0&ab_channel=TvAgro",
      },
      {
        description: "PRODUCCIÓN DE ESPINACA EN SABANA",
        time: "22:36:00",
        url: "https://www.youtube.com/watch?v=UE70wSx-bTc&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "FRÍJOL VERDE BOLO",
    videos: [
      {
        description: "AGRICULTURA AL DÍA / ASÍ ES UN CULTIVO DE FRÍJOL",
        time: "04:34:00",
        url: "https://www.youtube.com/watch?v=uH04pQR13yo&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
      {
        description:
          "AGRICULTURA AL DÍA - CÓMO SEMBRAR FRÍJOL Y EN QUÉ CONDICIONES",
        time: "03:37:00",
        url: "https://www.youtube.com/watch?v=w-fCdm_e_m8&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
    ],
  },
  {
    name: "FRIJOL VERDE CARGAMANTO",
    videos: [
      {
        description: "CÓMO SABES COSECHAR EL FRIJOL VERDE CARGAMANTO",
        time: "11:20:00",
        url: "https://www.youtube.com/watch?v=vEocE5sIALA&ab_channel=mir%C3%A1elcampo",
      },
      {
        description: "CULTIVO DE FRIJOL CARGAMANTO",
        time: "09:44:00",
        url: "https://www.youtube.com/watch?v=jvUXHID8MhI&ab_channel=secretosdelcampo",
      },
    ],
  },
  {
    name: "GUATILA",
    videos: [
      {
        description:
          "CÓMO PREPARAR Y PLANTAR CORRECTAMENTE EL CHAYOTE O PAPA DEL AIRE SECHIUM EDULE GUATILA CIDRA CHUCHU",
        time: "06:44:00",
        url: "https://www.youtube.com/watch?v=mA5LrXi3vec&ab_channel=Abel",
      },
      {
        description: "CULTIVO DE CHAYOTES (SIDRA O PAPA DE AIRE)",
        time: "1900-01-01 05:35:00",
        url: "https://www.youtube.com/watch?v=CQlPqhC_sQU&ab_channel=ELTERREGALDERAY",
      },
    ],
  },
  {
    name: "HABAS",
    videos: [
      {
        description: "CULTIVO DE HABAS Y CUBIOS",
        time: "12:28:00",
        url: "https://www.youtube.com/watch?v=2_bpqtFhJ9E&ab_channel=TvAgro",
      },
      {
        description:
          "𝗛𝗔𝗕𝗔𝗦: COMO PLANTAR HABAS. GROWING BEANS. CULTIVO COMPLETO.",
        time: "08:53:00",
        url: "https://www.youtube.com/watch?v=Op53EcO9kXE&ab_channel=ElHuertoFamiliar",
      },
    ],
  },
  {
    name: "HABICHUELA",
    videos: [
      {
        description: "EL CULTIVO DE LA HABICHUELA",
        time: "10:02:00",
        url: "https://www.youtube.com/watch?v=dpCw7sRk3B8&ab_channel=Mimundoenelcampo",
      },
      {
        description: "CÓMO SE CULTIVA LA HABICHUELA",
        time: "03:45:00",
        url: "https://www.youtube.com/watch?v=75YinYV54HE&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "HABICHUELA LARGA",
    videos: [
      {
        description:
          "CONOZCA EL PASO A PASO PARA SEMBRAR CORRECTAMENTE LA HABICHUELA LARGA CRIOLLA",
        time: "10:49:00",
        url: "https://www.youtube.com/watch?v=1njcUKcx8ms&ab_channel=LaFincadeHoy",
      },
      {
        description: "CULTIVO DE HABICHUELA",
        time: "02:10:00",
        url: "https://www.youtube.com/watch?v=sumuW1BJrtE&ab_channel=ErickBravo",
      },
    ],
  },
  {
    name: "LECHUGA BATAVIA",
    videos: [
      {
        description: "POTENCIAL DE LA LECHUGA BATAVIA",
        time: "05:11:00",
        url: "https://www.youtube.com/watch?v=hnFkWGYfne0&ab_channel=LaFincadeHoy",
      },
      {
        description:
          "CÓMO SEMBRAR LECHUGA BATAVIA PASO A PASO EN LA HUERTA CASERA",
        time: "23:37:00",
        url: "https://www.youtube.com/watch?v=CEicmVBOLiw&ab_channel=ProyectoCultivosUrbanos",
      },
    ],
  },
  {
    name: "LECHUGA CRESPA VERDE",
    videos: [
      {
        description: "RECOMENDACIONES PARA EL CULTIVO ÓPTIMO DE LECHUGA",
        time: "04:05:00",
        url: "https://www.youtube.com/watch?v=rBfnHJa6Ooc&ab_channel=TvAgro",
      },
      {
        description: "GENERALIDADES DEL CULTIVO DE LECHUGA",
        time: "14:22:00",
        url: "https://www.youtube.com/watch?v=LHQfwTslp-U&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PEPINO COHOMBRO",
    videos: [
      {
        description: "CARACTERISTICAS DEL CULTIVO DE PEPINO",
        time: "1900-01-01 00:05:00",
        url: "https://www.youtube.com/watch?v=Pmizn8MCPaQ&ab_channel=TvAgro",
      },
      {
        description: "CUIDADOS Y MANEJOS DEL CULTIVO DE PEPINO",
        time: "07:29:00",
        url: "https://www.youtube.com/watch?v=zV5v1YqyLmw&ab_channel=SembrandounPa%C3%ADs",
      },
    ],
  },
  {
    name: "PEPINO DE RELLENAR",
    videos: [
      {
        description: "CULTIVO DE PEPINO DE RELLENAR O CAIGUA",
        time: "11:13:00",
        url: "https://www.youtube.com/watch?v=QsZXb7zE8MQ&ab_channel=ProyectoCultivosUrbanos",
      },
      {
        description:
          "CULTIVO PASO A PASO DE LA CAIGUA (SIEMBRA Y COSECHA) PEPINO DE RELLENAR",
        time: "06:05:00",
        url: "https://www.youtube.com/watch?v=jPFekCbGJsY&ab_channel=ProyectoCultivosUrbanos",
      },
    ],
  },
  {
    name: "PEREJIL",
    videos: [
      {
        description: "PEREJIL: EL CULTIVO COMPLETO DEL PEREJIL EN CASA",
        time: "04:59:00",
        url: "https://www.youtube.com/watch?v=aoOgVCkS6Do&ab_channel=ElHuertoFamiliar",
      },
      {
        description: "ANTES DE PLANTAR PEREJIL TIENES QUE VER ESTO",
        time: "10:05:00",
        url: "https://www.youtube.com/watch?v=aij3N7QI5SU&ab_channel=LaHuertadeIv%C3%A1n",
      },
    ],
  },
  {
    name: "PIMENTON",
    videos: [
      {
        description: "COMO SE DESARROLLA LA PRODUCCION DEL PIMENTON",
        time: "19:34:00",
        url: "https://www.youtube.com/watch?v=nS0t9vr-1Ck&ab_channel=TvAgro",
      },
      {
        description:
          "CULTIVO DE PIMENTÓN FINCA EL TESORO - CAMPO - MUNDO DEL CAMPO",
        time: "1900-01-01 18:22:00",
        url: "https://www.youtube.com/watch?v=0xEq3XYOhas&ab_channel=ElMundodelCampo",
      },
    ],
  },
  {
    name: "PIMENTON VERDE",
    videos: [
      {
        description: "CULTIVO DE CHILE VERDE (PIMIENTO) EN PRODUCCIÓN",
        time: "10:07:00",
        url: "https://www.youtube.com/watch?v=DMFK6FUk-ao&ab_channel=ELCAMPOPLUS",
      },
    ],
  },
  {
    name: " RABANO ROJO",
    videos: [
      {
        description: "COMO SEMBRAR RÁBANOS LA HORTALIZA MAS FACIL QUE EXISTE",
        time: "07:34:00",
        url: "https://www.youtube.com/watch?v=pXbpk11Ujyo&ab_channel=ElHuertoDeUnCitadino",
      },
    ],
  },
  {
    name: "RABANO ROJO",
    videos: [
      {
        description: "EL CULTIVO COMPLETO DEL RÁBANO EN EL HUERTO FAMILIAR",
        time: "06:03:00",
        url: "https://www.youtube.com/watch?v=x3b6Q_XyxsA&ab_channel=ElHuertoFamiliar",
      },
    ],
  },
  {
    name: "REMOLACHA",
    videos: [
      {
        description: "COMO SEMBRAR REMOLACHA EN EL HUERTO FÁCIL",
        time: "08:19:00",
        url: "https://www.youtube.com/watch?v=ZkS1QO8R5B8&ab_channel=LaHuertinaDeToni",
      },
      {
        description: "CÓMO SEMBRAR REMOLACHA",
        time: "14:54:00",
        url: "https://www.youtube.com/watch?v=vU_ed2o6-zs&ab_channel=LAHUERTADELPROFE-CIELOVERDE",
      },
    ],
  },
  {
    name: "REPOLLO BLANCO",
    videos: [
      {
        description: "CULTIVO DE REPOLLO / COMO CULTIVAR REPOLLO",
        time: "12:26:00",
        url: "https://www.youtube.com/watch?v=cAw6KsTPDiE&ab_channel=CampoYagricultura",
      },
      {
        description:
          "CULTIVO DE REPOLLO, FASE DE TRASPLANTE Y PRIMEROS CUIDADOS EN EL CAMPO",
        time: "04:38:00",
        url: "https://www.youtube.com/watch?v=HSWvLlKbc5o&ab_channel=SembrandounPa%C3%ADs",
      },
    ],
  },
  {
    name: "REPOLLO MORADO",
    videos: [
      {
        description: "SEMBRANDO REPOLLO MORADO",
        time: "06:59:00",
        url: "https://www.youtube.com/watch?v=eFpCGoooOFE&ab_channel=VENTECUIDO",
      },
      {
        description: "NO FALLES AL CULTIVAR (COL MORADA) O REPOLLO MUY FÁCIL",
        time: "04:13:00",
        url: "https://www.youtube.com/watch?v=2zTk5A0NNKg&ab_channel=TuHuertaJard%C3%ADn",
      },
    ],
  },
  {
    name: "TOMATE CHONTO",
    videos: [
      {
        description: "AGRICULTURA AL DÍA / ASÍ SE SIEMBRA TOMATE CHONTO",
        time: "04:06:00",
        url: "https://www.youtube.com/watch?v=LxYiizrbJjc&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
      {
        description: "CULTIVO DE TOMATE CHONTO EN INVERNADERO ",
        time: "22:45:00",
        url: "https://www.youtube.com/watch?v=Je8KsdtZO94&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "TOMATE LARGA VIDA",
    videos: [
      {
        description: "TOMATE LARGA VIDA Y CHONTO",
        time: "02:53:00",
        url: "https://www.youtube.com/watch?v=MTA84npSg4g&ab_channel=cultivandoelcampocultivandoelcampo",
      },
    ],
  },
  {
    name: "TOMATE RIÑON",
    videos: [
      {
        description:
          "IMBABURA, DESPENSA DE TOMATE RIÑÓN PARA ECUADOR Y SUR DE COLOMBIA",
        time: "02:13:00",
        url: "https://www.youtube.com/watch?v=PnAkHxoYiAI&ab_channel=JWAsociados",
      },
    ],
  },
  {
    name: "TOMATE RIÑON ",
    videos: [
      {
        description:
          "CULTIVO DE TOMATE RIÑÓN EN INVERNADERO - LEVANTAMIENTO DE INFORMACIÓN PRODUCTIVA EN CAMPO",
        time: "01:57:00",
        url: "https://www.youtube.com/watch?v=FYtd1i5zQzI&ab_channel=SistemadeInformaci%C3%B3nP%C3%BAblicaAgropecuaria-SIPA",
      },
    ],
  },
  {
    name: "ZANAHORIA",
    videos: [
      {
        description: "OBTENER RENTABILIDAD CON EL CULTIVO DE ZANAHORIA",
        time: "1900-01-01 00:12:00",
        url: "https://www.youtube.com/watch?v=etlzX6shO2c&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ZANAHORIA ",
    videos: [
      {
        description: "AGRICULTURA AL DÍA / ASÍ ES UN CULTIVO DE ZANAHORIA",
        time: "4.07",
        url: "https://www.youtube.com/watch?v=otJkZBa9fZc&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
    ],
  },
  {
    name: "AGRAZ",
    videos: [
      {
        description: "AGRICULTURA AL DÍA / ASÍ ES UN CULTIVO DE AGRAZ",
        time: "03:46:00",
        url: "https://www.youtube.com/watch?v=xo--teLFE_Q&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
      {
        description: "AGRAZ SILVESTRE O MORTIÑO, CÓMO SE COSECHA",
        time: "06:01:00",
        url: "https://www.youtube.com/watch?v=Z0kaDQylvVA&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "AGUACATE COMUN",
    videos: [
      {
        description: "CÓMO CULTIVAR AGUACATE",
        time: "12:26:00",
        url: "https://www.youtube.com/watch?v=f9uWwciFWOg&ab_channel=TvAgro",
      },
      {
        description:
          "CULTIVO DE AGUACATE: ESTABLECIMIENTO, CUIDADOS Y PRODUCCION",
        time: "1900-01-01 01:49:00",
        url: "https://www.youtube.com/watch?v=maDawN9FNR4&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "AGUACATE HASS",
    videos: [
      {
        description: "CÓMO ES EL PROCESO DE CULTIVO DEL AGUACATE HASS",
        time: "1900-01-01 04:48:00",
        url: "https://www.youtube.com/watch?v=xY7H2Se9DB0&ab_channel=TvAgro",
      },
      {
        description:
          "PROCESO DE CULTIVO, FERTILIZACIÓN Y COSECHA DEL AGUACATE HASS ",
        time: "06:52:00",
        url: "https://www.youtube.com/watch?v=2Ii8V-XWxhw&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "AGUACATE PAPELILLO",
    videos: [
      {
        description:
          "MANEJO INTEGRADO DEL CULTIVO DE AGUACATE LORENA O PAPELILLO",
        time: "10:09:00",
        url: "https://www.youtube.com/watch?v=jehkB9hnWh8&ab_channel=TvAgro",
      },
      {
        description: "ASÍ SE CULTIVA EL AGUACATE PAPELILLO EN COLOMBIA.",
        time: "1900-01-01 01:26:00",
        url: "https://www.youtube.com/watch?v=hJn-hOvBQH4&ab_channel=AlterVenturas",
      },
    ],
  },
  {
    name: "ANON",
    videos: [
      {
        description:
          "ANONA. CÓMO GERMINAR, POLINIZAR, COSECHAR Y TENER EN MACETA",
        time: "11:41:00",
        url: "https://www.youtube.com/watch?v=IZ2TOej-pKU&ab_channel=ElHuertoEnTuCasa",
      },
      {
        description: "EL ANON - FRUTAS EXÓTICAS.",
        time: "03:40:00",
        url: "https://www.youtube.com/watch?v=tPe6p0a9Pe8&ab_channel=ELIASRIVERAHERNANDEZ",
      },
    ],
  },
  {
    name: "ARANDANOS",
    videos: [
      {
        description: "CULTIVO TECNIFICADO DE ARÁNDANOS EN COLOMBIA",
        time: "07:38:00",
        url: "https://www.youtube.com/watch?v=AYrwW5Mp9WE&ab_channel=TvAgro",
      },
      {
        description: "LO QUE TIENES QUE SABER SOBRE EL CULTIVO DE ARÁNDANOS",
        time: "13:19:00",
        url: "https://www.youtube.com/watch?v=OKI_VNsWimo&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ARAZA",
    videos: [
      {
        description: "CÓMO CULTIVAR ARAZÁ",
        time: "06:05:00",
        url: "https://www.youtube.com/watch?v=jb23a3TlaEQ&ab_channel=TvAgro",
      },
      {
        description:
          "AGRICULTURA AL DÍA - PRODUCCIÓN DE ARAZÁ EN LA PALMA, CUND.",
        time: "04:04:00",
        url: "https://www.youtube.com/watch?v=-0a3nWDRrYM&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
    ],
  },
  {
    name: "BADEA",
    videos: [
      {
        description: "ASÍ CULTIVAN LA BADEA EN CHOCÓ ",
        time: "04:14:00",
        url: "https://www.youtube.com/watch?v=PDe3KgzLSxs&ab_channel=LaFincadeHoy",
      },
      {
        description: "BADEA CULTIVO",
        time: "21:46:00",
        url: "https://www.youtube.com/watch?v=c0IvTmDi_gA&ab_channel=FelipeBermudez",
      },
    ],
  },
  {
    name: "BANANO BOCADILLO",
    videos: [
      {
        description:
          "CULTIVO DE BANANO BOCADILLO O MURRAPO CON BUENAS PRÁCTICAS",
        time: "20:30:00",
        url: "https://www.youtube.com/watch?v=Mk8MEq9nX0U&ab_channel=TvAgro",
      },
      {
        description: "EXPORTACIÓN DE BANANO BOCADILLO (BABY BANANA)",
        time: "03:04:00",
        url: "https://www.youtube.com/watch?v=qaHRebP7jtk&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "BANANO CRIOLLO",
    videos: [
      {
        description: "CARACTERISTICAS DE LA PRODUCCIÓN DE BANANO CRIOLLO",
        time: "23:59:00",
        url: "https://www.youtube.com/watch?v=6U5n1FzUs_I&t=266s&ab_channel=TvAgro",
      },
      {
        description:
          "COMO PRODUCIR EL CULTIVO DE BANANO EN NUESTRA VEREDA CAMELLÓN",
        time: "17:03:00",
        url: "https://www.youtube.com/watch?v=K7AdljP7ccM&ab_channel=FACETASDEMIPATRIA",
      },
    ],
  },
  {
    name: "BANANO URABA ",
    videos: [
      {
        description:
          "ANTIOQUIA DE COLORES - PRODUCCIÓN DE PLÁTANO Y BANANO EN URABÁ",
        time: "1900-01-02 03:03:00",
        url: "https://www.youtube.com/watch?v=gEBEPXmtJ7A&ab_channel=Gobernaci%C3%B3ndeAntioquia",
      },
      {
        description: "CENTRO DE DESTREZAS DE BANANO Y PLÁTANO DE URABÁ",
        time: "01:31:00",
        url: "https://www.youtube.com/watch?v=TO5hmcErMsw&ab_channel=Unib%C3%A1nFundaci%C3%B3n",
      },
    ],
  },
  {
    name: "BOROJO",
    videos: [
      {
        description: "REQUERIMIENTOS DEL CULTIVO DE BOROJÓ | LA FINCA DE HOY",
        time: "04:38:00",
        url: "https://www.youtube.com/watch?v=dZHiUhZh4Po&ab_channel=LaFincadeHoy",
      },
      {
        description: "VALOR AGREGADO Y CULTIVO DEL BOROJÓ",
        time: "04:30:00",
        url: "https://www.youtube.com/watch?v=gzkkIjfXZ3g&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "BREVA",
    videos: [
      {
        description:
          "CÓMO PLANTAR HIGUERA POR ESQUEJE - CÓMO CULTIVAR BREVAS COLOMBIANAS",
        time: "05:09:00",
        url: "https://www.youtube.com/watch?v=ciLlZhhT5NE&ab_channel=ProyectoCultivosUrbanos",
      },
    ],
  },
  {
    name: "CIRUELA",
    videos: [
      {
        description:
          "IMPORTANCIA Y BENEFICIOS DEL CULTIVO DE CIRUELA- TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:21:00",
        url: "https://www.youtube.com/watch?v=d--Js579NiY&ab_channel=TvAgro",
      },
      {
        description:
          "CONSEJOS PARA CULTIVAR CIRUELAS CURSO BÁSICO DE FRUTICULTURA 2020: CAPÍTULO 5",
        time: "06:11:00",
        url: "https://www.youtube.com/watch?v=mNfQgsfT1pc&ab_channel=LaderasdelNaranco-Fruticultura%26Jardiner%C3%ADa",
      },
    ],
  },
  {
    name: "COCO",
    videos: [
      {
        description: "EXIGENCIAS Y REQUERIMIENTOS DEL CULTIVO DE COCO",
        time: "04:20:00",
        url: "https://www.youtube.com/watch?v=TzwRRQ1_0nw&ab_channel=LaFincadeHoy",
      },
      {
        description: "ASI ES EL CULTIVO DE COCO EN COLOMBIA",
        time: "21.19",
        url: "https://www.youtube.com/watch?v=pcx_WaB1nl4&ab_channel=AlterVenturas",
      },
    ],
  },
  {
    name: "CURUBA",
    videos: [
      {
        description: "PRODUCCIÓN DE CURUBA CRIOLLA - LA FINCA DE HOY",
        time: "04:27:00",
        url: "https://www.youtube.com/watch?v=Z9RGPq4wEDk&ab_channel=LaFincadeHoy",
      },
      {
        description: "ASÍ SE SACA LA CURUBA DESDE EL CULTIVO",
        time: "12:08:00",
        url: "https://www.youtube.com/watch?v=X3I58Spk0Ik&ab_channel=ElBambis",
      },
    ],
  },
  {
    name: "CHIRIMOYA",
    videos: [
      {
        description: "APRENDE TODO SOBRE LAS CHIRIMOYAS",
        time: "03:10:00",
        url: "https://www.youtube.com/watch?v=WQ4qOcdbFRU&ab_channel=JardinUrbano",
      },
      {
        description: "ANDALUCÍA ES LÍDER EN EL CULTIVO DE LA CHIRIMOYA",
        time: "6.44",
        url: "https://www.youtube.com/watch?v=gtCcY0Bhu9o&ab_channel=CuadernoAgrario",
      },
    ],
  },
  {
    name: "DURAZNO NACIONAL",
    videos: [
      {
        description:
          "COMO ES UN CULTIVO DE DURAZNOS - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:45:00",
        url: "https://www.youtube.com/watch?v=GZq_-33TaJw&ab_channel=TvAgro",
      },
      {
        description:
          "CÓMO CULTIVAR DURAZNO O MELOCOTÓN - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:18:00",
        url: "https://www.youtube.com/watch?v=a-VENLTdZ8E&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "FEIJOA",
    videos: [
      {
        description:
          "ORIGEN Y CULTIVO DE LA FEIJOA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "06:09:00",
        url: "https://www.youtube.com/watch?v=tafOJhpYEmg&ab_channel=TvAgro",
      },
      {
        description:
          "CULTIVO DE FEIJOA, LA FRUTA DE LA ETERNA JUVENTUD - TVAGRO POR JUAN GONZALO ANGEL",
        time: "03:50:00",
        url: "https://www.youtube.com/watch?v=a12J1mtkl7Y&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "FRAMBUESA",
    videos: [
      {
        description:
          "CÓMO CULTIVAR FRAMBUESAS - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "1900-01-01 04:20:00",
        url: "https://www.youtube.com/watch?v=C8w0ocxQWqc&ab_channel=TvAgro",
      },
      {
        description: "FRAMBUESAS HERITAGE Y FALL GOLD - LA FINCA DE HOY",
        time: "05:07:00",
        url: "https://www.youtube.com/watch?v=H-U1a4FuQdY&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "FRESA",
    videos: [
      {
        description:
          "CÓMO CULTIVAR FRESAS EN COLOMBIA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "22:48:00",
        url: "https://www.youtube.com/watch?v=ULjdAFneKOo&ab_channel=TvAgro",
      },
      {
        description:
          "AGRICULTURA AL DÍA / CULTIVO DE FRESA: UN CULTIVO MUY RENTABLE",
        time: "04:22:00",
        url: "https://www.youtube.com/watch?v=LeDSnP3kf-8&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
    ],
  },
  {
    name: "GRANADILLA",
    videos: [
      {
        description:
          "CULTIVO DE GRANADILLA CON TÉCNICAS AGRÍCOLAS RESPONSABLES - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "13:56:00",
        url: "https://www.youtube.com/watch?v=JeHkRTxDemk&ab_channel=TvAgro",
      },
      {
        description:
          "CÓMO SEMBRAR FRUTA GRANADILLA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:17:00",
        url: "https://www.youtube.com/watch?v=Hc5j2Fzn6kI&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "GUANABANÁ",
    videos: [
      {
        description:
          "EL SECRETO DETRÁS DEL CULTIVO DE GUANÁBANA EN COLOMBIA QUE NADIE TE HA CONTADO",
        time: "22:19:00",
        url: "https://www.youtube.com/watch?v=jlJJbbpnQe4&ab_channel=AlterVenturas",
      },
      {
        description:
          "TODO SOBRE EL CULTIVO DE GUANÁBANA O GRAVIOLA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "22:17:00",
        url: "https://www.youtube.com/watch?v=0hH9FdnOyaQ&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "GUAYABA AGRIA",
    videos: [
      {
        description:
          "TÉCNICAS DE CULTIVO DE GUAYABA - PRODUCIDO POR JUAN GONZALO ANGEL - TVAGRO",
        time: "1900-01-01 00:24:00",
        url: "https://www.youtube.com/watch?v=EGfj4WiGaQk&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "GUAYABA PERA",
    videos: [
      {
        description:
          "IMPORTANCIA ECONOMICA DEL CULTIVO DE GUAYABA PERA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "04:13:00",
        url: "https://www.youtube.com/watch?v=Zzhl_DXThcU&ab_channel=TvAgro",
      },
      {
        description: "CULTIVO DE GUAYABA PERA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "22:31:00",
        url: "https://www.youtube.com/watch?v=zCQRaQLWI7c&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "GUAYABA MANZANA",
    videos: [
      {
        description:
          "CÓMO CULTIVAR LA GUAYABA MANZANA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "21:15:00",
        url: "https://www.youtube.com/watch?v=dTUjWScqfLI&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "GULUPA",
    videos: [
      {
        description:
          "COMO SE CULTIVA LA GULUPA O MARACUYA MORADA- TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "08:24:00",
        url: "https://www.youtube.com/watch?v=56WAkFnV6rc&ab_channel=TvAgro",
      },
      {
        description: "CÓMO CULTIVAR GULUPA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "17:04:00",
        url: "https://www.youtube.com/watch?v=rJD28UFQC68&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "HIGO",
    videos: [
      {
        description:
          "CULTIVOS DE HIGOS CHUMBO DE EXCELENTE CALIDAD EN IZA BOYACA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "08:28:00",
        url: "https://www.youtube.com/watch?v=h2D2xDRT4-4&ab_channel=TvAgro",
      },
      {
        description:
          "PRODUCCIÓN DE HIGO EN EL MUNICIPIO DE SONSON - TVAGRO POR JUAN GONZALO ANGEL",
        time: "04:21:00",
        url: "https://www.youtube.com/watch?v=MPgsiVxHH_o&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "KIWI",
    videos: [
      {
        description:
          "CONSEJOS PARA CULTIVAR KIWIS CURSO BÁSICO DE FRUTICULTURA 2020: CAPÍTULO 15 | LDN",
        time: "08:31:00",
        url: "https://www.youtube.com/watch?v=Kx_9bcyvOEA&ab_channel=LaderasdelNaranco-Fruticultura%26Jardiner%C3%ADa",
      },
      {
        description:
          "PANORAMA AGROPECUARIO N°323/1 CULTIVO DE KIWI COND. Y DIR. ING.AGR. HERNÁN VIERA",
        time: "09:03:00",
        url: "https://www.youtube.com/watch?v=fBwHNmnFVjk&ab_channel=ProgramaPANORAMAAGROPECUARIO",
      },
    ],
  },
  {
    name: "LIMON COMUN",
    videos: [
      {
        description: "AGRICULTURA AL DÍA / ASÍ ES UN CULTIVO DE LIMÓN",
        time: "04:03:00",
        url: "https://www.youtube.com/watch?v=9iR4O2x79lc&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
    ],
  },
  {
    name: "LIMON MANDARINO",
    videos: [
      {
        description:
          'AGRORIENTE "CULTIVO LIMÓN MANDARINA - VDA. LA LOMA" 09 DE DICIEMBRE DE 2018',
        time: "20:50:00",
        url: "https://www.youtube.com/watch?v=hLqLJVcJ7rM&ab_channel=JugoDeNaranja",
      },
      {
        description:
          "LIMÓN MANDARINA BUENA COSECHA PERO SE DEBE TOMAR EN CUENTA ESTO…",
        time: "03:02:00",
        url: "https://www.youtube.com/watch?v=ZIzyWH_y65M&ab_channel=SiembrasyCosechas",
      },
    ],
  },
  {
    name: "LIMON TAHITI",
    videos: [
      {
        description: "ESTABLECIMIENTO DEL CULTIVO DE LIMÓN TAHITÍ ",
        time: "08:28:00",
        url: "https://www.youtube.com/watch?v=C8lF-8N-gIM&ab_channel=FrutalesyPlantasdeColombia",
      },
      {
        description:
          "PRODUCCIÓN DE LIMÓN TAHITÍ - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "15:56:00",
        url: "https://www.youtube.com/watch?v=q0V9dINWbns&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "LULO",
    videos: [
      {
        description: "TRABAJOS BÁSICOS PARA CULTIVAR LULO - LA FINCA DE HOY",
        time: "04:15:00",
        url: "https://www.youtube.com/watch?v=3gIfEoVI-Ao&ab_channel=LaFincadeHoy",
      },
      {
        description: "CULTIVO DE LULO-EN HUILA COLOMBIA",
        time: "03:20:00",
        url: "https://www.youtube.com/watch?v=p67gqJoXBfA&ab_channel=CampoVida",
      },
    ],
  },
  {
    name: "MANDARINA",
    videos: [
      {
        description: "COMO CULTIVAR MANDARINA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "18:35:00",
        url: "https://www.youtube.com/watch?v=WnrhEcWYNc0&ab_channel=TvAgro",
      },
      {
        description:
          "PROCESO DE SELECCIÓN Y COMERCIALIZACIÓN DE LA MANDARINA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "12.27",
        url: "https://www.youtube.com/watch?v=4ryklnrSM1Q&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "MANGO  COMUN",
    videos: [
      {
        description:
          "PARTICULARIDADES DEL CULTIVO DE MANGO - TVAGRO POR JUAN GONZALO ANGEL",
        time: "17:27:00",
        url: "https://www.youtube.com/watch?v=Vfe2AlTf0i0&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "MANGO COMUN",
    videos: [
      {
        description:
          "TODO LO QUE DEBE SABER PARA CULTIVAR MANGO - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:46:00",
        url: "https://www.youtube.com/watch?v=qWaazav_M4M&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "MANGO DE AZUCAR",
    videos: [
      {
        description:
          "PRODUCCIÓN DE MANGO DE AZÚCAR TIPO EXPORTACIÓN - TVAGRO POR JUAN GONZALO ANGEL",
        time: "03:20:00",
        url: "https://www.youtube.com/watch?v=_Jm_VSs6M0k&ab_channel=TvAgro",
      },
      {
        description:
          "RASGOS DEL MANGO DE AZÚCAR TIPO DE EXPORTACIÓN - TVAGRO POR JUAN GONZALO ANGEL",
        time: "03:47:00",
        url: "https://www.youtube.com/watch?v=4Cbx5A_cCF4&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "MANGO TOMMY",
    videos: [
      {
        description: "AGRICULTURA AL DÍA / LA PRODUCCIÓN MANGO DE TOMMY",
        time: "03:49:00",
        url: "https://www.youtube.com/watch?v=pAma_7JCkH4&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
      {
        description:
          "ASOHOFRUCOL: AYAPEL BUSCA SER EL PRINCIPAL PRODUCTOR DE MANGO TOMMY - TVAGRO POR JUAN GONZALO ANGEL",
        time: "1900-01-01 02:33:00",
        url: "https://www.youtube.com/watch?v=BZYenhXDoBo&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "MANZANA",
    videos: [
      {
        description: "CÓMO CULTIVAR MANZANA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:26:00",
        url: "https://www.youtube.com/watch?v=rVu9TyME0PY&ab_channel=TvAgro",
      },
      {
        description: "COMO CULTIVAR MANZANA- TVAGRO POR JUAN GONZALO ANGEL",
        time: "22:10:00",
        url: "https://www.youtube.com/watch?v=on0RlCnQZS0&ab_channel=TvAgro",
      },
      {
        description:
          "CONSEJOS PARA CULTIVAR MANZANAS CURSO BÁSICO DE FRUTICULTURA 2020: CAPÍTULO 1 | LDN",
        time: "06:43:00",
        url: "https://www.youtube.com/watch?v=gUi02i2HNWM&ab_channel=LaderasdelNaranco-Fruticultura%26Jardiner%C3%ADa",
      },
    ],
  },
  {
    name: "MARACUYA",
    videos: [
      {
        description: "CÓMO CULTIVAR MARACUYÁ - TVAGRO POR JUAN GONZALO ANGEL",
        time: "22:44:00",
        url: "https://www.youtube.com/watch?v=n1u_l4ZsWCE&ab_channel=TvAgro",
      },
      {
        description: "EXIGENCIAS Y RENDIMIENTO DEL CULTIVO DE MARACUYÁ",
        time: "03:52:00",
        url: "https://www.youtube.com/watch?v=w_VKH9GHwIg&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "MELON",
    videos: [
      {
        description:
          "COMO CULTIVAR EL MELÓN, MANEJO Y PRODUCCIÓN - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:12:00",
        url: "https://www.youtube.com/watch?v=0XDNHzxtafY&ab_channel=TvAgro",
      },
      {
        description: "CULTIVO DE MELÓN OVATION - TVAGRO POR JUAN GONZALO ANGEL",
        time: "10:44:00",
        url: "https://www.youtube.com/watch?v=WOGCokQwNY8&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "MORA DE CASTILLA",
    videos: [
      {
        description:
          "CÓMO ES EL PROCESO DEL CULTIVO DE MORA DE CASTILLA - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "1900-01-01 04:04:00",
        url: "https://www.youtube.com/watch?v=WrAGmm86VIA&ab_channel=TvAgro",
      },
      {
        description:
          "CÓMO SE REALIZA UN CULTIVO DE MORA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "17:57:00",
        url: "https://www.youtube.com/watch?v=wp8zw_TRG_I&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "NARANJA COMUN ",
    videos: [
      {
        description:
          "COMO DESARROLLAR UN CULTIVO DE NARANJA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "17:33:00",
        url: "https://www.youtube.com/watch?v=Wfqn-s9oQig&ab_channel=TvAgro",
      },
      {
        description: "INTRODUCCIÓN AL CULTIVO DE NARANJA",
        time: "06:37:00",
        url: "https://www.youtube.com/watch?v=VXwClORq4Mg&ab_channel=SembrandounPa%C3%ADs",
      },
    ],
  },
  {
    name: "PAPAYA MARADOL",
    videos: [
      {
        description:
          "CÓMO CULTIVAR PAPAYA MARADOL MULATA | 5 MIL PLANTAS POR HECTÁREA PARA COSECHAR 100 TONELADAS",
        time: "15:13:00",
        url: "https://www.youtube.com/watch?v=zrEKhDkg7kU&ab_channel=SinRutaAlCampo",
      },
    ],
  },
  {
    name: "PAPAYA PAULINA",
    videos: [
      {
        description:
          "PRODUCTOR DE PAPAYA, HUMBERTO OSPINA. ( PAULINA F1) TARQUI HUILA.",
        time: "02:06:00",
        url: "https://www.youtube.com/watch?v=ZOoS-lZfzFw&ab_channel=Agro-Forester%C3%ADaLuisFernando",
      },
    ],
  },
  {
    name: "PAPAYA TAINIUNG",
    videos: [
      {
        description:
          "COMO CULTIVAR PAPAYA DE FORMA PRODUCTIVA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "21:42:00",
        url: "https://www.youtube.com/watch?v=Z3EdH1653Z8&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PAPAYUELA",
    videos: [
      {
        description:
          "LA PAPAYUELA PARTE I | SANTIAGRO #CANALTELESANTIAGO 09 MARZO 2022",
        time: "1900-01-01 06:46:00",
        url: "https://www.youtube.com/watch?v=n4EvFS7KqtY&ab_channel=CanalTeleSantiago",
      },
      {
        description:
          "LA PAPAYUELA PARTE II | SANTIAGRO #CANALTELESANTIAGO 16 MARZO 2022",
        time: "1900-01-01 03:34:00",
        url: "https://www.youtube.com/watch?v=LP41d4WYrxs&ab_channel=CanalTeleSantiago",
      },
    ],
  },
  {
    name: "PATILLA",
    videos: [
      {
        description: "CONDICIONES PARA LA SIEMBRA DE PATILLA | LA FINCA DE HOY",
        time: "03:45:00",
        url: "https://www.youtube.com/watch?v=YALrCvm5J6g&ab_channel=LaFincadeHoy",
      },
      {
        description: "COMO CULTIVAR PATILLA. SENA MONTERREY CASANARE 2016",
        time: "20:36:00",
        url: "https://www.youtube.com/watch?v=ZnVnN7svxGI&ab_channel=KarleyRamirezParra",
      },
    ],
  },
  {
    name: "PATILLA BABY",
    videos: [
      {
        description: "SANDIA PERSONALES BABY EDOM",
        time: "1900-01-01 21:20:00",
        url: "https://www.youtube.com/watch?v=1ysFlvueuDQ&ab_channel=ElMundodelCampo",
      },
      {
        description:
          "COMO SEMBRAR SANDÍA. TEMAS MUY IMPORTANTES A TENER EN CUENTA.",
        time: "05:59:00",
        url: "https://www.youtube.com/watch?v=lZNoMQPyOK8&ab_channel=CosasdelJardin",
      },
    ],
  },
  {
    name: "PERA NACIONAL",
    videos: [
      {
        description:
          "AGRICULTURA AL DÍA - CRÓNICA, DEL CULTIVO AL CONSUMIDOR, PRODUCTOR DE PERA, CORABASTOS",
        time: "04:22:00",
        url: "https://www.youtube.com/watch?v=CR3AP84J7x0&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
      {
        description:
          "ASÍ SON LOS CULTIVOS DE PERA Y DE FEIJOA EN JENESANO, BOYACÁ - TVAGRO POR JUAN GONZALO ANGEL",
        time: "21:37:00",
        url: "https://www.youtube.com/watch?v=GnDS8l9jv4A&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PIÑA GOLD",
    videos: [
      {
        description:
          "COMO CULTIVAR LA PIÑA GOLD- TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "22:43:00",
        url: "https://www.youtube.com/watch?v=VC42vY4_2AI&ab_channel=TvAgro",
      },
      {
        description:
          "PIÑA GOLD TIPO EXPORTACIÓN- TVAGRO POR JUAN GONZALO ANGEL",
        time: "03:57:00",
        url: "https://www.youtube.com/watch?v=dQ1RjAH7GTA&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PIÑA ",
    videos: [
      {
        description:
          "PROCESO DE CULTIVO Y PRODUCCIÓN DE LA PIÑA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "03:13:00",
        url: "https://www.youtube.com/watch?v=a-Vb62zeoy8&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PIÑA",
    videos: [
      {
        description:
          "SIEMBRA DE PIÑA EN EL DEPARTAMENTO DE BOLÍVAR, COLOMBIA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "03:45:00",
        url: "https://www.youtube.com/watch?v=k-o5hNTCszM&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PITAHAYA",
    videos: [
      {
        description:
          "PITAHAYA: CONSEJOS PARA LOGRAR UNA BUENA COSECHA DE ESTA FRUTA - LA FINCA DE HOY",
        time: "09:23:00",
        url: "https://www.youtube.com/watch?v=nUQSny0Cssg&ab_channel=LaFincadeHoy",
      },
      {
        description: "ASÍ SE PRODUCE Y COSECHA LA PITAYA EN BOYACÁ COLOMBIA",
        time: "08:13:00",
        url: "https://www.youtube.com/watch?v=Svy837P_Gpc&ab_channel=TatiEcoGranja",
      },
    ],
  },
  {
    name: "SACHA INCHI",
    videos: [
      {
        description:
          "MANEJO AGROECOLÓGICO Y TRANSFORMACIÓN DE SACHA INCHI - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "1900-01-01 01:13:00",
        url: "https://www.youtube.com/watch?v=Vch2JjKFfsM&ab_channel=TvAgro",
      },
      {
        description: "CUIDADOS DEL CULTIVO DE SACHA INCHI | LA FINCA DE HOY",
        time: "04:18:00",
        url: "https://www.youtube.com/watch?v=lxbAdxaW5rA&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "TANGELO",
    videos: [
      {
        description: "CULTIVO DE TANGELO - TVAGRO POR JUAN GONZALO ANGEL",
        time: "17:03:00",
        url: "https://www.youtube.com/watch?v=673X9iKRkSc&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "TOMATE DE ARBOL ",
    videos: [
      {
        description:
          "TRAVESÍA COLINAGRO: CULTIVO DE TOMATE DE ÁRBOL EN ANTIOQUIA",
        time: "03:05:00",
        url: "https://www.youtube.com/watch?v=HiGsO9_-XIM&pp=ygUnY3VsdGl2byBkZSBUT01BVEUgREUgw4FSQk9MIGVuIGNvbG9tYmlh&ab_channel=ColinagroColS.A.",
      },
      {
        description: "CULTIVO DE TOMATE DE ARBOL TV AGRO BY JUAN GONZALO ANGEL",
        time: "08:22:00",
        url: "https://www.youtube.com/watch?v=mrpq79iAV3Q&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "UCHUVA",
    videos: [
      {
        description:
          "UCHUVA DE EXPORTACIÓN SONSÓN ANTIOQUIA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:22:00",
        url: "https://www.youtube.com/watch?v=EVEjlMqIrpk&ab_channel=TvAgro",
      },
      {
        description:
          "AGRICULTURA AL DÍA - ¿CUÁL ES EL PROCESO DE SIEMBRA DE LA UCHUVA?",
        time: "03:21:00",
        url: "https://www.youtube.com/watch?v=vA776Et5fyY&ab_channel=MinisteriodeAgriculturayDesarrolloRural",
      },
    ],
  },
  {
    name: "UVA ISABELLA",
    videos: [
      {
        description:
          "CULTIVO DE LA UVA ISABELLA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "22:45:00",
        url: "https://www.youtube.com/watch?v=NCMGWQxXv6Q&ab_channel=TvAgro",
      },
      {
        description:
          "CÓMO CULTIVAR UVA ISABELLA- TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "1900-01-01 03:49:00",
        url: "https://www.youtube.com/watch?v=rRE5rDacRYg&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ZAPOTE",
    videos: [
      {
        description:
          "CULTIVO DE ZAPOTE COSTEÑO BAJO AGRICULTURA TROPICAL - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "1900-01-01 04:46:00",
        url: "https://www.youtube.com/watch?v=rkENZaU56_g&ab_channel=TvAgro",
      },
      {
        description:
          "PRODUCCIÓN DE ZAPOTE CONSEJOS GRATIS PARA UNA EXCELENTE RENTABILIDAD DE ESTE DELICIOSO FRUTO",
        time: "10:50:00",
        url: "https://www.youtube.com/watch?v=F8ISu0YcnVU&ab_channel=EinsteinAlquilayEnse%C3%B1a",
      },
    ],
  },
  {
    name: "ARRACACHA AMARILLA",
    videos: [
      {
        description:
          "AGROSAVIA LA 22: VARIEDAD DE ARRACACHA AMARILLA Y DE ALTA PRODUCCIÓN",
        time: "03:46:00",
        url: "https://www.youtube.com/watch?v=3SrPwoKY9nQ&ab_channel=AGROSAVIATV",
      },
      {
        description: "CULTIVO DE ARRACACHA AMARILLA-COLOMBIA",
        time: "18:51:00",
        url: "https://www.youtube.com/watch?v=S5obZdWCwVI",
      },
    ],
  },
  {
    name: "ARRACACHA BLANCA",
    videos: [
      {
        description:
          "CULTIVO DE ARRACACHA EN LAS ZONAS PRODUCTORAS DE CAJAMARCA E IBAGUÉ (TOLIMA)",
        time: "05:41:00",
        url: "https://www.youtube.com/watch?v=0f_fGXaj9sQ&ab_channel=AGROSAVIATV",
      },
      {
        description:
          "CAJAMARCA, MUNICIPIO PRODUCTOR DE ARRACACHA - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "23:48:00",
        url: "https://www.youtube.com/watch?v=jT8OxADpqvE&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "NABO",
    videos: [
      {
        description: "COMO CULTIVAR NABOS EN EL HUERTO | MUY FACIL",
        time: "05:18:00",
        url: "https://www.youtube.com/watch?v=tHeCuemfQBw&ab_channel=LaHuertadeIv%C3%A1n",
      },
      {
        description: "SIEMBRA DEL CULTIVO DE NABO",
        time: "02:03:00",
        url: "https://www.youtube.com/watch?v=2h2C05iVRvM&ab_channel=CarlosJim%C3%A9nez",
      },
    ],
  },
  {
    name: "ÑAME",
    videos: [
      {
        description: "¿CÓMO SE CULTIVA ÑAME? - LA FINCA DE HOY",
        time: "03:28:00",
        url: "https://www.youtube.com/watch?v=QgphBMbPU9s&ab_channel=LaFincadeHoy",
      },
      {
        description: "CÓMO CULTIVAR ÑAME - TVAGRO POR JUAN GONZALO ANGEL",
        time: "06:00:00",
        url: "https://www.youtube.com/watch?v=-acw32xKVRI&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PAPA",
    videos: [
      {
        description:
          "COMO ES EL CULTIVO Y PRODUCCION PAPA - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "1900-01-01 00:22:00",
        url: "https://www.youtube.com/watch?v=4qQdGeiuXwM&ab_channel=TvAgro",
      },
      {
        description: "TRAVESÍA COLINAGRO: CULTIVO DE PAPA EN CUNDINAMARCA ",
        time: "05:15:00",
        url: "https://www.youtube.com/watch?v=g8-MbfmT0Iw&ab_channel=ColinagroColS.A.",
      },
      {
        description: "CULTIVO DE PAPA - PATATA - TVAGRO BY JUAN GONZALO ANGEL",
        time: "23:37:00",
        url: "https://www.youtube.com/watch?v=pq_LQyUSjcU&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PAPA CRIOLLA",
    videos: [
      {
        description:
          "CÓMO CULTIVAR PAPA CRIOLLA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "21:46:00",
        url: "https://www.youtube.com/watch?v=H_dVeB8ZkoE&ab_channel=TvAgro",
      },
      {
        description: "CULTIVO DE PAPA CRIOLLA CAMPO MUNDO DEL CAMPO",
        time: "1900-01-01 21:21:00",
        url: "https://www.youtube.com/watch?v=9S7EdfAFqdY&ab_channel=ElMundodelCampo",
      },
    ],
  },
  {
    name: "PLATANO VERDE",
    videos: [
      {
        description:
          "LAS 7 MARAVILLAS DEL CULTIVO DE PLÁTANO TECNIFICADO - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "13:49:00",
        url: "https://www.youtube.com/watch?v=OkYlkTYwEN0&ab_channel=TvAgro",
      },
      {
        description:
          "COMO CULTIVAR PLÁTANO HARTÓN - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "12:40:00",
        url: "https://www.youtube.com/watch?v=gD0ZtMwN5zI&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "PLATANO MADURO",
    videos: [
      {
        description:
          "COMO ES LA MULTIPLICACION DE SEMILLAS DE PLATANO HARTON - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "20:29:00",
        url: "https://www.youtube.com/watch?v=bk1KUWaDY8A&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ULLUCO",
    videos: [
      {
        description: "COSECHA DE LISAS U OLLUCO",
        time: "07:56:00",
        url: "https://www.youtube.com/watch?v=7ciuAAyt1rI&ab_channel=CanastaSolidariaMihunaKachunQosqo",
      },
    ],
  },
  {
    name: "YUCA",
    videos: [
      {
        description: "MANEJO AGRONÓMICO DEL CULTIVO DE YUCA | LA FINCA DE HOY",
        time: "03:37:00",
        url: "https://www.youtube.com/watch?v=YTDGDPIOYfU&t=56s&ab_channel=LaFincadeHoy",
      },
      {
        description:
          "PRECIO Y PRODUCCIÓN DE LA YUCA EN COLOMBIA - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "03:59:00",
        url: "https://www.youtube.com/watch?v=oSrA-E7Jiuo&t=70s&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ACHIRA",
    videos: [
      {
        description:
          "PROYECTO PRODUCTIVO DE ALMIDÓN DE ACHIRA, LA CRUZ NARIÑO COLOMBIA.",
        time: "07:59:00",
        url: "https://www.youtube.com/watch?v=3e0IlNNG0OA&ab_channel=NBO",
      },
    ],
  },
  {
    name: "ARROZ",
    videos: [
      {
        description:
          "PROCESO DE SIEMBRA, FERTILIZACIÓN Y COSECHA DE ARROZ - TVAGRO POR JUAN GONZALO ANGEL",
        time: "05:42:00",
        url: "https://www.youtube.com/watch?v=JBOmT-Mnm60&ab_channel=TvAgro",
      },
      {
        description:
          "GENERALIDADES DEL CULTIVO DE ARROZ - TVAGRO POR JUAN GONZALO ANGEL",
        time: "23:41:00",
        url: "https://www.youtube.com/watch?v=eE5wmBV1fTg&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ARVEJA AMARILLA SECA",
    videos: [
      {
        description:
          "CULTIVO DE ARVEJA, GUISANTE O CHÍCHAROS EN SONSÓN ANTIOQUIA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "21:42:00",
        url: "https://www.youtube.com/watch?v=wdxtMZAGsC8&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ARVEJA VERDE SECA",
    videos: [
      {
        description: "LAS 5 CLAVES EN EL CULTIVO DE ARVEJA",
        time: "07:07:00",
        url: "https://www.youtube.com/watch?v=zCxmOrjO4IY&ab_channel=BayerAndinayCAC",
      },
    ],
  },
  {
    name: "CEBADA",
    videos: [
      {
        description:
          "TRABAJOS DE INVESTIGACIÓN Y DESARROLLO EN CEBADA MALTERA - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "02:53:00",
        url: "https://www.youtube.com/watch?v=d9in--Bz5qE&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "FRIJOL BOLON",
    videos: [
      {
        description:
          "COMO SON LAS BUENAS PRACTICAS AGRICOLAS Y RENTABILIDAD EN CULTIVOS DE FRIJOL - TVAGRO POR JUAN ANGEL",
        time: "1900-01-01 03:00:00",
        url: "https://www.youtube.com/watch?v=1EnMwoGnY1c&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "FRIJOL CARGAMANTO ROJO Y BLANCO",
    videos: [
      {
        description: "VARIEDADES DE FRIJOL, CARGAMANTO ROJO Y BLANCO.",
        time: "06:36:00",
        url: "https://www.youtube.com/watch?v=L6qDNcPvA00&ab_channel=ElChirovero",
      },
      {
        description: "CÓMO SEMBRAR FRIJOL CARGAMANTO",
        time: "12:58:00",
        url: "https://www.youtube.com/watch?v=99GZk_q4cGE&ab_channel=mir%C3%A1elcampo",
      },
    ],
  },
  {
    name: "GARBANZO ",
    videos: [
      {
        description: "CULTIVO DE GARBANZO PRIMERA PARTE! - SINPRETEXTOS.",
        time: "06:12:00",
        url: "https://www.youtube.com/watch?v=8eKP0e9PxP4&ab_channel=SinPretextos",
      },
      {
        description: "PREPARACIÓN DE TERRENO PARA CULTIVO DE GARBANZO",
        time: "04:58:00",
        url: "https://www.youtube.com/watch?v=xhuiXhrHUnk&ab_channel=FIRA-FideicomisosInstituidosenRelaci%C3%B3nconlaAgricultura",
      },
    ],
  },
  {
    name: "LENTEJA",
    videos: [
      {
        description: "CORTE DE LENTEJA",
        time: "02:00:00",
        url: "https://www.youtube.com/watch?v=wL4_ADLMhAY&ab_channel=Gabriel8a",
      },
      {
        description: "GERMINACIÓN DE LENTEJAS",
        time: "04:23:00",
        url: "https://www.youtube.com/watch?v=7nBp0l9c5SQ&ab_channel=SaadiaMagicArt",
      },
    ],
  },
  {
    name: "MAIZ AMARILLO",
    videos: [
      {
        description:
          "CONSEJOS PARA EL RENDIMIENTO Y TECNIFICACIÓN DEL CULTIVO DE MAÍZ - LA FINCA DE HOY",
        time: "04:56:00",
        url: "https://www.youtube.com/watch?v=TiyGp5mufIw&ab_channel=LaFincadeHoy",
      },
      {
        description:
          "CULTIVO DEL MAÍZ AMARILLO DURO MEGAHIBRIDO PARA PRODUCCIÓN DE SEMILLA",
        time: "12:26:00",
        url: "https://www.youtube.com/watch?v=eF91WTKdMzw&ab_channel=IniaPeru",
      },
    ],
  },
  {
    name: "QUINUA",
    videos: [
      {
        description:
          "CÓMO SEMBRAR, FERTILIZAR Y COSECHAR CULTIVOS DE QUINUA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "11:46:00",
        url: "https://www.youtube.com/watch?v=TLrskLrUwEM&ab_channel=TvAgro",
      },
      {
        description:
          "PRODUCCIÓN DE QUINUA EN COLOMBIA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "01:08:00",
        url: "https://www.youtube.com/watch?v=Q7VZSCi39ac&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "SORGO",
    videos: [
      {
        description:
          "COMO SE PRODUCE SORGO FORRAJERO EN LA ALTILLANURA COLOMBIANA- TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "22:57:00",
        url: "https://www.youtube.com/watch?v=fpElBgHVtVg&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "ALBAHACA",
    videos: [
      {
        description:
          "LA ALBAHACA CON ALTOS NIVELES DE PRODUCCION Y CALIDAD - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "05:07:00",
        url: "https://www.youtube.com/watch?v=zt5MYWNKIKU",
      },
      {
        description:
          "TOLIMA, LÍDER EN LA PRODUCCIÓN DE ALBAHACA PARA EXPORTACIÓN - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "05:01:00",
        url: "https://www.youtube.com/watch?v=r3w6JHCWMRw&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "LIMONARIA",
    videos: [
      {
        description:
          "PRODUCCIÓN Y COMERCIALIZACIÓN DE HIERBAS AROMÁTICAS - TVAGRO POR JUAN GONZALO ANGEL",
        time: "08:02:00",
        url: "https://www.youtube.com/watch?v=1Zz3LSCzidQ&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "MORINGA",
    videos: [
      {
        description:
          "CÓMO CULTIVAR MORINGA OLEIFERA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "12:59:00",
        url: "https://www.youtube.com/watch?v=v73gw7Ix6SU&ab_channel=TvAgro",
      },
      {
        description:
          "SIEMBRA MORINGA PARA SUPLEMENTAR A LOS CERDOS - LA FINCA DE HOY",
        time: "04:26:00",
        url: "https://www.youtube.com/watch?v=lybkyKO9TLU&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "ROMERO",
    videos: [
      {
        description:
          "CUIDADOS PARA LA HIERBABUENA Y ROMERO - TVAGRO POR JUAN GONZALO ANGEL RESTREPO",
        time: "11:17:00",
        url: "https://www.youtube.com/watch?v=wgRsKGv4nSA&ab_channel=TvAgro",
      },
    ],
  },
  {
    name: "RUDA",
    videos: [
      {
        description: "COMO PLANTAR RUDA EN EL HUERTO O JARDÍN ",
        time: "09:13:00",
        url: "https://www.youtube.com/watch?v=tprbIC5q2dU&ab_channel=LaHuertadeIv%C3%A1n",
      },
    ],
  },
  {
    name: "RUSCUS",
    videos: [
      {
        description: "RUSCUS (AUREOLA) TRANSPLANTE Y CUIDADOS.",
        time: "11:45:00",
        url: "https://www.youtube.com/watch?v=xBwUYqgCkYc&ab_channel=SimpleyNatural",
      },
    ],
  },
  {
    name: "SABILA",
    videos: [
      {
        description: "EL CULTIVO DE SÁBILA, ALTERNATIVA PARA LOS AGRONEGOCIOS",
        time: "07:18:00",
        url: "https://www.youtube.com/watch?v=nwaA-YnOpHA&ab_channel=ElProductorTV",
      },
      {
        description: "PASO A PASO PARA SEMBRAR SÁBILA | LA FINCA DE HOY",
        time: "04:47:00",
        url: "https://www.youtube.com/watch?v=XpEsNwGzuYc&ab_channel=LaFincadeHoy",
      },
    ],
  },
  {
    name: "CACAO",
    videos: [
      {
        description:
          "CÓMO REALIZAR EL MANEJO INTEGRADO DE CULTIVO DE CACAO - TVAGRO POR JUAN GONZALO ANGEL",
        time: "03:35:00",
        url: "https://www.youtube.com/watch?v=hcqDsrvhd24&ab_channel=TvAgro",
      },
      {
        description: "ASI ES EL CULTIVO Y APROVECHAMIENTO DE CACAO EN COLOMBIA",
        time: "1900-01-01 17:27:00",
        url: "https://www.youtube.com/watch?v=_uAKCAj1TYk&ab_channel=AlterVenturas",
      },
    ],
  },
  {
    name: "CAÑA",
    videos: [
      {
        description:
          "TÉCNICAS Y MÉTODOS DE SIEMBRA DE LA CAÑA DE AZÚCAR - TVAGRO POR JUAN GONZALO ANGEL",
        time: "11:06:00",
        url: "https://www.youtube.com/watch?v=OHQAgh0vkUU&ab_channel=TvAgro",
      },
      {
        description:
          "CULTIVO, PRODUCCIÓN Y DESARROLLO DE CAÑA PANELERA EN COLOMBIA - TVAGRO POR JUAN GONZALO ANGEL",
        time: "05:23:00",
        url: "https://www.youtube.com/watch?v=M4xcctpQqt4&ab_channel=TvAgro",
      },
    ],
  },
];
