import {useState} from 'react';

const useUri1014 = () => {
  const [kmTotal, setKmTotal] = useState('');
  const [fuel, setFuel] = useState('');
  const [total, setTotal] = useState('');

  const calcFuel = () => {
    const calcTotal = parseInt(kmTotal, 0) / parseFloat(fuel);
    setTotal(calcTotal);
  };

  return {
    kmTotal,
    setKmTotal,
    fuel,
    setFuel,
    total,
    calcFuel,
  };
};
export default useUri1014;
