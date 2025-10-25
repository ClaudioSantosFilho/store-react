import { clientes } from "../utils/Clientes";
import PerfilCard from "../components/PerfilCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
      {clientes.map((c) => (
        <PerfilCard
          key={c.id}
          imagem={c.imagem}
          nome={c.nome}
          idade={c.idade}
          genero={c.genero}
          cargo={c.cargo}
          cidade={c.cidade}
          email={c.email}
        />
      ))}
    </div>
  );
}
