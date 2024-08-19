
type BarProps = {
  width: number;
}

export default function Bar({ width }: BarProps): JSX.Element {
  return (
    <div className="bg-btnQuiz rounded-full w-full h-7 p-[0.32rem]">
      <div className="rounded-full bg-btnQuiz-variant h-full      
      " style={{
          width: `${width}%`,
          transition: 'width 0.5s ease-in-out'

        }}></div>
    </div>
  );
}