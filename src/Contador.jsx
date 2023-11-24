import { useState } from 'react'
export const  Contador = ({value}) => {

    const [contador, setContador] = useState(value)

    const handleClick = () => {
        setContador( contador + 1 )
    }
    return (
        <>  
            <h1>contador</h1>
            <p>{contador}</p>
            <button onClick={handleClick}>
                boton
            </button>
        </>
        ) 
        }

    
