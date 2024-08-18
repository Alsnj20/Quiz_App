import timeImage from '../img/time.png'
import Button from './Button'

interface ClockProps {
  time: number
}


export default function Clock({ time }: ClockProps): JSX.Element {

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const hoursF = hours < 10 ? `0${hours}` : hours
    const minutes = Math.floor(time / 60)
    const minutesF = minutes < 10 ? `0${minutes}` : minutes
    const seconds = time % 60
    const secondsF = seconds < 10 ? `0${seconds}` : seconds
    return `${hoursF}:${minutesF}:${secondsF}`
  }

  return (
    <Button className="transition-none
    flex justify-between items-center  gap-4
    bg-[#a7d5db] text-text-secondary
    hover:transform-none
    ">
      <img src={timeImage}
        alt='time' className='w-10 h-auto' />
      {formatTime(time)}
    </Button>
  )
}