import { Home, Trees, Book, ShoppingBasket } from 'lucide-react';

const navItems = [
  { name: 'Início', icon: Home, active: true },
  { name: 'Simulador de Plantio', icon: Trees, active: false },
  { name: 'Biblioteca de Espécies', icon: Book, active: false },
  { name: 'Mercado de Mudas', icon: ShoppingBasket, active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white p-6 fixed h-full border-r border-gray-200">
      <h1 className="text-2xl font-bold text-green-700">Green Pathways</h1>
      <nav className="mt-10">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className={`flex items-center py-3 px-4 rounded-lg transition-colors duration-200 ${
                  item.active
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;