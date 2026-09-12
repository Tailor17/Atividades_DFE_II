/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './style.css';

export default function CardImc({ pessoa }) {
  const [peso, setPeso] = useState(pessoa.peso);
  const alt = pessoa.altura;
  const [cor, setCor] = useState('lightgreen');
  const [imc, setImc] = useState(peso / alt ** 2);

  useEffect(() => {
    if (imc <= 24.5){
      setCor('lightgreen');
    } else if (imc > 24.5 && imc < 30) {
      setCor('gold');
    } else if (imc > 30){
      setCor ('#9e5353');
    }

  },[imc])

  const incrementaPeso = () => {
    let _peso = peso + 1
    setPeso(_peso);
    setImc(_peso / alt ** 2);
  };

  const decrementaPeso = () => {
    let _peso = peso - 1
    setPeso(_peso);
    setImc(_peso / alt ** 2);
  };

  return (
    <div className="imcCard"style={{backgroundColor: cor}}>
      <h1>{pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>
        Peso: {peso}
        <span onClick={incrementaPeso}>&nbsp;+&nbsp;</span>
        <span onClick={decrementaPeso}>&nbsp;-&nbsp;</span>
      </p>
      <p>Imc: {imc.toFixed(2)}</p>
    </div>
  );
}
