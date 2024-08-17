
interface ButtonProps {
  className?: string;
  event?: () => void;
  children: string | React.ReactNode
  disabled?: boolean;
}


export default function Button(
  { className, event, children, disabled }: ButtonProps

): JSX.Element {
  return (
    <button className={`
     font-bold text-5xl
     p-4 rounded-lg pulse shadow-lg
      ${className} 
      `}
      onClick={event}
      disabled={disabled}
    >
      {children}
    </button>
  )
}