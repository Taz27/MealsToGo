import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from './src/components/utils/safearea.component';
import { theme } from './src/infra/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { OpaqueColorValue, Text } from 'react-native';

function MapScreen() {
  return (
    <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Map: 'md-map',
} as const;

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
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
