import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import useURI1005 from './useUri1005';

const Basic1005 = () => {
  const {notaA, setNotaA, notaB, setNotaB, media, calcAverage} = useURI1005();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média entre duas notas</Text>
      <Text style={styles.textObs}>
        {
          'Obs.: a primeira nota tem peso 3.5 e a segunda nota tem peso 7.5 (total peso 11)'
        }
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Primeira nota"
          value={notaA}
          onChangeText={setNotaA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Segunda nota"
          value={notaB}
          onChangeText={setNotaB}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`MÉDIA = ${media}`}</Text>
      <TouchableOpacity onPress={calcAverage}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular média</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1005;
