import {useCallback, useState} from 'react';

const useURI1002 = () => {
  const [radius, setRadius] = useState('');
  const [result, setResult] = useState('');

  const calcCircleArea = useCallback(() => {
    const radius2 = Math.pow(radius, 2);
    const areaCirc = (3.14159 * radius2).toFixed(4);
    setResult(areaCirc);
  }, [radius]);

  return {
    radius,
    setRadius,
    result,
    calcCircleArea,
  };
};

export default useURI1002;
