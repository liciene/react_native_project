import {useEffect, useState} from 'react';

const useURI1011 = () => {
  const [radius, setRadius] = useState('');
  const [sphere, setEsfera] = useState('');

  useEffect(() => {
    const calcValue = (4 / 3) * 3.14159 * Math.pow(radius, 3);
    setEsfera(calcValue.toFixed(3));
  }, [radius]);

  return {
    radius,
    setRadius,
    sphere,
  };
};

export default useURI1011;
