import {useNavigation} from '@react-navigation/native';

const useGroup4 = () => {
  const navigation = useNavigation();
  const navigate1013 = () => {
    navigation.navigate('1013');
  };
  const navigate1014 = () => {
    navigation.navigate('1014');
  };
  const navigate1015 = () => {
    navigation.navigate('1015');
  };
  const navigate1016 = () => {
    navigation.navigate('1016');
  };
  return {navigate1013, navigate1014, navigate1015, navigate1016};
};

export default useGroup4;
