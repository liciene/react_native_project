import {useNavigation} from '@react-navigation/native';

const useGroup5 = () => {
  const navigation = useNavigation();
  const navigate1017 = () => {
    navigation.navigate('1017');
  };
  const navigate1018 = () => {
    navigation.navigate('1018');
  };
  const navigate1019 = () => {
    navigation.navigate('1019');
  };
  const navigate1020 = () => {
    navigation.navigate('1020');
  };
  return {navigate1017, navigate1018, navigate1019, navigate1020};
};

export default useGroup5;
