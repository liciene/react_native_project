import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Basic1006 = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media, setMedia] = useState('');

  const calc = () => {
    const calcValue =
      (parseFloat(nota1) * 2 + parseFloat(nota2) * 3 + parseFloat(nota3) * 5) /
      10;
    setMedia(calcValue.toFixed(1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média entre três notas</Text>
      <Text style={styles.textObs}>
        {
          'Obs.: a primeira nota tem peso 2, a segunda nota tem peso 3 e a terceira nota tem peso 5 (total peso 10)'
        }
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Primeira nota"
          value={nota1}
          onChangeText={setNota1}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Segunda nota"
          value={nota2}
          onChangeText={setNota2}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Terceira nota"
          value={nota3}
          onChangeText={setNota3}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`MEDIA = ${media}`}</Text>
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
    marginBottom: 5,
    justifyContent: 'space-between',
  },

  divider: {
    marginHorizontal: 5,
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
    fontSize: 18,
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

export default Basic1006;
