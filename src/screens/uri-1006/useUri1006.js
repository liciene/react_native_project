import {useState} from 'react';

const useURI1006 = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media, setMedia] = useState('');

  const calcAverage = () => {
    const calcValue =
      (parseFloat(nota1) * 2 + parseFloat(nota2) * 3 + parseFloat(nota3) * 5) /
      10;
    setMedia(calcValue.toFixed(1));
  };

  return {
    nota1,
    setNota1,
    nota2,
    setNota2,
    nota3,
    setNota3,
    media,
    calcAverage,
  };
};

export default useURI1006;
