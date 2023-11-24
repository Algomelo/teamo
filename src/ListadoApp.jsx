import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"


const Items = ({nombre,visto}) => {
    return (
        <li>{nombre}
            {visto ? '❤ ' : '🤢'}
        </li>
    )
}

export const ListadoApp = () => {
    let listado = [
        {nombre: 'Item1', visto: true },
        {nombre: "Item2", visto: true },
        {nombre: 'Item3', visto: true },
        {nombre: 'Item4', visto: true },
        {nombre: 'Item5', visto: false },
    ]
    const [arreglo, setArreglo] = useState(listado)
    console.log(arreglo)
  return (
    <>
        <h1>Listado</h1>
        <ol>       
        <AgregarTarea AgregarTarea={setArreglo}></AgregarTarea>
 
             {arreglo.map(x => <Items key={x.nombre} nombre={x.nombre} visto={x.visto}></Items>)}
             
        </ol>
    </>
    
  )
}
