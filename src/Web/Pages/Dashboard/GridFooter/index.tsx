import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../../../../Global/theme'
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../Hooks';

export default function GridFooter() {
  const {user} = useAuth()

  return (
    <View style={styles.content}>
      <View style={[styles.item, {borderRightWidth: 2, borderRightColor: theme.base.base_7}]}>
        <View style={styles.icon}>
          <Ionicons 
            name={"people-outline"}
            size={30} 
            color={theme.text.text_4}
          /> 
        </View>

        <Text style={styles.text}>Pacientes</Text>
        <Text style={styles.textNumber}>128</Text>
      </View>
      <View style={[styles.item, {borderRightWidth: 2, borderRightColor: theme.base.base_7}]}>
        <View style={styles.icon}>
          <Ionicons 
            name={"thumbs-up-outline"}
            size={30} 
            color={theme.text.text_4}
          /> 
        </View>

        <Text style={styles.text}>Consultas</Text>
        <Text style={styles.textNumber}>1008</Text>
      </View>
      {user.userType === "ADMINISTRADOR" &&
      <View style={styles.item}>
        <View style={styles.icon}>
          <Ionicons 
            name={"cash-outline"}
            size={30} 
            color={theme.text.text_4}
          /> 
        </View>

        <Text style={styles.text}>Receita</Text>
        <Text style={styles.textNumber}>8.756,32K</Text>
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    columnGap: 4
  },
  item: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 30
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.Poppins_400Regular,
    color: theme.text.text_2
  },
  textNumber: {
    fontSize: 50,
    fontFamily: theme.fonts.Poppins_800ExtraBold,
    color: theme.base.base_2
  },
  icon: {
    marginBottom: 20, 
    backgroundColor: theme.base.base_1, 
    padding: 4, 
    borderRadius: 10,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})