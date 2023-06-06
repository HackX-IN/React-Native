import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../assets/default.png'
// import logo from '../assets/loog.jpg'

const Title = () => {
  return (
    <View style={styles.container}>
<Image source={logo} style={styles.img}/>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight:"600",
    marginTop:30,
    color:"#658864",
    fontStyle:'italic'


  },
  container:{
    paddingVertical:16,
    justifyContent:'center',
    alignItems:'center',
  },
  img:{
    width:'25%',
    height:'25%',
    backfaceVisibility:'hidden',
    backgroundColor:'transparent'


  }
})