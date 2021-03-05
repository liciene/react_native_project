import {useCallback, useState} from 'react';

const useURI1010 = () => {
  const [amount1, setAmount1] = useState('');
  const [value1, setValue1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [value2, setValue2] = useState('');
  const [total, setTotal] = useState('');

  const calcTotalPrice = useCallback(() => {
    const calcValue =
      parseFloat(amount1) * parseFloat(value1) +
      parseFloat(amount2) * parseFloat(value2);
    setTotal(calcValue.toFixed(2));
  }, [amount1, value1, amount2, value2]);

  return {
    amount1,
    setAmount1,
    value1,
    setValue1,
    amount2,
    setAmount2,
    value2,
    setValue2,
    total,
    calcTotalPrice,
  };
};

export default useURI1010;
