import {
  Leaf,
  Sprout,
  Scaling,
  Shovel,
  Droplets,
  LocateFixed,
} from "lucide-react";

const recommendedSpecies = [
  {
    name: "Pau-Ferro (Caesalpinia ferrea)",
    description: "Madeira e casca densas, alta resistência.",
  },
  {
    name: "Aroeira-Pimenteira (Schinus terebinthifolius)",
    description: "Nativa, forma barreiras densas e é muito resistente.",
  },
  {
    name: "Oiti (Licania tomentosa)",
    description: "Copa densa e grande, reduz velocidade do vento.",
  },
  {
    name: "Seringueira (Hevea brasiliensis)",
    description: "Folhagem perene e densa, boa retenção hídrica.",
  },
  {
    name: "Palmeira Real (Roystonea)",
    description: "Folhas úmidas e verticais criam zonas de baixa combustão.",
  },
];

const PreventionGuide = () => {
  return (
    <section className="mt-8">
      <div className="bg-green-50/70 border border-green-200 rounded-xl p-6 md:p-8 shadow-sm">
        <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
          Conteúdo de Prevenção
        </span>

        <div>
          <div className="flex items-center gap-3">
            <Leaf className="h-7 w-7 text-green-700" />
            <h2 className="text-xl font-bold text-green-800">
              Prevenção: Plantio Inteligente
            </h2>
          </div>
          <p className="mt-3 text-gray-700 leading-relaxed">
            A chave para proteger sua propriedade contra incêndios é a
            prevenção! Plantar árvores de forma estratégica, criando
            quebra-ventos verdes, é uma das formas mais eficazes e ecológicas de
            defesa.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            O fogo se propaga rapidamente impulsionado pelo vento. As árvores de
            quebra-vento atuam como uma barreira física, reduzindo drasticamente
            a velocidade do vento na superfície. Ao diminuir a força do vento,
            você reduz a intensidade das chamas, dificulta a propagação de
            fagulhas e oferece uma primeira linha de defesa, dando mais tempo
            para o combate. Escolher as espécies certas, que são mais
            resistentes ao fogo, transforma seu jardim em um escudo natural
            contra desastres.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-green-200">
          <div className="flex items-center gap-3">
            <Sprout className="h-7 w-7 text-green-700" />
            <h2 className="text-xl font-bold text-green-800">
              Recomendação de Plantio: Passos para o Sucesso
            </h2>
          </div>
          <div className="mt-4 space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <Scaling className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                <strong className="font-semibold text-gray-800">
                  Espaçamento Correto:
                </strong>{" "}
                Plante as mudas em linha, respeitando uma distância mínima entre
                elas, para garantir que as copas se toquem na fase adulta. Isso
                criará uma parede densa. O espaçamento ideal geralmente varia de
                3 a 5 metros entre as árvores, dependendo do porte final da
                espécie.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Shovel className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                <strong className="font-semibold text-gray-800">
                  Manejo e Limpeza:
                </strong>{" "}
                Remova a vegetação seca, folhas e galhos caídos próximos à base
                das árvores e das construções. Essa zona limpa impede que o fogo
                rasteiro encontre material combustível e atinja as copas.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Droplets className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                <strong className="font-semibold text-gray-800">
                  Irrigação:
                </strong>{" "}
                Mantenha as mudas bem irrigadas nos primeiros anos de vida para
                garantir seu estabelecimento. Uma árvore saudável e hidratada é
                muito mais resistente ao fogo do que uma seca.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <LocateFixed className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                <strong className="font-semibold text-gray-800">
                  Localização:
                </strong>{" "}
                Posicione as barreiras no sentido dos ventos predominantes da
                sua região, que geralmente são aqueles que trazem o fogo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-200">
          <div className="flex items-center gap-3">
            <Leaf className="h-7 w-7 text-green-700" />
            <h2 className="text-xl font-bold text-green-800">
              Espécies Recomendadas (Quebra-Vento e Resistência ao Fogo)
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {recommendedSpecies.map((species) => (
              <div
                key={species.name}
                className="bg-white/60 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-green-900">{species.name}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {species.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Importante:</strong> Consulte sempre o Catálogo de Espécies
            da nossa plataforma para taxa de crescimento e porte adulto e
            escolha a espécie ideal para o seu espaço.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreventionGuide;
