import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../../../Global/theme'
import { Ionicons } from '@expo/vector-icons';

interface IRenderItemSchedule{
  title: string
}

export default function ListEmptyComponent({title}: IRenderItemSchedule) {
  

  return (
    <View style={styles.content}>
      <Ionicons 
        name={'close-sharp'}
        size={25} 
        color={theme.text.text_4}
      /> 
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: 70,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: theme.base.base_7,
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    columnGap: 20
  },
  text: {
    fontSize: 18,
    fontFamily: theme.fonts.Poppins_500Medium,
    color: theme.text.text_4
  }
})