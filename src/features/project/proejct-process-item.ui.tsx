interface ProcessItemProps {
  title: string;
  value: number;
}

export const ProjectProcessItem = (props: ProcessItemProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="text-gray-500">{props.title}</h4>
      <p className="text-2xl font-bold text-gray-500">{props.value}</p>
    </div>
  );
};
