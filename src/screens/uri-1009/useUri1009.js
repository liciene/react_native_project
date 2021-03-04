import {useEffect, useState} from 'react';

const useURI1009 = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [sale, setSale] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    const calcValue = parseFloat(salary) + parseFloat(sale) * (15 / 100);
    setTotal(calcValue.toFixed(2));
  }, [name, salary, sale]);

  return {
    name,
    setName,
    salary,
    setSalary,
    sale,
    setSale,
    total,
  };
};

export default useURI1009;
