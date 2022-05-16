import React from "react"

import logo from "../../assets/images/logo.svg"

export default function InitPage () {

    const [visible, setVisible] = React.useState(true); 

    return (visible ? (
        <div className="content">
            <img className="logo" src={logo} alt="logo" ></img>

            <h1>ZapRecall</h1>
            <div className="init-button" onClick={() => setVisible(false)}>
                <p>Iniciar Recall!</p>
            </div>
        </div>
    ) : <></>)
}