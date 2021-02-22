import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const Basic1008 = () => {
  const [funcionario, setFuncionario] = useState('');

  const [hora, setHora] = useState('');
  const [valor, setValor] = useState('');
  const [salario, setSalario] = useState('');

  const calc = () => {
    const calcValue = hora * valor;
    setSalario(calcValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de salário</Text>
      <Text style={styles.textObs}>
        {'Retorna número do funcionário e salário'}
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Funcionário"
          value={funcionario}
          onChangeText={setFuncionario}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Hr trabalhadas"
          value={hora}
          onChangeText={setHora}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor por hora"
          value={valor}
          onChangeText={setValor}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`Funcionário: ${
        salario && funcionario
      } `}</Text>
      <Text style={styles.text}>{`Salário = R$ ${salario}`}</Text>
      <TouchableOpacity onPress={calc}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular salário</Text>
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
    fontSize: 16,
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

export default Basic1008;
