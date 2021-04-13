import {useState} from 'react';

const useUri1016 = () => {
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState('');

  const calcTime = () => {
    const calcTotal = parseInt(distance, 0) * 2;
    setResult(calcTotal);
  };
  return {
    distance,
    setDistance,
    result,
    calcTime,
  };
};

export default useUri1016;
('');
