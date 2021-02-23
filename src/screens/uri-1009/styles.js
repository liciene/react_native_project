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

  containerResult: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  divider: {
    marginHorizontal: 5,
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
    fontSize: 16,
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
