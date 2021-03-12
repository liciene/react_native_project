import {useState} from 'react';

const useUri1018 = () => {
  const [money, setMoney] = useState('');
  const [calc100, setCalc100] = useState(0);
  const [calc50, setCalc50] = useState(0);
  const [calc20, setCalc20] = useState(0);
  const [calc10, setCalc10] = useState(0);
  const [calc5, setCacl5] = useState(0);
  const [calc2, setCacl2] = useState(0);
  const [calc1, setCacl1] = useState(0);

  const calcMoneyBill = () => {
    const val100 = Math.floor(money / 100);
    setCalc100(val100);
    const money2 = money - val100 * 100;
    const val50 = Math.floor(money2 / 50);
    setCalc50(val50);
    const money3 = money2 - val50 * 50;
    const val20 = Math.floor(money3 / 20);
    setCalc20(val20);
    const money4 = money3 - val20 * 20;
    const val10 = Math.floor(money4 / 10);
    setCalc10(val10);
    const money5 = money4 - val10 * 10;
    const val5 = Math.floor(money5 / 5);
    setCacl5(val5);
    const money6 = money5 - val5 * 5;
    const val2 = Math.floor(money6 / 2);
    setCacl2(val2);
    const money7 = money6 - val2 * 2;
    const val1 = Math.floor(money7 / 1);
    setCacl1(val1);
  };
  return {
    money,
    setMoney,
    calc100,
    calc50,
    calc20,
    calc10,
    calc5,
    calc2,
    calc1,
    calcMoneyBill,
  };
};

export default useUri1018;
