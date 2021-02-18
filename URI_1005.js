import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const Basic1005 = () => {
  const [notaA, setNotaA] = useState('');
  const [notaB, setNotaB] = useState('');
  const [media, setMedia] = useState('');
  const calc = () => {
    const calcValue = (parseFloat(notaA) * 3.5 + parseFloat(notaB) * 7.5) / 11;
    setMedia(calcValue.toFixed(5));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média entre duas notas</Text>
      <Text style={styles.textObs}>
        {
          'Obs.: a primeira nota tem peso 3.5 e a segunda nota tem peso 7.5 (total peso 11)'
        }
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Primeira nota"
          value={notaA}
          onChangeText={setNotaA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Segunda nota"
          value={notaB}
          onChangeText={setNotaB}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`MÉDIA = ${media}`}</Text>
      <TouchableOpacity onPress={calc}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular média</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  containerTextInput: {
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
    fontSize: 28,
  },

  text: {
    fontSize: 20,
    alignSelf: 'center',
  },

  textObs: {
    padding: 5,
    fontSize: 12,
    textAlign: 'center',
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

export default Basic1005;
