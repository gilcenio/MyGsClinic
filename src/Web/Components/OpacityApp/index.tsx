import { View, StyleSheet } from 'react-native'
import React from 'react'

interface IOpacityApp{
  color: string
  opacity?: number
}

export default function OpacityApp({color, opacity}: IOpacityApp) {
  return (
    <View style={[styles.content ,{backgroundColor: color, opacity: opacity ? opacity : 0.2}]}/>
  )
}

const styles = StyleSheet.create({
  content: {
    position: "absolute", 
    width: "100%", 
    height: "100%", 
    borderRadius: 10
  }
})