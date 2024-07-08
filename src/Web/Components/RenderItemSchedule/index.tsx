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
    <View style={styles({}).content}>
      <OpacityApp color={cor}/>
      
      <View style={styles({}).item}>
        <View>
          <Text style={styles({fontSize: 16, fontFamily: theme.fonts.Poppins_700Bold}).text}>Terapeuta:  <Text style={styles({fontSize: 15, fontFamily: theme.fonts.Poppins_500Medium}).text}>{nameProfessional}</Text></Text>
          <Text style={styles({fontSize: 16, fontFamily: theme.fonts.Poppins_700Bold}).text}>Paciente:  <Text style={styles({fontSize: 15, fontFamily: theme.fonts.Poppins_500Medium}).text}>{namePatient}</Text></Text>
        </View>

        <View style={styles({}).hours}>
          <Text style={styles({fontFamily: theme.fonts.Poppins_700Bold}).text}>Início: {dateStart+" - "+hourStart}</Text>
          <Text style={styles({fontFamily: theme.fonts.Poppins_700Bold}).text}>Final: {dateFinal+" - "+hourFinal}</Text>
        </View>

        {notes && <View style={styles({}).notes}>
          <Text style={styles({fontSize: 16, fontFamily: theme.fonts.Poppins_700Bold}).text}>Notas:  <Text style={styles({fontSize: 15, fontFamily: theme.fonts.Poppins_500Medium}).text}>{notes}</Text></Text>
        </View>}

        <View style={styles({}).top}>
          <Text style={styles({fontSize: 10}).text}>Frequencia: {frequency}</Text>
          <Text style={styles({fontSize: 10}).text}>Dia todo?: {isAllday ? "Sim" : "Não"}</Text>
        </View>
      </View>



    </View>
  )
}

export interface IStylesheetInterface {
  fontSize?: number
  fontColor?: string
  fontFamily?: string
}

const styles = ({fontColor, fontSize, fontFamily}: IStylesheetInterface) =>
  StyleSheet.create({
    content: {
      width: "100%",
      marginBottom: 20,
      borderRadius: 12,
      borderLeftWidth: 5,
      borderLeftColor: theme.base.base_2
    },
    notes: {
      marginBottom: 20
    },
    item: {
      padding: 10
    },
    top: {
      flexDirection: "row",
      columnGap: 10,
      position: 'absolute',
      top: 6,
      right: 10
    },
    hours: {
      flexDirection: "row",
      columnGap: 10,
      position: 'absolute',
      bottom: 6,
      right: 10
    },
    text: {
      color: fontColor ? fontColor : theme.text.text_4,
      fontSize: fontSize ? fontSize : 12,
      fontFamily: fontFamily ? fontFamily : theme.fonts.Poppins_500Medium
    }
});