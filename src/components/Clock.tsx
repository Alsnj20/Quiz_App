import React, { useEffect, useState } from 'react'

import timeImage from '../img/time.png'


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
    <div className='text-center flex gap-2
    justify-center
    items-center bg-orange-300 
    rounded-full
    p-2
    '>
      <img src={timeImage}
        alt='time' className='w-8 h-8 mx-auto' />
      <h2 className='text-2xl'>
        {time.toLocaleTimeString()}
      </h2>
    </div>
  )
}