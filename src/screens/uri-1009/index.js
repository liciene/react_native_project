import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import useURI1009 from './useUri1009';

const Basic1009 = () => {
  const {
    name,
    setName,
    salary,
    setSalary,
    sale,
    setSale,
    total,
    calcSalary,
  } = useURI1009();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Salário com bônus</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Funcionário"
          value={name}
          onChangeText={setName}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Salário"
          value={salary}
          onChangeText={setSalary}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Nº de vendas"
          value={sale}
          onChangeText={setSale}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.containerResult}>
        <Text>{`FUNCIONÁRIO = ${total && name}`}</Text>
        <View style={styles.divider} />
        <Text>{`TOTAL = ${total}`}</Text>
      </View>
      <TouchableOpacity onPress={calcSalary}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1009;
