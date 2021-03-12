import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import StackNavigator1 from './stackNavigator1';
import StackNavigator2 from './stackNavigator2';
import StackNavigator3 from './stackNavigator3';
import StackNavigator4 from './stackNavigator4';
import StackNavigator5 from './stackNavigator5';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        options={{title: 'Page 1'}}
        name="Page1"
        component={StackNavigator1}
      />
      <Drawer.Screen
        options={{title: 'Page 2'}}
        name="Page2"
        component={StackNavigator2}
      />
      <Drawer.Screen
        options={{title: 'Page 3'}}
        name="Page3"
        component={StackNavigator3}
      />
      <Drawer.Screen
        options={{title: 'Page 4'}}
        name="Page4"
        component={StackNavigator4}
      />
      <Drawer.Screen
        options={{title: 'Page 5'}}
        name="Page5"
        component={StackNavigator5}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
