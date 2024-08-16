import React, { useEffect, useState } from 'react'

import timeImage from '../img/time.png'
import Button from './Button'


export default function Clock(): JSX.Element {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Button className="transition-none
    flex justify-between items-center  gap-4
    bg-[#a7d5db] text-text-secondary
    hover:transform-none
    ">
      <img src={timeImage}
        alt='time' className='w-10 h-auto' />
      {time.toLocaleTimeString()}
    </Button>
  )
}