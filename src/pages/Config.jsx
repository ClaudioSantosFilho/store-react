import { useState } from "react";

export default function Config() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(true);
  const [som, setSom] = useState(false);
  const [localizacao, setLocalizacao] = useState(true);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl text-dourado mb-6 font-semibold">
        Configurações
      </h2>

      <div className="bg-white/10 border border-dourado/30 rounded-2xl p-6 space-y-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Notificações</h3>
            <p className="text-sm text-cinzaSuave">
              Receber alertas e atualizações por e-mail.
            </p>
          </div>
          <Switch enabled={notificacoes} setEnabled={setNotificacoes} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Modo Escuro</h3>
            <p className="text-sm text-cinzaSuave">
              Alterna entre modo claro e escuro.
            </p>
          </div>
          <Switch enabled={modoEscuro} setEnabled={setModoEscuro} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Som</h3>
            <p className="text-sm text-cinzaSuave">
              Ativar efeitos sonoros no sistema.
            </p>
          </div>
          <Switch enabled={som} setEnabled={setSom} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Localização</h3>
            <p className="text-sm text-cinzaSuave">
              Permitir acesso à localização para recomendações.
            </p>
          </div>
          <Switch enabled={localizacao} setEnabled={setLocalizacao} />
        </div>
      </div>
    </div>
  );
}

function Switch({ enabled, setEnabled }) {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 ${
        enabled ? "bg-blue-500" : "bg-gray-500"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
          enabled ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
}
