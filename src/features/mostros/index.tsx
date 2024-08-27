import { MostroProps } from './mostro';
import MostroCard from './mostroCard';
interface MostrosProps {
  mostros: MostroProps[];
}

const Mostros: React.FC<MostrosProps> = ({ mostros }) => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mostros.map((mostro) => (
          <MostroCard key={mostro.pubkey} {...mostro} />
        ))}
      </div>
    </main>
  );
};

export default Mostros;
