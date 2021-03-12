import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Group4 from '../screens/group4';
import Basic1013 from '../screens/uri-1013';

const Stack = createStackNavigator();

const StackNavigator4 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Page4" component={Group4} />
      <Stack.Screen name="1013" component={Basic1013} />
    </Stack.Navigator>
  );
};

export default StackNavigator4;
