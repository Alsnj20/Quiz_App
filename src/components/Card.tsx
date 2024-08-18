
interface CardProps {
  children: React.ReactNode;
  color?: string;
}

export default function Card({ children, color }: CardProps): JSX.Element {
  return (
    <div className={`cardQuiz shadow-lg ${color} before:${color} before:shadow-md flex flex-col gap-2 p-4 md:p-20`}>
      {children}
    </div>
  );
}