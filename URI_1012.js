import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Basic1012 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');

  const [tri, setTri] = useState('');
  const [circ, setCirc] = useState('');
  const [trap, setTrap] = useState('');
  const [quad, setQuad] = useState('');
  const [ret, setRet] = useState('');

  const calc = () => {
    const calcTri = (parseFloat(num1) * parseFloat(num3)) / 2;
    setTri(calcTri.toFixed(3));

    const calcCirc = 3.14159 * parseFloat(Math.pow(num3, 2));
    setCirc(calcCirc.toFixed(3));

    const calcTrap =
      ((parseFloat(num1) + parseFloat(num2)) * parseFloat(num3)) / 2;
    setTrap(calcTrap.toFixed(3));

    const calcQuad = parseFloat(num2) * parseFloat(num2);
    setQuad(calcQuad.toFixed(3));

    const calcRet = parseFloat(num1) * parseFloat(num2);
    setRet(calcRet.toFixed(3));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de área</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="A"
          value={num1}
          onChangeText={setNum1}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="B"
          value={num2}
          onChangeText={setNum2}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="C"
          value={num3}
          onChangeText={setNum3}
        />
      </View>
      <Text style={styles.text}>{`TRIÂNGULO = ${tri}`}</Text>
      <Text style={styles.text}>{`CÍRCULO = ${circ}`}</Text>
      <Text style={styles.text}>{`TRAPÉZIO = ${trap}`}</Text>
      <Text style={styles.text}>{`QUADRADO = ${quad}`}</Text>
      <Text style={styles.text}>{`RETÂNGULO = ${ret}`}</Text>
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
  containerTextInput: {
    marginTop: 10,
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
    fontSize: 20,
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

export default Basic1012;
