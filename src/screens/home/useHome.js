import {useNavigation} from '@react-navigation/native';

const useHome = () => {
  const navigation = useNavigation();
  const openModal = () => {
    navigation.openDrawer();
  };
  return {openModal};
};

export default useHome;
