import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1011 from './useUri1011';
import {Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1011 = () => {
  const {radius, setRadius, sphere} = useURI1011();

  return (
    <>
      <AppBar title="1011" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Volume de uma esfera</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Digite o valor do raio"
            mode="outlined"
            style={styles.textInput}
            value={radius}
            onChangeText={setRadius}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>{`VOLUME = ${sphere}`}</Text>
      </Background>
    </>
  );
};

export default Basic1011;
