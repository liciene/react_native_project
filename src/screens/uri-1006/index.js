import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1006 from './useUri1006';
import {Button, Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

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
    <>
      <AppBar title="1006" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Média entre três notas</Text>
        <Text style={styles.textObs}>
          {
            'Obs.: a primeira nota tem peso 2, a segunda nota tem peso 3 e a terceira nota tem peso 5 (total peso 10)'
          }
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="1ª nota"
            mode="outlined"
            value={nota1}
            onChangeText={setNota1}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="2ª nota"
            mode="outlined"
            value={nota2}
            onChangeText={setNota2}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="3ª nota"
            mode="outlined"
            value={nota3}
            onChangeText={setNota3}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`MEDIA = ${media}`}</Text>
        <Divider />
        <Button onPress={calcAverage} mode="contained">
          Calcular média
        </Button>
      </Background>
    </>
  );
};

export default Basic1006;
