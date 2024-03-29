import {useEffect, useState} from 'react';

const useURI1007 = () => {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [numC, setNumC] = useState('');
  const [numD, setNumD] = useState('');
  const [diff, setDiff] = useState('');

  useEffect(() => {
    const calcValue =
      parseInt(numA, 0) * parseInt(numB, 0) -
      parseInt(numC, 0) * parseInt(numD, 0);
    setDiff(calcValue);
  }, [numA, numB, numC, numD]);

  return {
    numA,
    setNumA,
    numB,
    setNumB,
    numC,
    setNumC,
    numD,
    setNumD,
    diff,
  };
};

export default useURI1007;
