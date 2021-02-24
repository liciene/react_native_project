import {useState} from 'react';

const useURI1003 = () => {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [total, setTotal] = useState('');

  const sumTwoNumbers = () => {
    const calcValue = parseInt(numA, 0) + parseInt(numB, 0);
    setTotal(calcValue);
  };

  return {numA, setNumA, numB, setNumB, total, sumTwoNumbers};
};

export default useURI1003;
