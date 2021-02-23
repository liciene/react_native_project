import {useState} from 'react';

const useURI1009 = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [sale, setSale] = useState('');
  const [total, setTotal] = useState('');

  const calcSalary = () => {
    const calcValue = parseFloat(salary) + parseFloat(sale) * (15 / 100);
    setTotal(calcValue.toFixed(2));
  };

  return {
    name,
    setName,
    salary,
    setSalary,
    sale,
    setSale,
    total,
    calcSalary,
  };
};

export default useURI1009;
