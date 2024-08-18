
export interface ModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}


export function Modal({ title, isOpen, onClose, children }: ModalProps): JSX.Element {

  return (
    <div>
      {isOpen && (
        <div className={`showModal fixed inset-0 flex items-center justify-center bg-transparent w-full bg-red-300`}
        >
          <div className='bg-white p-8 rounded shadow w-[50%] flex flex-col gap-8'>
            <h2 className='text-4xl text-center'>{title}</h2>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}