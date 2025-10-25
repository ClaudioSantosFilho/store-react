import departamento from "../assets/home/loja-de-departamento.jpg";
import colaboradores from "../assets/home/colaboradores.jpg";

export default function Home() {
  return (
    <div className="p-8 space-y-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-dourado font-bold mb-4">
          Bem-vindo à Claudio Store
        </h2>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/10 p-8 rounded-2xl shadow-lg border border-dourado/20">
        <div className="md:w-1/2 text-justify">
          <h3 className="text-4xl text-dourado font-semibold mb-10">
            Nossa História
          </h3>
          <p className="text-cinzaSuave leading-relaxed mb-3 indent-8">
            A <span className="text-dourado font-semibold">Claudio Store</span>{" "}
            nasceu em 1998, na cidade de Campina Grande, com uma proposta
            ousada: reunir em um só lugar produtos que atendessem a diferentes
            estilos de vida. O fundador, <strong>Cláudio Alves</strong>, começou
            com uma pequena loja de bairro vendendo ferramentas e itens de uso
            diário, mas rapidamente percebeu que podia ir além.
          </p>
          <p className="text-cinzaSuave leading-relaxed mb-3 indent-8">
            Com o passar dos anos, a Claudio Store se transformou em uma loja de
            departamentos completa, reconhecida por sua variedade e qualidade.
            Hoje, oferece desde cosméticos de marcas renomadas, até ferramentas
            profissionais e roupas modernas que acompanham as últimas
            tendências.
          </p>
          <p className="text-cinzaSuave leading-relaxed mb-3 indent-8">
            O segredo do sucesso sempre foi a confiança e o atendimento próximo
            ao cliente. Mais do que vender, a Claudio Store busca criar uma
            experiência de compra prática, acessível e acolhedora — o verdadeiro
            espírito de uma loja feita para todos.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={departamento}
            alt="Loja de departamento Claudio Store"
            className="rounded-2xl shadow-md border border-dourado/30 max-h-[400px] object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/10 p-8 rounded-2xl shadow-lg border border-dourado/20">
        <div className="md:w-1/2 text-justify">
          <h3 className="text-4xl text-dourado font-semibold mb-10">
            Nossa Equipe
          </h3>
          <p className="text-cinzaSuave leading-relaxed mb-3 indent-8">
            A Equipe da{" "}
            <span className="text-dourado font-semibold">Claudio Store</span> é
            o coração da nossa empresa. Formada por profissionais dedicados e
            apaixonados pelo que fazem, ela é o que garante que cada cliente
            tenha uma experiência única.
          </p>
          <p className="text-cinzaSuave leading-relaxed mb-3 indent-8">
            Nosso time é composto por especialistas em cosméticos, prontos para
            orientar sobre cuidados pessoais e beleza; consultores de moda, que
            ajudam a escolher o look ideal; e atendentes técnicos, sempre
            disponíveis para indicar a melhor ferramenta para cada necessidade.
          </p>
          <p className="text-cinzaSuave leading-relaxed mb-3 indent-8">
            Mais do que colegas de trabalho, somos uma família unida pelo
            compromisso com a qualidade e o atendimento humanizado. Cada membro
            da equipe acredita que um bom serviço começa com respeito, empatia e
            o desejo sincero de fazer o melhor por quem confia na Claudio Store.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={colaboradores}
            alt="Loja de departamento Claudio Store"
            className="rounded-2xl shadow-md border border-dourado/30 max-h-[400px] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
