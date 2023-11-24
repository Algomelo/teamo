import React from 'react'
import './PrimerComponente.css'
import PropTypes from 'prop-types'



export const PrimerComponente = ({titulo, subtitulo, numero}) => {
    console.log(titulo)
    console.log(subtitulo)
  return (
    <>
        <div> <h3>{titulo}</h3></div>
        <div>{subtitulo}</div>
        <div>{numero + 6}</div>
        
    </>
  )
}


PrimerComponente.PropTypes={
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
    numero: PropTypes.number.isRequired
}

PrimerComponente.defaultProps ={
    titulo: 'Titulo default',
    subtitulo: 'subtitulo default'
}