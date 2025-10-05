import { Home, Trees, Book, ShoppingBasket } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Início", icon: Home, path: "/" },
  { name: "Simulador de Plantio", icon: Trees, path: "/simulator" },
  { name: "Biblioteca de Espécies", icon: Book, path: "/library" },
  { name: "Mercado de Mudas", icon: ShoppingBasket, path: "/market" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-white p-6 fixed h-full border-r border-gray-200">
      <h1 className="text-2xl font-bold text-green-700">Green Pathways</h1>
      <nav className="mt-10">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-600 hover:bg-green-50"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
