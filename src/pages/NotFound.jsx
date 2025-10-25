import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1a2b] text-center px-6">
      <div className="bg-white/5 border border-dourado/40 rounded-2xl p-10 shadow-lg max-w-lg w-full">
        <div className="text-dourado text-6xl font-extrabold mb-3">404</div>
        <h2 className="text-2xl text-white font-semibold mb-4">
          Página não encontrada
        </h2>
        <p className="text-cinzaSuave mb-8">
          Opa! Parece que você se perdeu pelo caminho. Mas não se preocupe,
          vamos te levar de volta.
        </p>

        <Link
          to="/"
          className="inline-block bg-dourado text-[#0b1a2b] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#f3c76b] hover:scale-105 transition-all duration-200"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
