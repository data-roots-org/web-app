import { Play, Trash2 } from "lucide-react";

const FormField = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {children}
  </div>
);

const SimulatorForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full flex flex-col">
      <div className="space-y-4 flex-grow">
        <FormField label="Área ou bairro">
          <input type="text" placeholder="Selecione bairro (ex.: Santa Mônica)" className="w-full p-2 border border-gray-300 rounded-lg" />
        </FormField>
        <FormField label="Espécie">
          <input type="text" placeholder="Ex.: Ipê Amarelo" className="w-full p-2 border border-gray-300 rounded-lg" />
        </FormField>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Quantidade">
            <input type="number" defaultValue="50" className="w-full p-2 border border-gray-300 rounded-lg" />
          </FormField>
          <FormField label="Espaçamento (m)">
            <input type="number" defaultValue="5" className="w-full p-2 border border-gray-300 rounded-lg" />
          </FormField>
        </div>
        <FormField label="Objetivo">
          <input type="text" defaultValue="Sombra urbana" className="w-full p-2 border border-gray-300 rounded-lg" />
        </FormField>
        <FormField label="Observações">
          <textarea placeholder="Notas sobre locais, restrições, etc." rows={3} className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
        </FormField>
      </div>
      <div className="mt-6 flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-700 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200">
          <Trash2 size={18} /> Limpar
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 text-white bg-green-600 rounded-lg font-semibold hover:bg-green-700">
          <Play size={18} /> Simular
        </button>
      </div>
    </div>
  );
};

export default SimulatorForm;