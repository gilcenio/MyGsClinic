import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../../Global/theme'

interface ISelectFormApp{
  value: string
  onChange: (...event: any[]) => void
  error: string | undefined
  placeholder?: string | undefined
}

export default function SelectFormApp({value, onChange, error, placeholder}: ISelectFormApp) {
  return (
    <TouchableOpacity style={styles({error}).input}>
      <Text style={styles({color: value ? theme.text.text_4 : theme.text.text_3}).text}>{placeholder}</Text>
    </TouchableOpacity>
  )
}

export interface IStylesheetInterface {
  color?: string,
  error?: string
}

const styles = ({error, color}: IStylesheetInterface) =>
  StyleSheet.create({
    input: {
      width: "100%",
      height: 40,
      backgroundColor: theme.base.base_5,
      justifyContent: "center",
      borderRadius: 8,
      paddingLeft: 16,
      borderWidth: error ? 1 : undefined,
      borderColor: theme.status.error,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    text: {
      fontFamily: theme.fonts.Poppins_400Regular,
      fontSize: 14,
      color: color,
    },
  })