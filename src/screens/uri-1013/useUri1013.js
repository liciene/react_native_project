import {useState} from 'react';

const useURI1013 = () => {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [numC, setNumC] = useState('');

  const [higher, setHigher] = useState('');

  const getHigherValue = () => {
    const higherAB =
      (parseFloat(numA) +
        parseFloat(numB) +
        Math.abs(parseFloat(numA) - parseFloat(numB))) /
      2;
    const higherABC =
      (higherAB + parseFloat(numC) + Math.abs(higherAB - numC)) / 2;
    setHigher(higherABC);
  };

  return {
    numA,
    setNumA,
    numB,
    setNumB,
    numC,
    setNumC,
    higher,
    getHigherValue,
  };
};

export default useURI1013;
