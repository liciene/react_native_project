import React from 'react';
import styles from '../../styles/general';
import useURI1001 from './useUri1001';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1001 = () => {
  const {num1, num2, result, setNum1, setNum2} = useURI1001();
  return (
    <>
      <AppBar title="1001" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Soma de dois números</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Digite um número"
            mode="outlined"
            value={num1}
            onChangeText={setNum1}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Digite um número"
            mode="outlined"
            value={num2}
            onChangeText={setNum2}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`Resultado: ${result}`}</Text>
      </Background>
    </>
  );
};

export default Basic1001;
