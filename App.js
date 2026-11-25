
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  TamaguiProvider,
} from 'tamagui'

import {
  NavigationContainer,
  DarkTheme,
} from '@react-navigation/native'

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import config from './tamagui.config'

import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import BottomTabBar from './src/components/BottomTabBar'

const Tab = createBottomTabNavigator()

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0B0F17',
    card: '#0B0F17',
    border: '#252F40',
  },
}

export default function App() {
  return (
      <SafeAreaProvider>
        <TamaguiProvider config={config} defaultTheme="dark">

          <StatusBar style="light" />

          <NavigationContainer theme={navigationTheme}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerShown: false,
                }}
                tabBar={(props) => (
                    <BottomTabBar {...props} />
                )}
            >
              <Tab.Screen
                  name="Home"
                  component={HomeScreen}
              />

              <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
              />
            </Tab.Navigator>
          </NavigationContainer>

        </TamaguiProvider>
      </SafeAreaProvider>
  )
}
