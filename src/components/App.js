import React from "react";

import Resto from "./Resto";
import Splash from "./Splash";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";

export default function App() {

    const [init, setInit] = React.useState(false); 
   
    return (
        <>
           { !init ?

            <Splash setInit={setInit}/> 
            : 
            <Resto /> 

           }
           
        </>
    )
}