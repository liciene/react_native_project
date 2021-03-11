import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Group3 from '../screens/group3';
import Basic1009 from '../screens/uri-1009';
import Basic1010 from '../screens/uri-1010';
import Basic1011 from '../screens/uri-1011';
import Basic1012 from '../screens/uri-1012';

const Stack = createStackNavigator();

const StackNavigator3 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Page3" component={Group3} />
      <Stack.Screen name="1009" component={Basic1009} />
      <Stack.Screen name="1010" component={Basic1010} />
      <Stack.Screen name="1011" component={Basic1011} />
      <Stack.Screen name="1012" component={Basic1012} />
    </Stack.Navigator>
  );
};

export default StackNavigator3;
