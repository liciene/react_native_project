import {useState} from 'react';

const useURI1008 = () => {
  const [functionary, setFunctionary] = useState('');

  const [hour, setHour] = useState('');
  const [value, setValue] = useState('');
  const [salary, setSalary] = useState('');

  const calcSalary = () => {
    const calcValue = hour * value;
    setSalary(calcValue);
  };

  return {
    functionary,
    setFunctionary,
    hour,
    setHour,
    value,
    setValue,
    salary,
    calcSalary,
  };
};

export default useURI1008;
