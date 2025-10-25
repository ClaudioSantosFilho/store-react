import { Link } from "react-router-dom";

export default function ProdutoCard({ id, nome, descricao, img, categoria }) {
  return (
    <div className="bg-white/10 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-lg transition transform duration-200 text-center border border-dourado/30 flex flex-col justify-between">
      <img
        src={img}
        alt={nome}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-dourado font-semibold text-lg mb-2">{nome}</h3>
      <p className="text-sm text-cinzaSuave">{descricao}</p>

      <Link
        to={`/produtos/${categoria}/${id}`}
        className="bg-dourado text-[#0b1a2b] font-medium px-4 py-2 rounded-lg shadow hover:bg-[#f3c76b] transition-all duration-200"
      >
        Ver Detalhes
      </Link>
    </div>
  );
}
