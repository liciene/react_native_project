import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Basic1009 = () => {
  const [nome, setNome] = useState('');
  const [salario, setSalario] = useState('');
  const [vendas, setVendas] = useState('');
  const [total, setTotal] = useState('');

  const calc = () => {
    const calcValue = parseFloat(salario) + parseFloat(vendas) * (15 / 100);
    setTotal(calcValue.toFixed(2));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Salário com bônus</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Funcionário"
          value={nome}
          onChangeText={setNome}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Salário"
          value={salario}
          onChangeText={setSalario}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Nº de vendas"
          value={vendas}
          onChangeText={setVendas}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.containerResult}>
        <Text>{`FUNCIONÁRIO = ${total && nome}`}</Text>
        <View style={styles.divider} />
        <Text>{`TOTAL = ${total}`}</Text>
      </View>
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

export default Basic1009;
