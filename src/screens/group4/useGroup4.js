import {useNavigation} from '@react-navigation/native';

const useGroup4 = () => {
  const navigation = useNavigation();
  const navigate1013 = () => {
    navigation.navigate('1013');
  };
  return {navigate1013};
};

export default useGroup4;
