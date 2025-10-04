import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex justify-between items-center bg-green-50 p-8 rounded-xl">
      <div className="w-2/3">
        <h2 className="text-4xl font-bold leading-tight">
          Green Pathways: O Mapa para uma Uberlândia Mais Fresca e Saudável
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Descubra as áreas mais arborizadas de nossa cidade com o nosso mapa de calor interativo. Use o simulador para calcular quantas árvores plantar e veja o impacto real no microclima. Use os nossos dados em ação e comece a construir hoje uma cidade mais respirável e com qualidade de vida.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
            Registrar mudas
          </button>
          <button className="px-8 py-3 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-100 transition-colors text-lg">
            Simular plantio
          </button>
        </div>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-sm ml-8">
          <MapPin className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold">Comece pelo seu bairro</h3>
          <p className="text-gray-500 text-center text-sm mt-2">Veja o mapa, escolha espécies e mobilize vizinhos.</p>
      </div>
    </section>
  );
};

export default Hero;