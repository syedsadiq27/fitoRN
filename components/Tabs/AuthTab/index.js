import React from 'react';
import {Animated, View, TouchableOpacity, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {styles} from '../../../assets/styles/style';

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{flexDirection: 'row', backgroundColor: '#324755', elevation: 5}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              {
                flex: 1,
                borderBottomColor: isFocused ? '#B37052' : 'transparent',
              },
              styles.tabBtn,
            ]}>
            <Animated.Text style={[{opacity}, styles.tabBtnTxt]}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ...

const Tab = createMaterialTopTabNavigator();

function AuthTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Sign Up" component={SignupScreen} />
      <Tab.Screen name="Log In" component={LoginScreen} />
    </Tab.Navigator>
  );
}
export const SignupScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#324755',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.authBtn}>
        <Text style={styles.authBtnTxt}>Sign up with Email</Text>
      </View>
      <View style={[styles.authBtn, styles.authBtnTwo]}>
        <Text style={[styles.authBtnTxt, styles.authBtnTxtTwo]}>
          Sign up with phone number
        </Text>
      </View>
    </View>
  );
};

export const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#324755',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[styles.authBtn, styles.authBtnTwo]}>
        <Text style={[styles.authBtnTxt, styles.authBtnTxtTwo]}>
          Log in with email
        </Text>
      </View>
      <View style={styles.authBtn}>
        <Text style={styles.authBtnTxt}>log in with phone number</Text>
      </View>
    </View>
  );
};

export default AuthTabs;
