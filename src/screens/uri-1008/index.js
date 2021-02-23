import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import useURI1008 from './useUri1008';

const Basic1008 = () => {
  const {
    functionary,
    setFunctionary,
    hour,
    setHour,
    value,
    setValue,
    salary,
    calcSalary,
  } = useURI1008();

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
          value={functionary}
          onChangeText={setFunctionary}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Hr trabalhadas"
          value={hour}
          onChangeText={setHour}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor por hora"
          value={value}
          onChangeText={setValue}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`Funcionário: ${
        salary && functionary
      } `}</Text>
      <Text style={styles.text}>{`Salário = R$ ${salary}`}</Text>
      <TouchableOpacity onPress={calcSalary}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular salário</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1008;
