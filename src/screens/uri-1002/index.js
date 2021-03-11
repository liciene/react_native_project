import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1002 from './useUri1002';
import {Button, Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1002 = () => {
  const {radius, setRadius, result, calcCircleArea} = useURI1002();
  return (
    <>
      <AppBar title="1002" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Área do círculo</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Digite o valor do raio"
            mode="outlined"
            style={styles.textInput}
            value={radius}
            onChangeText={setRadius}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>{`Resultado: ${result}`}</Text>
        <Divider />
        <Button onPress={calcCircleArea} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1002;
