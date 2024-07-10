import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../_Styles'
import theme from '../../../Global/theme'

export default function Help() {
  return (
    <View style={globalStyles({backgroundColor: theme.help.help_1}).content}>
      <ScrollView contentContainerStyle={{rowGap: 20}} showsVerticalScrollIndicator={false}>
        <View style={styles({}).content}>
          <Text style={styles({fontSize: 28, fontFamily: theme.fonts.Poppins_500Medium}).text}>Dashboard</Text>
          <ScrollView horizontal contentContainerStyle={{columnGap: 20, paddingBottom: 10}}>
            {
              [0,1,2,3,4,5,6,7,8].map(() => {
                return(
                  <View style={styles({}).card}> 
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
        <View style={styles({}).content}>
          <Text style={styles({fontSize: 28, fontFamily: theme.fonts.Poppins_500Medium}).text}>Agenda</Text>
          <ScrollView horizontal contentContainerStyle={{columnGap: 20, paddingBottom: 10}}>
            {
              [0,1,2,3,4,5,6,7,8].map(() => {
                return(
                  <View style={styles({}).card}> 
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
        <View style={styles({}).content}>
          <Text style={styles({fontSize: 28, fontFamily: theme.fonts.Poppins_500Medium}).text}>Adicionar Colaboradores</Text>
          <ScrollView horizontal contentContainerStyle={{columnGap: 20, paddingBottom: 10}}>
            {
              [0,1,2,3,4,5,6,7,8].map(() => {
                return(
                  <View style={styles({}).card}> 
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
        <View style={styles({}).content}>
          <Text style={styles({fontSize: 28, fontFamily: theme.fonts.Poppins_500Medium}).text}>Adicionar Pacientes</Text>
          <ScrollView horizontal contentContainerStyle={{columnGap: 20, paddingBottom: 10}}>
            {
              [0,1,2,3,4,5,6,7,8].map(() => {
                return(
                  <View style={styles({}).card}> 
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
        <View style={styles({}).content}>
          <Text style={styles({fontSize: 28, fontFamily: theme.fonts.Poppins_500Medium}).text}>Financeiro</Text>
          <ScrollView horizontal contentContainerStyle={{columnGap: 20, paddingBottom: 10}}>
            {
              [0,1,2,3,4,5,6,7,8].map(() => {
                return(
                  <View style={styles({}).card}> 
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export interface IStylesheetInterface {
  fontFamily?: string,
  fontSize?: number,
  color?: string,
}

const styles = ({fontSize, color, fontFamily}: IStylesheetInterface) =>
  StyleSheet.create({
    content: {
      width: "100%",
      height: 300,
    },
    card: {
      width: 400,
      height: "100%",
      backgroundColor: "gray",
      borderRadius: 20
    },
    text: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color ? color : theme.text.text_1,
      marginBottom: 10
    }
  }
);