import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [displayNumero, setDisplayNumero] = useState('');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
    setDisplayNumero('');
  };

  const armarNumero = (numeroTexto: string) => {
    setDisplayNumero('');
    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //evaluar si es otro cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        //evaluar si es un nro diferente a cero y no tiene punto, elimino cero a la izq
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        //evitar el 000.00
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero(numero.replace('', '-'));
    }
  };

  const btnDelete = () => {
    if (numero.length === 1) {
      setNumero('0');
    } else if (numero.length === 2 && numero.includes('-')) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };
  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };
  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setDisplayNumero(`${num1 + num2}`);
        setNumero('0');

        break;
      case Operadores.restar:
        setDisplayNumero(`${num2 - num1}`);
        setNumero('0');

        break;
      case Operadores.multiplicar:
        setDisplayNumero(`${num1 * num2}`);
        setNumero('0');

        break;
      case Operadores.dividir:
        setDisplayNumero(`${num2 / num1}`);
        setNumero('0');

        break;
    }
    setNumeroAnterior('0');
  };

  return {
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
    numero,
    numeroAnterior,
    displayNumero,
  };
};
