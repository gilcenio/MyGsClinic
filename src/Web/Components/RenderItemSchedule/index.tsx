import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../../../Global/theme'
import OpacityApp from '../OpacityApp';

interface IRenderItemSchedule{
  item: {
    date: string;
    dateStart: string;
    hourStart: string;
    dateFinal: string;
    hourFinal: string;
    isAllday: boolean;
    frequency: string;
    nameProfessional: string;
    namePatient: string;
    cor: string;
    notes: string;
  }
}

export default function RenderItemSchedule({item}: IRenderItemSchedule) {
  const {cor, date, dateFinal, dateStart, frequency, hourFinal, hourStart, isAllday, namePatient, nameProfessional, notes} = item

  return (
    <View style={styles.content}>
      <OpacityApp color={theme.base.base_2}/>
      
      <Text>{date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: 70,
    marginBottom: 20,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: theme.base.base_2,
  }
})