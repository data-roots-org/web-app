import { Leaf, Plus, Sprout, Thermometer, TrendingUp, Users } from "lucide-react";
import StatCard from "./StatCard";

const statsData = [
    {
        icon: Plus,
        value: "+1.250",
        label: "mudas ofertadas",
        description: "Total de doações registradas",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        icon: Sprout,
        value: "85",
        label: "espécies",
        description: "Diversidade disponível",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        icon: Thermometer,
        value: "3.4k",
        label: "simulações",
        description: "Planejamentos de plantio",
        bgColor: "bg-orange-100",
        iconColor: "text-orange-600",
    },
    {
        icon: TrendingUp,
        value: "+220 ha",
        label: "projetados",
        description: "Áreas sombreadas se mudas forem plantadas",
        bgColor: "bg-sky-100",
        iconColor: "text-sky-600",
    },
    {
        icon: Users,
        value: "Top parceiros",
        label: "Viveiro Municipal, Raízes do Cerrado, Verdomorado",
        description: "", // No description for this one
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
    },
    {
        icon: Leaf,
        value: "+1.8k t CO₂e",
        label: "carbono sequestrado",
        description: "Estimado",
        bgColor: "bg-teal-100",
        iconColor: "text-teal-600",
    },
];


const Stats = () => {
    return (
        <section>
            <h3 className="text-2xl font-bold mb-6">Nosso Impacto Coletivo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statsData.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
            <div className="mt-10 text-center">
                <p className="mb-4 text-gray-600">Junte-se à rede que está verdejando Uberlândia.</p>
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
                    Registrar suas mudas
                </button>
            </div>
        </section>
    )
}

export default Stats;