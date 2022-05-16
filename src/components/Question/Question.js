import React from 'react';
import './style.css'

import next from '../../assets/images/next.svg'

export default function Question ({removePergunta,perguntas}) {

    
    return (
        <>
        
        {perguntas.map((pergunta,index) => (
            <div key={index} className="question">
            <p>{pergunta}</p>
            <img src={next} onClick={() => removePergunta(index)} alt="" />
            </div> 
             
        ))}
    
        </>
    )
}