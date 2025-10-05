import { Check, Map, Scaling, Shuffle, Square, ThermometerSnowflake, Trees, Waypoints } from "lucide-react";
import React from "react";
import type { LucideProps } from "lucide-react";

const SummaryStat = ({ icon: Icon, value, label }: { icon: React.ComponentType<LucideProps>; value: string; label: string; }) => (
    <div className="flex items-center gap-3 bg-green-50/50 p-2 rounded-lg">
        <Icon className="w-6 h-6 text-green-700" />
        <div>
            <p className="font-bold text-sm">{value}</p>
            <p className="text-xs text-gray-600">{label}</p>
        </div>
    </div>
);

const Suggestion = ({ icon: Icon, text }: { icon: React.ComponentType<LucideProps>; text: string; }) => (
    <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-green-700 flex-shrink-0" />
        <p className="text-sm text-gray-700">{text}</p>
    </div>
);

const SummaryPanel = () => {
    return (
        <div className="bg-white p-5 rounded-xl border border-gray-200 h-full flex flex-col">
            <h3 className="font-bold mb-4">Resumo do cenário</h3>
            <div className="grid grid-cols-2 gap-3">
                <SummaryStat icon={Trees} value="50 árvores" label="" />
                <SummaryStat icon={Scaling} value="5 m" label="espaçamento" />
                <SummaryStat icon={Square} value="1.2 ha" label="cobertos" />
                <SummaryStat icon={ThermometerSnowflake} value="-1.8°C" label="ilhas de calor" />
            </div>
            
            <h3 className="font-bold mt-6 mb-3">Sugestões</h3>
            <div className="space-y-3">
                <Suggestion icon={Shuffle} text="Mix de espécies recomendado" />
                <Suggestion icon={Waypoints} text="Espaçar 6 m em vias estreitas" />
            </div>

            <div className="mt-auto pt-6 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-gray-700 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200">
                    <Map size={16} /> Ajustar no mapa
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-white bg-green-600 rounded-lg font-semibold hover:bg-green-700">
                    <Check size={16} /> Salvar cenário
                </button>
            </div>
        </div>
    );
};

export default SummaryPanel;