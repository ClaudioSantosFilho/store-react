import { useParams, Link } from "react-router-dom";
import { produtos } from "../utils/Produtos";

export default function ProdutoDetalhe() {
  const { categoria, id } = useParams();
  const lista = produtos[categoria]; // seleciona o array correto

  const produto = lista?.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <div className="text-center text-white p-8">
        <h2 className="text-3xl text-red-500 mb-4">Produto não encontrado</h2>
        <Link
          to="/produtos"
          className="text-dourado underline hover:text-white"
        >
          Voltar para Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-8">
      <div className="bg-white/10 rounded-xl p-6 shadow-md border border-dourado/30 text-center w-full max-w-md hover:shadow-lg transition transform duration-200">
        <img
          src={produto.img}
          alt={produto.nome}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl text-dourado font-semibold mb-4">
          {produto.nome}
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          {produto.descricao}
        </p>

        <Link
          to="/produtos"
          className="block w-full bg-dourado text-[#0b1a2b] font-medium py-2 rounded-lg shadow hover:bg-[#f3c76b] transition-all duration-200"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
