/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Pages/Home/Home';
import GettingStart from './components/Pages/GettingStarted';
import Auth from './components/Pages/Auth';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView >
    //   <StatusBar />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     contentContainerStyle={styles.sectionContainer}
    //     >
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="getting-start" component={GettingStart} />
        <Stack.Screen name="auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
