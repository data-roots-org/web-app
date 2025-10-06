import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Search, ChevronDown, Leaf, Phone, Check } from 'lucide-react';


const speciesData = [
  {
    name: "Pau-Ferro",
    scientificName: "Caesalpinia ferrea",
    imageUrl:
      "https://pocaobrotas.com.br/wp-content/uploads/2020/12/Pau-Ferro-1024x585.png",
    tags: ["Alta resistência", "Quebra-vento"],
    description: "Madeira densa • Espaçamento 4-5m",
  },
  {
    name: "Aroeira",
    scientificName: "Schinus terebinthifolius",
    imageUrl:
      "https://acdn-us.mitiendanube.com/stores/002/257/699/products/aroeira-pimenteira09-e56ce665f869d3e0ed17209035353404-1024-1024.png",
    tags: ["Densa", "Quebra-vento"],
    description: "Crescimento rápido • Copa compacta",
  },
  {
    name: "Oiti",
    scientificName: "Licania tomentosa",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Licania_tomentosa.JPG",
    tags: ["Copa densa", "Quebra-vento"],
    description: "Sombra ampla • Baixa manutenção",
  },
  {
    name: "Seringueira",
    scientificName: "Hevea brasiliensis",
    imageUrl:
      "https://www.infoescola.com/wp-content/uploads/2012/11/seringueira_85982494.jpg",
    tags: ["Retenção hídrica", "Resistente"],
    description: "Folhagem perene • Bons quebra-ventos",
  },
  {
    name: "Palmeiras",
    scientificName: "ex: Palmeira Real",
    imageUrl:
      "https://vendadearvores.com.br/wp-content/uploads/2023/04/palmeira-imperial-nreflorestamento.webp",
    tags: ["Baixa combustão", "Alinhamento"],
    description: "Folhas verticais • Paisagismo urbano",
  },
  {
    name: "Maricá",
    scientificName: "Acacia spp.",
    imageUrl:
      "https://www.sementesarbocenter.com.br/upload/produto/imagem/sementes-de-maric.jpg",
    tags: ["Rápido estabelecimento", "Quebra-vento"],
    description: "Fixadora de nitrogênio",
  },
];

const FilterSidebar = () => {
  const usoOptions = [
    "Uso: Quebra-vento",
    "Uso: Aceiro Verde / Corta-fogo",
    "Uso: Alta Retenção de Umidade",
    "Uso: Contenção de Encostas",
    "Uso: Paisagismo / Ornamental",
    "Uso: Arborização Urbana",
  ];
  
  // Estado para controlar a opção selecionada
  const [selectedUso, setSelectedUso] = useState(usoOptions[0]);
  
  const otherFilters = ['Resistência: Alta', 'Porte: Médio/Alto', 'Nativas do Cerrado'];

  return (
    <aside className="w-full md:w-64 lg:w-72">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Filtros</h2>
      <div className="space-y-3">
        
        {/* Filtro "Uso" com Headless UI Listbox */}
        <Listbox value={selectedUso} onChange={setSelectedUso}>
          <div className="relative">
            {/* O botão que o usuário vê */}
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white p-3 pr-10 text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
              <span className="block truncate text-gray-700">{selectedUso}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            {/* A transição e o painel de opções customizado */}
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                {usoOptions.map((option, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium text-green-700' : 'font-normal'}`}>
                          {option}
                        </span>
                        {/* Mostra o ícone de "check" se a opção estiver selecionada */}
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        {/* Outros filtros continuam como botões */}
        {otherFilters.map(filter => (
          <button key={filter} className="w-full flex justify-between items-center bg-white p-3 rounded-lg border border-gray-300 text-left">
            <span className="text-gray-700">{filter}</span>
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </button>
        ))}
      </div>
    </aside>
  );
};

type SpeciesCardProps = {
  species: typeof speciesData[0];
};

const SpeciesCard = ({ species }: SpeciesCardProps) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src={species.imageUrl} alt={species.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">{species.name} ({species.scientificName})</h3>
          <div className="flex flex-wrap gap-2 my-2">
            {species.tags.map(tag => (
              <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-4">{species.description}</p>
          <div className="flex gap-3">
            <button className="flex-1 text-center py-2 px-4 rounded-md font-semibold text-green-700 bg-white border-2 border-green-700 hover:bg-green-50">
              Ver detalhes
            </button>
            <button className="flex-1 text-center py-2 px-4 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700">
              Ver fornecedores
            </button>
          </div>
        </div>
      </div>
    );
  };

// --- COMPONENTE PRINCIPAL DA PÁGINA ---

const LibraryPage = () => {
  return (
    <div className="px-4 lg:px-8 xl:px-12 py-6">
      {/* Seção de Botões de Ação e Breadcrumb */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-sm text-gray-500">
          Mapa de Alertas / <span className="font-semibold text-green-700">Biblioteca de Espécies</span>
          <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded-md">Catálogo: Uberlândia</span>
        </div>
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
                <Leaf size={18} />
                Prevenção
            </button>
            <button className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
                <Phone size={18} />
                Ligar 193
            </button>
        </div>
      </div>
      
      {/* Barra de Busca */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Buscar por nome comum ou científico..."
          className="w-full py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      {/* Conteúdo Principal: Filtros + Grid */}
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar />
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {speciesData.map(species => (
            <SpeciesCard key={species.name} species={species} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default LibraryPage;