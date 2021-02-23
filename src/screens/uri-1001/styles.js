import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerTextInput: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    fontSize: 16,
    flex: 1,
  },

  text: {
    fontSize: 22,
    alignSelf: 'center',
  },

  button: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    fontSize: 16,
  },

  container: {
    padding: 5,
  },

  divider: {
    marginHorizontal: 5,
  },
});
export default styles;
