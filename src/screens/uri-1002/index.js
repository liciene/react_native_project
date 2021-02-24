import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import useURI1002 from './useUri1002';

const Basic1002 = () => {
  const {radius, setRadius, result, calcCircleArea} = useURI1002();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Área do círculo</Text>
      <TextInput
        style={styles.textIput}
        placeholder="Digite o valor do raio"
        value={radius}
        onChangeText={setRadius}
        keyboardType="number-pad"
      />
      <Text style={styles.text}>{`Resultado: ${result}`}</Text>
      <TouchableOpacity onPress={calcCircleArea}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1002;
