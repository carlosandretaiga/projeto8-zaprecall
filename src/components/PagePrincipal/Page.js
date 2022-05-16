import { dataQuestions } from "../../data/dataQuestions";

import Render from "./Render";

export default function Page(props) {

    const {redAct, setPoints} = props; 

    return (
        <>
        <main>
            {
                dataQuestions.sort().map((dataQuestions, index) => 
                <Render key={index} dataQuestions={dataQuestions} index={index} redAct={redAct} setPoints={setPoints}/>)

            }
        </main>
        </>
    )
}