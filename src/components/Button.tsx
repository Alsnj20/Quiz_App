
interface ButtonProps {
  style?: string;
  event: () => void;
  children: string;
}


export default function Button(
  { style, event, children }: ButtonProps

): JSX.Element {
  return (
    <button className={`
      bg-btnQuiz text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      ${style}
      `}
      onClick={event}
    >
      {children}
    </button>
  )
}