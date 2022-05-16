import ReactDOM from "react-dom";
import React from "react"; 

import InitPage from "./components/InitPage/InitPage"; 
import "./assets/styles/reset.css"; 
import "./assets/styles/style.css"; 

import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer"
import PagePrincipal from "./components/PagePrincipal/Page"

export default function App() {
    const [activity, setActivity] = React.useState([]); 
    const [points, setPoints] = React.useState(0); 

    function redAct(type) {
        setActivity(act => [...act, type])
    }

    return (
        <>
        <div id="page">
            <InitPage /> 
            <Header /> 
            <PagePrincipal redAct={redAct} setPoints={setPoints} /> 
            <Footer activity={activity} points={points} /> 
        </div>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root")); 