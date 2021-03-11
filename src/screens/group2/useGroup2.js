import {useNavigation} from '@react-navigation/native';

const useGroup2 = () => {
  const navigation = useNavigation();
  const navigate1005 = () => {
    navigation.navigate('1005');
  };
  const navigate1006 = () => {
    navigation.navigate('1006');
  };
  const navigate1007 = () => {
    navigation.navigate('1007');
  };
  const navigate1008 = () => {
    navigation.navigate('1008');
  };

  return {navigate1005, navigate1006, navigate1007, navigate1008};
};

export default useGroup2;
