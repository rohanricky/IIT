import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MathsScreen from '../screens/MathsScreen';
import PhysicsScreen from '../screens/PhysicsScreen';
import ChemistryScreen from '../screens/ChemistryScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const MathStack = createStackNavigator(
  {
    Links: MathsScreen
  },
  config
);

MathStack.navigationOptions = {
  tabBarLabel: 'Maths',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-stopwatch'} />
  ),
};

MathStack.path = '';

const PhysicsStack = createStackNavigator(
  {
    Links: PhysicsScreen
  },
  config
);

PhysicsStack.navigationOptions = {
  tabBarLabel: 'Physics',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-rocket'} />
  ),
};

PhysicsStack.path = '';

const ChemistryStack = createStackNavigator(
  {
    Links: ChemistryScreen
  },
  config
);

ChemistryStack.navigationOptions = {
  tabBarLabel: 'Chemistry',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-swap'} />
  ),
};

ChemistryStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MathStack,
  PhysicsStack,
  ChemistryStack,
  // SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
