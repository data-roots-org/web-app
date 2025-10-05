import type { ReactNode } from 'react';

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const PlantIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

interface CardProps {
  icon: ReactNode;
  title: string;
  titleColor: string;
  linkText: string;
  linkColor: string;
  children: ReactNode;
}

const InfoCard = ({ icon, title, titleColor, children, linkText, linkColor }: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex-1 min-w-[300px]">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h2 className={`text-xl font-bold ${titleColor}`}>{title}</h2>
      </div>
      <div className="text-gray-600 text-sm space-y-2 mb-4">
        {children}
      </div>
      <a href="#" className={`font-bold ${linkColor} hover:underline`}>
        {linkText}
      </a>
    </div>
  );
};

const InfoCards = () => {
    return (
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard 
                icon={<AlertIcon />} 
                title="Emergência: O que Fazer Agora?" 
                titleColor="text-red-600"
                linkText="Ver rotas seguras"
                linkColor="text-red-600"
            >
                <ul className="list-disc list-inside">
                    <li>Afaste-se da área e siga rotas de evacuação indicadas.</li>
                    <li>Proteja vias respiratórias com pano úmido.</li>
                    <li>Informe localização precisa e focos visíveis.</li>
                </ul>
            </InfoCard>

            <InfoCard 
                icon={<PlantIcon />} 
                title="Prevenção: Plantio Inteligente." 
                titleColor="text-green-800"
                linkText="Ver mapas de risco"
                linkColor="text-green-800"
            >
               <p>
                 Use espécies grandes e resistentes ao fogo como quebra-vento em áreas abertas e bordas urbanas. Priorize espaçamentos, umidade do solo e manutenção.
               </p>
            </InfoCard>

            <InfoCard 
                icon={<BookIcon />} 
                title="Mercado e Biblioteca." 
                titleColor="text-blue-800"
                linkText="Abrir biblioteca"
                linkColor="text-blue-800"
            >
               <p>
                 Acesse o catálogo de espécies e encontre mudas resistentes ao fogo com fornecedores locais de Uberlândia.
               </p>
            </InfoCard>
        </section>
    )
}


export default InfoCards;