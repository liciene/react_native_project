import {useNavigation} from '@react-navigation/native';

const useGroup1 = () => {
  const navigation = useNavigation();
  const navigate1001 = () => {
    navigation.navigate('1001');
  };
  const navigate1002 = () => {
    navigation.navigate('1002');
  };
  const navigate1003 = () => {
    navigation.navigate('1003');
  };
  const navigate1004 = () => {
    navigation.navigate('1004');
  };

  return {navigate1001, navigate1002, navigate1003, navigate1004};
};

export default useGroup1;
