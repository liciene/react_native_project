import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1009 from './useUri1009';
import {Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1009 = () => {
  const {name, setName, salary, setSalary, sale, setSale, total} = useURI1009();

  return (
    <>
      <AppBar title="1009" backButton />
      <Background style={styles.container}>
        <Divider />
        <Text style={styles.text}>Salário com bônus</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Funcionário"
            mode="outlined"
            value={name}
            onChangeText={setName}
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Salário"
            mode="outlined"
            value={salary}
            onChangeText={setSalary}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Nº/vendas"
            mode="outlined"
            value={sale}
            onChangeText={setSale}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`FUNCIONÁRIO = ${total && name}`}</Text>
        <Text style={styles.text}>{`TOTAL = ${total}`}</Text>
      </Background>
    </>
  );
};

export default Basic1009;
