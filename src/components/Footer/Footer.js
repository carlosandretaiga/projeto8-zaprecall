import { dataQuestions } from '../../data/dataQuestions'; 

import check from "../../assets/images/checkmark-circle.svg"; 
import help from "../../assets/images/help-circle.svg"; 
import close from "../../assets/images/close-circle.svg"; 

import happy from "../../assets/images/party.svg"; 

import sad from "../../assets/images/sad.svg"; 


export default function Footer(props) {

    const {activity, points} = props; 

    const images = [
        {class: 'close', src: close, alt: "img-close"},
        {class: "help", src: help, alt: "img-help"}, 
        {class: "check", src: check, alt: "img-check" }
    ]; 

    const advertiseUser = [
        {
            src: happy,
            alt: "happy",
            class: "happy",
            title: "Parabéns!",
            mensage: "Você não esqueceu de nenhum flashcard!",
        },
        {

            src: sad,
            alt: "sad",
            class: "sad",
            title: "Poxa...!",
            mensage: "Ainda faltam alguns... mas não desanime, você consegue!",

        },
    ]; 


    return (
        <>
            <footer className={activity.length === dataQuestions.length ? "end-footer":"footer"}>
                {activity.length === dataQuestions.length ? (
                    <div className='end-game'>
                        <header className='game-title'>
                            <img key = {points} className = {advertiseUser[points].class} src={advertiseUser[points].src} alt={advertiseUser[points].alt} />
                            <h2>{advertiseUser[points].title}</h2>
                        </header>
                        <p>{advertiseUser[points].mensage}</p>
                    </div>
                ) : (
                    <></>
                )}
                <h2>
                    {activity.length}/{dataQuestions.length} CONCLUÍDOS
                </h2>

                <div>
                    {activity.map((img,index) =>(
                        <img key={index} 
                        className={images[img].class}
                        src={images[img].src}
                        alt={images[img].alt}
                        />
                    ))}
                </div>

            </footer>
        </>
 
    )
}