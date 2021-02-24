import React from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import styles from './styles';
import useURI1011 from './useUri1011';

const Basic1011 = () => {
  const {radius, setRadius, sphere, calcVolume} = useURI1011();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Volume de uma esfera</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Raio"
        value={radius}
        onChangeText={setRadius}
        keyboardType="number-pad"
      />
      <Text style={styles.text}>{`VOLUME = ${sphere}`}</Text>
      <TouchableOpacity onPress={calcVolume}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1011;
