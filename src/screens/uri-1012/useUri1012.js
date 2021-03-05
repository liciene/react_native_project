import {useCallback, useState} from 'react';

const useURI1012 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');

  const [tri, setTri] = useState('');
  const [circ, setCirc] = useState('');
  const [trap, setTrap] = useState('');
  const [quad, setQuad] = useState('');
  const [ret, setRet] = useState('');

  const calcArea = useCallback(() => {
    const calcTri = (parseFloat(num1) * parseFloat(num3)) / 2;
    setTri(calcTri.toFixed(3));

    const calcCirc = 3.14159 * parseFloat(Math.pow(num3, 2));
    setCirc(calcCirc.toFixed(3));

    const calcTrap =
      ((parseFloat(num1) + parseFloat(num2)) * parseFloat(num3)) / 2;
    setTrap(calcTrap.toFixed(3));

    const calcQuad = parseFloat(num2) * parseFloat(num2);
    setQuad(calcQuad.toFixed(3));

    const calcRet = parseFloat(num1) * parseFloat(num2);
    setRet(calcRet.toFixed(3));
  }, [num1, num2, num3]);

  return {
    num1,
    setNum1,
    num2,
    setNum2,
    num3,
    setNum3,
    tri,
    circ,
    trap,
    quad,
    ret,
    calcArea,
  };
};

export default useURI1012;
