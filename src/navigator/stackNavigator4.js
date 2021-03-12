import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Group4 from '../screens/group4';
import Basic1013 from '../screens/uri-1013';
import Basic1014 from '../screens/uri-1014';
import Basic1015 from '../screens/uri-1015';
import Basic1016 from '../screens/uri-1016';

const Stack = createStackNavigator();

const StackNavigator4 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Page4" component={Group4} />
      <Stack.Screen name="1013" component={Basic1013} />
      <Stack.Screen name="1014" component={Basic1014} />
      <Stack.Screen name="1015" component={Basic1015} />
      <Stack.Screen name="1016" component={Basic1016} />
    </Stack.Navigator>
  );
};

export default StackNavigator4;
