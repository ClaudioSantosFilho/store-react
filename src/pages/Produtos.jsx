import ProdutoCard from "../components/ProdutoCard";
import { produtos } from "../utils/Produtos";

export default function Produtos() {
  const { roupas, cosmeticos, ferramentas } = produtos;

  return (
    <div className="p-8">
      <h2 className="text-3xl text-dourado mb-8 text-center">
        Nossos Produtos
      </h2>

      <section className="mb-10">
        <h3 className="text-2xl text-dourado mb-4">Roupas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {roupas.map((item) => (
            <ProdutoCard
              key={item.id}
              id={item.id}
              nome={item.nome}
              img={item.img}
              categoria="roupas"
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl text-dourado mb-4">Cosméticos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cosmeticos.map((item) => (
            <ProdutoCard
              key={item.id}
              id={item.id}
              nome={item.nome}
              img={item.img}
              categoria="cosmeticos"
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl text-dourado mb-4">Ferramentas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ferramentas.map((item) => (
            <ProdutoCard
              key={item.id}
              id={item.id}
              nome={item.nome}
              img={item.img}
              categoria="ferramentas"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
