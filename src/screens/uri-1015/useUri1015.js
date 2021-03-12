import {useState} from 'react';

const useUri1015 = () => {
  const [axisX1, setAxisX1] = useState('');
  const [axisY1, setAxisY1] = useState('');
  const [axisX2, setAxisX2] = useState('');
  const [axisY2, setAxisY2] = useState('');
  const [result, setResult] = useState('');

  const calcDistance = () => {
    const calcTotal = Math.sqrt(
      Math.pow(axisX2 - axisX1, 2) + Math.pow(axisY2 - axisY1, 2),
    );
    setResult(calcTotal.toFixed(4));
  };

  return {
    axisX1,
    setAxisX1,
    axisY1,
    setAxisY1,
    axisX2,
    setAxisX2,
    axisY2,
    setAxisY2,
    result,
    calcDistance,
  };
};

export default useUri1015;
