
interface ButtonProps {
  className?: string;
  event?: () => void;
  children: string | React.ReactNode
}


export default function Button(
  { className, event, children }: ButtonProps

): JSX.Element {
  return (
    <button className={`
     font-bold text-5xl
     p-4 rounded-lg pulse shadow-lg
      ${className} 
      `}
      onClick={event}
    >
      {children}
    </button>
  )
}