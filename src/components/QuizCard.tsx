import React from 'react';

interface QuizCardProps {
  nro: number;
  question: {
    question: string;
    answers: {
      text: string;
      correct: boolean;
    }[];
  };
}


export default function QuizCard({nro= 1, question={}}): JSX.Element {
  return (
    <div>
        <h3>Question {nro}</h3>
        <h2>{question.question}</h2>
        <p>Select one:</p>
        <div>
          {question.answers.map((answer, index) => (
            <div>
              <p>{answer.text}</p>
            </div>
          ))}
        </div>


    </div>
    
  )
}