import {useCallback, useState} from 'react';

const useURI1004 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const multiplyTwoNumbers = useCallback(() => {
    const calcValue = parseInt(num1, 0) * parseInt(num2, 0);
    setResult(calcValue);
  }, [num1, num2]);

  return {num1, setNum1, num2, setNum2, result, multiplyTwoNumbers};
};

export default useURI1004;
