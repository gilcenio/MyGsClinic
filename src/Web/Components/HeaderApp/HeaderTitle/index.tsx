import { Text } from 'react-native'
import React from 'react'
import theme from '../../../../Global/theme'

interface IHeaderTitle{
  title: string
}

export default function HeaderTitle({title}: IHeaderTitle) {

  return (
      <Text 
        style={{
          color: theme.text.text_6, 
          fontSize: 28, 
          fontFamily: theme.fonts.Poppins_600SemiBold
        }}
      >
        {title}
      </Text>
  )
}
