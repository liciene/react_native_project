import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Basic1002 = () => {
  const [raio, setRaio] = useState('');
  const [result, setResult] = useState('');

  const area = () => {
    const raio2 = Math.pow(raio, 2);
    const areaCirc = (3.14159 * raio2).toFixed(4);
    setResult(areaCirc);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Área do círculo</Text>
      <TextInput
        style={styles.textIput}
        placeholder="Digite o valor do raio"
        value={raio}
        onChangeText={(value) => setRaio(value)}
        keyboardType="number-pad"
      />
      <Text style={styles.text}>{`Resultado: ${result}`}</Text>
      <TouchableOpacity onPress={area}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  textIput: {
    marginBottom: 10,
    borderWidth: 1,
    color: '#000',
    fontSize: 16,
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
});

export default Basic1002;
