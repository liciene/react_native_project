import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Group1 from '../screens/group1';
import Basic1001 from '../screens/uri-1001';
import Basic1002 from '../screens/uri-1002';
import Basic1003 from '../screens/uri-1003';
import Basic1004 from '../screens/uri-1004';

const Stack = createStackNavigator();

const StackNavigator1 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Page1" component={Group1} />
      <Stack.Screen name="1001" component={Basic1001} />
      <Stack.Screen name="1002" component={Basic1002} />
      <Stack.Screen name="1003" component={Basic1003} />
      <Stack.Screen name="1004" component={Basic1004} />
    </Stack.Navigator>
  );
};

export default StackNavigator1;
