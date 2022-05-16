
import React from 'react';


import setinha from '../../assets/images/setinha.svg'
import './style.css'

export default function Card({questions}) {

    return (
        <>

            {questions.map((question,index) => (
            <div key={index} className="card">
            <p>{question}</p>
            <img src={setinha} alt="" />
            </div> 
             
        ))}


        </>
    )
}