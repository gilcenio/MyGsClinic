import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import theme from '../../../Global/theme'
import { Ionicons } from '@expo/vector-icons'

type IButtonApp = TouchableOpacityProps & {
  title: string
  iconName?: any
  bg?: string
  w?: any
  mh?: number
}

export default function ButtonApp({title, bg, w, mh, iconName, ...res}: IButtonApp) {
  return (
    <TouchableOpacity {...res} style={[styles.button, 
    {width: w ? w : undefined, backgroundColor: bg ? bg : theme.base.base_9, marginHorizontal: mh ? mh : undefined}]}>
      {iconName && <Ionicons 
        name={iconName}
        size={25} 
        color={theme.text.text_4}
      /> }
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // marginHorizontal: 20,
    flexDirection: "row",
    columnGap: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  textButton: {
    fontFamily: theme.fonts.Poppins_700Bold,
    fontSize: 14,
    color: theme.text.text_4,
  }
})