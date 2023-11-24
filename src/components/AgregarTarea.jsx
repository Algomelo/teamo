import { useState } from "react"

export const AgregarTarea = ({AgregarTarea}) => {
    const [inputValue, setInputValue ] =  useState ('')
    const onInputChange=(event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) =>{
        const envio = {
            nombre: inputValue,
            visto: false
        }
        event.preventDefault()
        AgregarTarea(tareas => [...tareas, envio])
    }
  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="ingresar tarea"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>

    )
}
