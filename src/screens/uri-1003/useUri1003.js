import {useEffect, useState} from 'react';

const useURI1003 = () => {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    const calcValue = parseInt(numA, 0) - parseInt(numB, 0);
    setTotal(calcValue);
  }, [numA, numB]);

  return {numA, setNumA, numB, setNumB, total};
};

export default useURI1003;
