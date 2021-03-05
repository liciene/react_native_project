import {useEffect, useState} from 'react';

const useURI1005 = () => {
  const [notaA, setNotaA] = useState('');
  const [notaB, setNotaB] = useState('');
  const [media, setMedia] = useState('');

  useEffect(() => {
    const calcValue = (parseFloat(notaA) * 3.5 + parseFloat(notaB) * 7.5) / 11;
    setMedia(calcValue.toFixed(5));
  }, [notaA, notaB]);

  return {notaA, setNotaA, notaB, setNotaB, media};
};

export default useURI1005;
