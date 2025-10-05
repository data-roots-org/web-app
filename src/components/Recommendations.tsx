/* eslint-disable @typescript-eslint/no-explicit-any */
import { Combine, Leaf, MapPin } from "lucide-react";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
    {children}
  </span>
);

const InfoCard = ({
  icon: Icon,
  title,
  description,
  tags,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  tags: string[];
}) => (
  <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-4">
    <Icon className="w-6 h-6 text-green-700 mt-1" />
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-600 mt-1 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  </div>
);

const Recommendations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <InfoCard
        icon={Combine}
        title="Mix recomendado"
        description="Combine Ipês, Oitis e Sibipirunas para sazonalidade e sombra."
        tags={["Ipê Amarelo", "Oiti", "Sibipiruna"]}
      />
      <InfoCard
        icon={MapPin}
        title="Pontos de plantio"
        description="Use praças e calçadas largas do bairro escolhido."
        tags={["Praças", "Escolas", "Parques"]}
      />
      <InfoCard
        icon={Leaf}
        title="Práticas de manejo"
        description="Irrigue nos primeiros 90 dias e adube a cada 6 meses."
        tags={[]}
      />
    </div>
  );
};

export default Recommendations;
