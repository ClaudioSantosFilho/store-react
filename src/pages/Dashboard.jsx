import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-2xl text-dourado mb-6">Painel de Controle</h2>

      <div className="flex space-x-8 border-b border-dourado/30 pb-2 mb-6">
        <NavLink
          to="/dashboard/perfil"
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-dourado font-semibold border-b-2 border-dourado pb-1"
                : "text-white hover:text-dourado"
            }`
          }
        >
          Perfil
        </NavLink>

        <NavLink
          to="/dashboard/config"
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-dourado font-semibold border-b-2 border-dourado pb-1"
                : "text-white hover:text-dourado"
            }`
          }
        >
          Configurações
        </NavLink>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
