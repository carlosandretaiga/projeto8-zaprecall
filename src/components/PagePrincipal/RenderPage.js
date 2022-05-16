import React from "react"; 

import play from "../../assets/images/play-outline.svg"
import help from "../../assets/images/help-circle.svg"
import close from "../../assets/images/close-circle.svg"
import turn from "../../assets/images/turn.svg"
import check from "../../assets/images/checkmark-circle.svg"

export default function Render(props) {

    const {dataQuestions, index, redAct, setPoints} = props;

    const images = [{class: "play", src:play, alt:"play"},
    {class: "close", src:close, alt:"close"},
    {class: "help", src:help, alt: "help"}, 
    {class: "check", src:check, alt: "check"},
    {class: "turn", src:turn, alt: "turn"}
]; 

    const [actQuestion, setActQuestion] = React.useState(-1); 

    const [answare, setAnsware] = React.useState(false); 

    const [icon, setIcon] = React.useState(0); 
    const [click, setClick] = React.useState(true); 

    const [rate, setRate] = React.useState("");


    const contentPage = answare ? dataQuestions.answare : dataQuestions.question; 

    return actQuestion === index ? (
        <article
        key={index}
        className="question"
        onClick={() => setAnsware(() => (answare ? false : true))}>

        <h2>{contentPage}</h2>

        {answare ? (
            <div className="answare-rate" onClick={() => setActQuestion(-1)}>
                <div className="dont-remember" onClick={() => setRate("red")-setIcon(1)-redAct(0)-setClick(false)-setPoints(1)}>
                    <h2>Não lembrei</h2>
                </div>

                <div className="dont-know" onClick={() => setRate("orange")-setIcon(2)-redAct(1)-setClick(false)}>
                    <h2>Quase não lembrei</h2>
                </div>

                <div className="remember" onClick={() => setRate("green")-setIcon(3)-redAct(2)-setClick(false)}>
                    <h2>Zap!</h2>
                </div>

            </div>
        ) : (
           <img className={images[4].class} src={images[4].src} alt={images[4].alt} />
        )}
        </article>
    ) : (
        <article
        key={index}
        className="init-question"
        onClick={click?(() => setActQuestion(index) - setAnsware(false)):() => setClick(false)}> 
        <h2 className= {rate}> Pergunta {index + 1}</h2>
        <img className={images[icon].class} src={images[icon].src} alt={images[icon].alt} />
        </article>
    );

}