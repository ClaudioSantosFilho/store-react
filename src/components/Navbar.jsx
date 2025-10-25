import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-azulEscuro text-dourado p-4 shadow-md flex justify-between">
      <h1 className="font-bold text-xl">Claudio Store</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/produtos" className="hover:text-white">
          Produtos
        </Link>
        <Link to="/dashboard" className="hover:text-white">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
