import {useNavigation} from '@react-navigation/native';

const useGroup3 = () => {
  const navigation = useNavigation();
  const navigate1009 = () => {
    navigation.navigate('1009');
  };
  const navigate1010 = () => {
    navigation.navigate('1010');
  };
  const navigate1011 = () => {
    navigation.navigate('1011');
  };
  const navigate1012 = () => {
    navigation.navigate('1012');
  };
  return {navigate1009, navigate1010, navigate1011, navigate1012};
};

export default useGroup3;
