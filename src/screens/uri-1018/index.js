import React from 'react';
import {View} from 'react-native';
import useUri1018 from './useUri1018';
import styles from '../../styles/general';
import {Text, TextInput, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1018 = () => {
  const {
    money,
    setMoney,
    calc100,
    calc50,
    calc20,
    calc10,
    calc5,
    calc2,
    calc1,
    calcMoneyBill,
  } = useUri1018();
  return (
    <>
      <AppBar title="1018" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Quantidade de cédulas</Text>
        <Text style={styles.textObs}>
          {
            'Obs.: Retorna a quantidade mínima de notas (cédulas) possíveis. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1'
          }
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Valor"
            mode="outlined"
            style={styles.textInput}
            value={money}
            onChangeText={setMoney}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>
          {`R$: ${money} \n\nCédulas: \n${calc100} nota(s) de R$ 100,00 \n${calc50} nota(s) de R$ 50,00 \n${calc20} nota(s) de R$ 20,00 \n${calc10} nota(s) de R$ 10,00 \n${calc5} nota(s) de R$ 5,00 \n${calc2} nota(s) de R$ 2,00 \n${calc1} nota(s) de R$ 1,00`}
        </Text>
        <Divider />
        <Button onPress={calcMoneyBill} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1018;
