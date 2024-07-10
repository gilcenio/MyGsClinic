import { Text } from 'react-native'
import React from 'react'
import theme from '../../../../Global/theme'

interface IHeaderTitle{
  title: string
  color?: string
}

export default function HeaderTitle({title, color}: IHeaderTitle) {

  return (
      <Text 
        style={{
          color: color ? color : theme.text.text_6, 
          fontSize: 28, 
          fontFamily: theme.fonts.Poppins_600SemiBold
        }}
      >
        {title}
      </Text>
  )
}
