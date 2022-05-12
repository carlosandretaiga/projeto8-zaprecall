import Menu from "./components/Menu";

export default function App() {

    return (
        <>
            <Menu />
            <div className="content">
                 
                <img src="./assets/images/logo.svg" alt="" />

                <h1>ZapRecall</h1>

                <button className="button">
                    <p>Iniciar Recall!</p></button>
            </div>
        
        </>
    )
}