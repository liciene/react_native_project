import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1007 from './useUri1007';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import {Text, TextInput} from 'react-native-paper';
import AppBar from '../../components/appbar';

const Basic1007 = () => {
  const {
    numA,
    setNumA,
    numB,
    setNumB,
    numC,
    setNumC,
    numD,
    setNumD,
    diff,
  } = useURI1007();
  return (
    <>
      <AppBar title="1007" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Diferença de A*B por C*D</Text>
        <Text style={styles.textObs}>
          {
            'Obs.: Leia quatro valores inteiros A, B, C e D. Calcule e mostre a diferença do produto de A e B pelo produto de C e D.'
          }
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Valor A"
            mode="outlined"
            value={numA}
            onChangeText={setNumA}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Valor B"
            mode="outlined"
            value={numB}
            onChangeText={setNumB}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Valor C"
            mode="outlined"
            value={numC}
            onChangeText={setNumC}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Valor D"
            mode="outlined"
            value={numD}
            onChangeText={setNumD}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`DIFERENÇA = ${diff}`}</Text>
      </Background>
    </>
  );
};

export default Basic1007;
