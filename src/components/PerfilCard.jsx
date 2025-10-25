export default function PerfilCard({
  imagem,
  nome,
  idade,
  genero,
  cargo,
  cidade,
  email,
}) {
  return (
    <div className="bg-white/10 border border-dourado/30 rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center sm:items-center justify-center text-left w-full sm:w-[600px] mx-auto hover:scale-[1.02] hover:shadow-xl transition-transform duration-200">
      <div className="flex-shrink-0 flex justify-center items-center mb-4 sm:mb-0 sm:mr-8">
        <img
          src={imagem}
          alt={`Foto de ${nome}`}
          className="w-40 h-40 object-cover rounded-full border-2 border-dourado"
        />
      </div>

      <div className="text-cinzaSuave text-sm space-y-2">
        <h3 className="text-dourado text-2xl font-semibold mb-2">{nome}</h3>
        <p>
          <span className="font-semibold text-dourado">Cargo:</span> {cargo}
        </p>
        <p>
          <span className="font-semibold text-dourado">Idade:</span> {idade}
        </p>
        <p>
          <span className="font-semibold text-dourado">Gênero:</span> {genero}
        </p>
        <p>
          <span className="font-semibold text-dourado">Cidade:</span> {cidade}
        </p>
        <p>
          <span className="font-semibold text-dourado">Email:</span> {email}
        </p>
      </div>
    </div>
  );
}
