

import logo from '../assets/images/logo.svg'

export default function Splash({setInit}) {
 
    return (
        <>
            <div className="content">
                <img className='content-img' src={logo} alt="" />
                <h1>ZapRecall</h1>
                <button onClick={() => setInit(true)} className="button">
                    <p>Iniciar Recall!</p>
                </button>
            </div>
        
        </>
    )
}