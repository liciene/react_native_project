import {useEffect, useState} from 'react';

const useURI1001 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const calcValue = parseInt(num1, 0) + parseInt(num2, 0);
    setResult(calcValue);
  }, [num1, num2]);

  return {
    num1,
    num2,
    setNum1,
    setNum2,
    result,
  };
};

export default useURI1001;
