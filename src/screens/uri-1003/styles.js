import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  containerTextInput: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
    fontSize: 30,
    color: '#000',
  },

  text: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#000',
  },

  button: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    fontSize: 20,
  },

  divider: {
    marginHorizontal: 5,
  },
});

export default styles;
