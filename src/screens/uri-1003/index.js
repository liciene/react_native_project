import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1003 from './useUri1003';
import {Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1003 = () => {
  const {numA, setNumA, numB, setNumB, total} = useURI1003();
  return (
    <>
      <AppBar title="1003" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Subtração entre dois números</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Digite um número"
            mode="outlined"
            value={numA}
            onChangeText={setNumA}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Digite um número"
            mode="outlined"
            value={numB}
            onChangeText={setNumB}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`SUBTRAÇÃO = ${total}`}</Text>
      </Background>
    </>
  );
};

export default Basic1003;
