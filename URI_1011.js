import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

const Basic1011 = () => {
  const [raio, setRaio] = useState('');
  const [esfera, setEsfera] = useState('');

  const calc = () => {
    const calcValue = (4 / 3) * 3.14159 * Math.pow(raio, 3);
    setEsfera(calcValue.toFixed(3));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Volume de uma esfera</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Raio"
        value={raio}
        onChangeText={setRaio}
        keyboardType="number-pad"
      />
      <Text style={styles.text}>{`VOLUME = ${esfera}`}</Text>
      <TouchableOpacity onPress={calc}>
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

export default Basic1011;
