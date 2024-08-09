import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



export default function Home(): JSX.Element {

  
  return (
    <div className="shadow-lg p-8 rounded-xl text-center">
      <h1 className="text-8xl">QuizApp!</h1>
      <p>Test your knowledge</p>
      <button className="
      bg-btnQuiz text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      ">
        Start Quiz
      </button>
    </div>
  )
}