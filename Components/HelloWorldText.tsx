
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HelloWorldText = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20,}}>🔥🔥HOLA MUNDO 🔥🔥</Text>
    </View>
  )
}
const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:"#785BF5",
            maxHeight: 64,
            borderRadius:20,
        }
    }
)

export default HelloWorldText
