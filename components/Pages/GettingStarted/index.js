import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const bgImage = require('../../../assets/bg.jpg');
import {styles} from '../../../assets/styles/style';
const GettingStart = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <ImageBackground
        source={bgImage}
        style={styles.banner}
        resizeMode="cover"></ImageBackground>
      <View style={styles.sectionOne}>
        <View>
          <Text style={styles.txtOne}>Track your</Text>
          <Text style={styles.txtOne}>lifestyle activities</Text>
          <View style={styles.hr}></View>
          <Text style={styles.smallTxt}>With a goal a driven approach</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnCont}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('auth')}>
        <Text style={[styles.btnTxt, styles.btnTxtOne]}>Get Started</Text>
        <View style={styles.center}>
          <Text style={styles.btnTxt}>{'>'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GettingStart;
