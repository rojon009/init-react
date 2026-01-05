interface StatsCardProps {
  title: string;
  value: number | string;
}

export const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

