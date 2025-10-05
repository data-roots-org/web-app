import PreviewPanel from "../components/PreviewPanel";
import Recommendations from "../components/Recommendations";
import SimulatorForm from "../components/SimulatorForm";
import SummaryPanel from "../components/SummaryPanel";

const PlantingSimulatorPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Simulador de Plantio de Árvores
        </h2>
        <button className="px-4 py-2 text-sm font-semibold text-green-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          Cenário base
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <SimulatorForm />
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <PreviewPanel />
          </div>
          <div className="lg:col-span-5">
            <SummaryPanel />
          </div>
        </div>
      </div>

      <div>
        <Recommendations />
      </div>
    </div>
  );
};

export default PlantingSimulatorPage;
