import { Link, useLocation } from "react-router-dom";

// 1. Definimos as rotas e os nomes correspondentes
const navItems = [
  { name: "Mapa de Alertas", path: "/" },
  { name: "Biblioteca de Espécies", path: "/biblioteca" },
  { name: "Mercado de Mudas", path: "/mercado" },
  { name: "Ajuda / FAQs", path: "/ajuda" },
];

// Ícone placeholder para a logo (mantido como estava)
const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-green-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 16.121A3 3 0 1014.12 11.88a3 3 0 00-4.242 4.242z"
    />
  </svg>
);

const Header = () => {
  // 2. Pegamos a localização atual para saber qual rota está ativa
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 xl:px-12 py-3">
        <div className="flex items-center gap-3">
          <LogoIcon />
          <div>
            <h1 className="text-lg font-bold text-green-800">
              EcoAlerta Fogo Zero
            </h1>
            <p className="text-xs text-gray-500">
              Monitoramento urbano e periurbano
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {/* 3. Mapeamos os itens de navegação */}
          {navItems.map((item) => {
            // Verificamos se o caminho do item é o mesmo da URL atual
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                // 4. Aplicamos classes condicionalmente com base no estado 'isActive'
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-green-100 text-green-800" // Estilo para link ativo
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900" // Estilo padrão
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
