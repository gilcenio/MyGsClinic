import { Text, StyleSheet, TextStyle, TextProps, ViewStyle,  } from 'react-native'
import React from 'react'
import theme from '../../../Global/theme'
import useResponsive from '../../../Context/useResponsive'

type ITextApp = TextProps & TextStyle & ViewStyle & {
  title: string | null | undefined | number
  fontFamily?: string,
  fontSize?: number,
  color?: string,
}

export default function TextApp({title, color, fontFamily, fontSize, ...res}: ITextApp) {
  const {scaledWidth} = useResponsive()

  return (
    <Text 
      {...res} 
      style={[styles({color: color, fontSize: scaledWidth(fontSize ? fontSize : 1), fontFamily: fontFamily}).text, {...res}]}
    >
      {title}
    </Text>
  )
}

export interface IStylesheetInterface {
  fontFamily?: string,
  fontSize?: number,
  color?: string
}

const styles = ({fontSize, color, fontFamily}: IStylesheetInterface) =>
  StyleSheet.create({
    text: {
      fontFamily: fontFamily ? fontFamily : theme.fonts.Poppins_400Regular,
      fontSize: fontSize,
      color: color,
    }
  });