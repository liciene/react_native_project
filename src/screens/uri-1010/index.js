import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import useURI1010 from './useUri1010';

const Basic1010 = () => {
  const {
    amount1,
    setAmount1,
    value1,
    setValue1,
    amount2,
    setAmount2,
    value2,
    setValue2,
    total,
    calcTotalPrice,
  } = useURI1010();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de compra</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Quantidade da peça 1"
          value={amount1}
          onChangeText={setAmount1}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor da peça 1"
          value={value1}
          onChangeText={setValue1}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Quantidade da peça 2"
          value={amount2}
          onChangeText={setAmount2}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor da peça2"
          value={value2}
          onChangeText={setValue2}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`VALOR A PAGAR: R$ ${total}`}</Text>
      <TouchableOpacity onPress={calcTotalPrice}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1010;
