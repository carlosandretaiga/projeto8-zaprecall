export default function Menu() {

    const nomes = ["João", "Maria", "José"]; 

    //Destruturação
    const [joao, maria] = nomes; 

    console.log(joao); 
    console.log(maria); 

    return (
        <u>
            <li>
                Home
            </li>
        </u>
      
    )
}