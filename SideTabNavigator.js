// SideTabNavigator.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import HomeScreen from '../pages/HomeScreen';

const Drawer = createDrawerNavigator();

const SideTabNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={styles.drawer}
      drawerContentOptions={{
        activeTintColor: '#3498db',
        itemStyle: styles.drawerItem,
        labelStyle: styles.drawerLabel,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="InAppMap" component={""} />
      <Drawer.Screen name="Dashboard" component={""} />
      <Drawer.Screen name="Feedback" component={""} />
      <Drawer.Screen name="Settings" component={""} />
      <Drawer.Screen name="AboutUs" component={""} />
      <Drawer.Screen name="Profile" component={""} />
      <Drawer.Screen name="Leaderboard" component={""} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#2c3e50',
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#34495e', // Border color between items
  },
  drawerLabel: {
    color: '#ecf0f1', // Text color for the items
    marginLeft: -16, // Adjust for the default padding
  },
});

export default SideTabNavigator;
