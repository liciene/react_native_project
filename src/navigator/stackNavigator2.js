import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Group2 from '../screens/group2';
import Basic1005 from '../screens/uri-1005';
import Basic1006 from '../screens/uri-1006';
import Basic1007 from '../screens/uri-1007';
import Basic1008 from '../screens/uri-1008';

const Stack = createStackNavigator();

const StackNavigator2 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Page2" component={Group2} />
      <Stack.Screen name="1005" component={Basic1005} />
      <Stack.Screen name="1006" component={Basic1006} />
      <Stack.Screen name="1007" component={Basic1007} />
      <Stack.Screen name="1008" component={Basic1008} />
    </Stack.Navigator>
  );
};

export default StackNavigator2;
