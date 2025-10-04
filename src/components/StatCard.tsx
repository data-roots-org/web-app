import type { LucideProps } from "lucide-react";
import React from "react";

interface StatCardProps {
    icon: React.ComponentType<LucideProps>;
    value: string;
    label: string;
    description: string;
    bgColor: string;
    iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, description, bgColor, iconColor }) => {
    // Special case for partners card
    const isPartnerCard = label.startsWith("Viveiro");
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start space-x-4">
            <div className={`p-3 rounded-full ${bgColor}`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className={`font-semibold ${isPartnerCard ? 'text-sm' : ''} text-gray-700`}>{label}</p>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    )
}

export default StatCard;