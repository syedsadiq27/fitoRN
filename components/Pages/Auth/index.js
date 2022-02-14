import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../../assets/styles/style';
import AuthTabs from '../../Tabs/AuthTab';

const Auth = ({navigaton}) => {
  return (
    <View style={[styles.mainCont, styles.authCont]}>
      <View style={[styles.authMain]}>
        <View style={authStyles.logoCont}>
          <Text style={authStyles.logoTxt}>Logo</Text>
        </View>
        <View>
          <Text style={styles.txtOne}>Create a </Text>
          <Text style={styles.txtOne}>new account</Text>
          <View style={styles.hr}></View>
          <Text style={styles.smallTxt}>For the best experience</Text>
          <Text style={styles.smallTxt}>with Fito</Text>
        </View>
      </View>
      <View style={{flex: 0.5}}>
        <AuthTabs />
      </View>
    </View>
  );
};

export default Auth;

const authStyles = StyleSheet.create({
  logoCont: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
