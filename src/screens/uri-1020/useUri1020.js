import {useState} from 'react';

const useUri1020 = () => {
  const [getDays, setGetDays] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const calcAge = () => {
    const calcYears = Math.floor(getDays / 365);
    setYear(calcYears);
    const calcMonths = Math.floor((getDays % 365) / 30);
    setMonth(calcMonths);
    const calcDays = Math.floor((getDays % 365) % 30);
    setDay(calcDays);
  };

  return {
    getDays,
    setGetDays,
    year,
    month,
    day,
    calcAge,
  };
};

export default useUri1020;
