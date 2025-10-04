import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="relative w-1/3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquise bairros, espécies, fontes"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-6 py-2 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
          Compartilhar
        </button>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Entrar
        </button>
      </div>
    </header>
  );
};

export default Header;