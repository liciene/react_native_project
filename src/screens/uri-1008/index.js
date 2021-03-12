import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1008 from './useUri1008';
import {Button, Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

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
    <>
      <AppBar title="1008" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Cálculo de salário</Text>
        <Text style={styles.textObs}>
          {'Retorna número do funcionário e salário'}
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Funcionário"
            mode="outlined"
            value={functionary}
            onChangeText={setFunctionary}
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Hr/trabalho"
            mode="outlined"
            value={hour}
            onChangeText={setHour}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Valor/hora"
            mode="outlined"
            value={value}
            onChangeText={setValue}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`Funcionário: ${
          salary && functionary
        } `}</Text>
        <Text style={styles.text}>{`Salário = R$ ${salary}`}</Text>
        <Divider />
        <Button onPress={calcSalary} mode="contained">
          Calcular salário
        </Button>
      </Background>
    </>
  );
};

export default Basic1008;
