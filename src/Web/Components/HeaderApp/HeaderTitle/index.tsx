import { Text } from 'react-native'
import React from 'react'
import theme from '../../../../Global/theme'
import TextApp from '../../TextApp'

interface IHeaderTitle{
  title: string
  color?: string
}

export default function HeaderTitle({title, color}: IHeaderTitle) {

  return (
    <TextApp title={title} color={color ? color : theme.text.text_6} fontFamily={theme.fonts.Poppins_600SemiBold} fontSize={1.7}/>
  )
}
