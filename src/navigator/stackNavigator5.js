import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Group5 from '../screens/group5';
import Basic1017 from '../screens/uri-1017';
import Basic1018 from '../screens/uri-1018';
import Basic1019 from '../screens/uri-1019';
import Basic1020 from '../screens/uri-1020';

const Stack = createStackNavigator();

const StackNavigator5 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Page5" component={Group5} />
      <Stack.Screen name="1017" component={Basic1017} />
      <Stack.Screen name="1018" component={Basic1018} />
      <Stack.Screen name="1019" component={Basic1019} />
      <Stack.Screen name="1020" component={Basic1020} />
    </Stack.Navigator>
  );
};

export default StackNavigator5;
