import {useState} from 'react';

const useUri1017 = () => {
  const [hour, setHour] = useState('');
  const [km, setKm] = useState('');
  const [result, setResult] = useState('');

  const calcFuel = () => {
    const calcTotal = parseInt(hour, 0) * (parseInt(km, 0) / 12);
    setResult(calcTotal.toFixed(3));
  };

  return {
    hour,
    setHour,
    km,
    setKm,
    result,
    calcFuel,
  };
};

export default useUri1017;
