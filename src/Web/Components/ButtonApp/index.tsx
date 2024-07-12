import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import React from 'react'
import theme from '../../../Global/theme'
import { Ionicons } from '@expo/vector-icons'
import TextApp from '../TextApp'
import useResponsive from '../../../Context/useResponsive'

type IButtonApp = TouchableOpacityProps & ViewStyle &{
  title: string
  iconName?: any
  bg?: string
  w?: any
  mh?: number
}

export default function ButtonApp({title, bg, w, mh, iconName, ...res}: IButtonApp) {
  const {scaledWidth} = useResponsive()

  return (
    <TouchableOpacity {...res} 
    style={[
        styles.button, 
        {
          width: w ? w : undefined, 
          backgroundColor: bg ? bg : theme.base.base_9, 
          marginHorizontal: mh ? mh : undefined,
          columnGap: scaledWidth(1)
        }, {...res}
      ]}
    >
      {iconName && <Ionicons 
        name={iconName}
        size={scaledWidth(1.5)} 
        color={theme.text.text_4}
      /> }
      <TextApp title={title} fontFamily={theme.fonts.Poppins_700Bold} color={theme.text.text_4}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  }
})