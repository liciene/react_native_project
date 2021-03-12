import {useState} from 'react';

const useUri1019 = () => {
  const [getSeconds, setGetSeconds] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');

  const calcTime = () => {
    const calcHour = Math.floor(getSeconds / (60 * 60));
    setHour(calcHour);
    const calcMinite = Math.floor((getSeconds / 60) % 60);
    setMinute(calcMinite);
    const calcSecond = Math.floor((getSeconds % 60) % 60);
    setSecond(calcSecond);
  };
  return {
    getSeconds,
    setGetSeconds,
    hour,
    minute,
    second,
    calcTime,
  };
};

export default useUri1019;
