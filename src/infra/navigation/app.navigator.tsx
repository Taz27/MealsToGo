import React from 'react';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { OpaqueColorValue, Text } from 'react-native';

import { RestaurantsNavigator } from './restaurants.navigator';
import { SafeArea } from '../../components/utils/safearea.component';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Map: 'md-map',
} as const;

function SettingsScreen() {
  return (
    <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

type TabIconKeys = keyof typeof TAB_ICONS;
type Icons = typeof TAB_ICONS[TabIconKeys];

const createScreenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
  const iconName = TAB_ICONS[route.name as TabIconKeys] as Icons;
  return {
    tabBarIcon: ({
      color,
      size,
    }: {
      color: string | OpaqueColorValue | undefined;
      size: number | undefined;
    }) => <Ionicons name={iconName} size={size} color={color} />,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
