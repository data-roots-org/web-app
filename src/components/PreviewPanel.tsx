import { Download, Share2 } from "lucide-react";

const PreviewPanel = () => {
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                    <button className="px-4 py-1 text-sm font-semibold text-white bg-green-600 rounded-md">Mapa</button>
                    <button className="px-4 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-200 rounded-md">Grade</button>
                </div>
                <div className="flex gap-2">
                     <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                        <Download size={14} /> Exportar
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                        <Share2 size={14} /> Compartilhar
                    </button>
                </div>
            </div>
            <div className="flex-grow bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Pré-visualização do plantio (mapa/grade)</p>
            </div>
        </div>
    );
};

export default PreviewPanel;