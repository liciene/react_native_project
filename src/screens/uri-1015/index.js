import React from 'react';
import {View} from 'react-native';
import useUri1015 from './useUri1015';
import styles from '../../styles/general';
import {Text, TextInput, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1015 = () => {
  const {
    axisX1,
    setAxisX1,
    axisY1,
    setAxisY1,
    axisX2,
    setAxisX2,
    axisY2,
    setAxisY2,
    result,
    calcDistance,
  } = useUri1015();
  return (
    <>
      <AppBar title="1015" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Distância entre dois pontos</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="x1"
            mode="outlined"
            style={styles.textInput}
            value={axisX1}
            onChangeText={setAxisX1}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            label="y1"
            mode="outlined"
            style={styles.textInput}
            value={axisY1}
            onChangeText={setAxisY1}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            label="x2"
            mode="outlined"
            style={styles.textInput}
            value={axisX2}
            onChangeText={setAxisX2}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            label="y2"
            mode="outlined"
            style={styles.textInput}
            value={axisY2}
            onChangeText={setAxisY2}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>{`Distância: ${result}`}</Text>
        <Divider />
        <Button onPress={calcDistance} mode="contained">
          Calcular distância
        </Button>
      </Background>
    </>
  );
};

export default Basic1015;
