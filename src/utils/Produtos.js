import camiseta from "../assets/produtos/roupas/camiseta.jpg";
import jeans from "../assets/produtos/roupas/jeans.jpg";
import jaqueta from "../assets/produtos/roupas/jaqueta.jpg";
import tenis from "../assets/produtos/roupas/tenis.jpg";
import bone from "../assets/produtos/roupas/bone.jpg";

import perfume from "../assets/produtos/cosmeticos/perfume.jpg";
import locao from "../assets/produtos/cosmeticos/locao-hidratante.jpg";
import batom from "../assets/produtos/cosmeticos/batom-vermelho.jpg";
import esmalte from "../assets/produtos/cosmeticos/esmalte.jpg";
import protetor from "../assets/produtos/cosmeticos/protetor-solar.jpg";

import martelo from "../assets/produtos/ferramentas/martelo.jpg";
import chave from "../assets/produtos/ferramentas/chave-de-fenda.jpg";
import alicate from "../assets/produtos/ferramentas/alicate.jpg";
import trena from "../assets/produtos/ferramentas/trena.jpg";
import serrote from "../assets/produtos/ferramentas/serrote.jpg";

const roupas = [
  {
    id: 1,
    nome: "Camiseta Preta",
    descricao: "Camiseta básica de algodão, confortável para o dia a dia.",
    img: camiseta,
  },
  {
    id: 2,
    nome: "Calça Jeans",
    descricao: "Calça jeans azul clássica, ideal para diversas ocasiões.",
    img: jeans,
  },
  {
    id: 3,
    nome: "Jaqueta Vermelha",
    descricao: "Jaqueta de couro sintético vermelha, estilo moderno e ousado.",
    img: jaqueta,
  },
  {
    id: 4,
    nome: "Tênis Branco",
    descricao: "Tênis casual, versátil e confortável para uso diário.",
    img: tenis,
  },
  {
    id: 5,
    nome: "Boné Azul",
    descricao: "Boné de algodão ajustável, ideal para dias ensolarados.",
    img: bone,
  },
];

const cosmeticos = [
  {
    id: 1,
    nome: "Perfume Floral",
    descricao: "Fragrância leve e elegante com notas florais.",
    img: perfume,
  },
  {
    id: 2,
    nome: "Loção Hidratante",
    descricao: "Hidratante corporal que mantém a pele macia o dia todo.",
    img: locao,
  },
  {
    id: 3,
    nome: "Batom Vermelho",
    descricao: "Batom de cor intensa e acabamento brilhante.",
    img: batom,
  },
  {
    id: 4,
    nome: "Esmalte Nude",
    descricao: "Esmalte de longa duração com tom neutro e sofisticado.",
    img: esmalte,
  },
  {
    id: 5,
    nome: "Protetor Solar FPS 50",
    descricao:
      "Protege a pele contra os raios UV e previne o envelhecimento precoce.",
    img: protetor,
  },
];

const ferramentas = [
  {
    id: 1,
    nome: "Martelo",
    descricao: "Ferramenta usada para pregar, quebrar ou ajustar objetos.",
    img: martelo,
  },
  {
    id: 2,
    nome: "Chave de Fenda",
    descricao: "Ideal para apertar ou soltar parafusos com fenda simples.",
    img: chave,
  },
  {
    id: 3,
    nome: "Alicate",
    descricao: "Ferramenta para cortar, dobrar ou segurar materiais.",
    img: alicate,
  },
  {
    id: 4,
    nome: "Trena",
    descricao:
      "Instrumento de medição retrátil usado em construções e reparos.",
    img: trena,
  },
  {
    id: 5,
    nome: "Serrote",
    descricao: "Ferramenta de corte utilizada para madeira e outros materiais.",
    img: serrote,
  },
];

export const produtos = { roupas, cosmeticos, ferramentas };
