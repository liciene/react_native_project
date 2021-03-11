import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1005 from './useUri1005';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import {Text, TextInput} from 'react-native-paper';
import AppBar from '../../components/appbar';

const Basic1005 = () => {
  const {notaA, setNotaA, notaB, setNotaB, media} = useURI1005();
  return (
    <>
      <AppBar title="1005" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Média entre duas notas</Text>
        <Text style={styles.textObs}>
          {
            'Obs.: a primeira nota tem peso 3.5 e a segunda nota tem peso 7.5 (total peso 11)'
          }
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Primeira nota"
            mode="outlined"
            value={notaA}
            onChangeText={setNotaA}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Segunda nota"
            mode="outlined"
            value={notaB}
            onChangeText={setNotaB}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`MÉDIA = ${media}`}</Text>
      </Background>
    </>
  );
};

export default Basic1005;
