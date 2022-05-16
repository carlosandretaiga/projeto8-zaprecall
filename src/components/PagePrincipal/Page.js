import { dataQuestions } from "../../data/dataQuestions";

import RenderPage from "./RenderPage";

export default function Page(props) {

    const {redAct, setPoints} = props; 

    return (
        <>
        <main>
            {
                dataQuestions.sort().map((dataQuestions, index) => 
                <RenderPage key={index} dataQuestions={dataQuestions} index={index} redAct={redAct} setPoints={setPoints}/>)

            }
        </main>
        </>
    )
}