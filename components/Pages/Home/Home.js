import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.mainCont}>
      <Text style={styles.txtColor}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    mainCont:{
        backgroundColor:"#fff",
    },
    txtColor:{
        color:'#000'
    }
})