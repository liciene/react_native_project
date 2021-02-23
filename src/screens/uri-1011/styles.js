import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  textInput: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    fontSize: 26,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
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
    fontSize: 20,
  },
});

export default styles;
