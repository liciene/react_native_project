import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1013 from './useUri1013';
import {Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1013 = () => {
  const {numA, setNumA, numB, setNumB, numC, setNumC, higher} = useURI1013();

  return (
    <>
      <AppBar title="1013" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Maior absoluto</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="A"
            mode="outlined"
            value={numA}
            onChangeText={setNumA}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="B"
            mode="outlined"
            value={numB}
            onChangeText={setNumB}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="C"
            mode="outlined"
            value={numC}
            onChangeText={setNumC}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`${higher} é maior`}</Text>
      </Background>
    </>
  );
};

export default Basic1013;
