import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../_Styles'
import theme from '../../../Global/theme'
import GridTop from './GridTop'
import GridFooter from './GridFooter'
import { useAuth } from '../../Hooks'

export default function Dashboard() {
  const {user} = useAuth()
  const [isSelected, setIsSelected] = useState(true)


  
  return (
    <View style={[globalStyles.content, styles.content]}>

      <View style={styles.selects}>
        <Text 
          onPress={() => setIsSelected(!isSelected)} 
          style={[styles.text, {
            borderBottomWidth: isSelected ? 4 : undefined, 
            color: isSelected ? theme.base.base_2 : theme.text.text_6
          }]}
        >
          Performance
        </Text>
        {
          user.userType === "ADMINISTRADOR" &&
          <Text 
            onPress={() => setIsSelected(!isSelected)} 
            style={[styles.text, {
              borderBottomWidth: !isSelected ? 4 : undefined, 
              color: !isSelected ? theme.base.base_2 : theme.text.text_6
            }]}
          >
            Receita
          </Text>
        }

      </View>

      { isSelected ?
        <View style={styles.gridTop}>
          <GridTop type={'left'} title={'Performance'}/>
          <GridTop type={'right'} title={'Performance'}/>
        </View>
        :
        <View style={styles.gridTop}>
          <GridTop type={'left'} title={'Receita'}/>
          <GridTop type={'right'} title={'Receita'}/>
        </View>
      }

      <View style={styles.gridFooter}>
        <GridFooter/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    rowGap: 20
  },
  text: {
    color: theme.base.base_2,
    fontSize: 28, 
    fontFamily: theme.fonts.Poppins_500Medium,
    borderBottomColor: theme.base.base_2
  },
  selects: {
    flexDirection: "row",
    columnGap: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.base.base_7
  },
  gridTop: {
    flex: 1,
    flexDirection: "row",
    columnGap: 20
  },
  gridFooter: {
    height: 200,
    backgroundColor: theme.base.base_8,
    borderRadius: 15,
    padding: 16
  }
})