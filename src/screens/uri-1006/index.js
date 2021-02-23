import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import useURI1006 from './useUri1006';

const Basic1006 = () => {
  const {
    nota1,
    setNota1,
    nota2,
    setNota2,
    nota3,
    setNota3,
    media,
    calcAverage,
  } = useURI1006();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média entre três notas</Text>
      <Text style={styles.textObs}>
        {
          'Obs.: a primeira nota tem peso 2, a segunda nota tem peso 3 e a terceira nota tem peso 5 (total peso 10)'
        }
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Primeira nota"
          value={nota1}
          onChangeText={setNota1}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Segunda nota"
          value={nota2}
          onChangeText={setNota2}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Terceira nota"
          value={nota3}
          onChangeText={setNota3}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`MEDIA = ${media}`}</Text>
      <TouchableOpacity onPress={calcAverage}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular média</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1006;
