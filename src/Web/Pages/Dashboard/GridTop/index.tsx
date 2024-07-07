import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import theme from '../../../../Global/theme'
import BarChart from '../../../Components/BarChart'
import { dayData, monthData, weekData, yearData } from '../../../Consts'
import PieChart from '../../../Components/PieChart'

interface IGridTop{
  title: string
  type: "left" | "right"
}

export default function GridTop({title, type}: IGridTop) {
  const [isSelected, setIsSelected] = useState(0)
  const [selectData, setselectData] = useState(dayData)

  function handlerSelectData(value: number){
    if(value === 0){
      setIsSelected(0)
      setselectData(dayData)
    }else if(value === 1){
      setIsSelected(1)
      setselectData(weekData)
    }else if(value === 2){
      setIsSelected(2)
      setselectData(monthData)
    }else{
      setIsSelected(3)
      setselectData(yearData)
    }
  }

  return (
    <View style={styles[type]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.selects}>
        <Text 
          onPress={() => handlerSelectData(0)} 
          style={[
            styles.textSelects, {
              borderBottomWidth: isSelected === 0 ? 4 : undefined, 
              color: isSelected === 0 ? theme.base.base_2 : theme.text.text_6
            }]}
        >
          Diário
        </Text>
        <Text 
          onPress={() => handlerSelectData(1)} 
          style={[styles.textSelects, {
            borderBottomWidth: isSelected === 1 ? 4 : undefined, 
            color: isSelected === 1 ? theme.base.base_2 : theme.text.text_6
          }]}
        >
          Semanal
        </Text>
        <Text 
          onPress={() => handlerSelectData(2)} 
          style={[styles.textSelects, {
            borderBottomWidth: isSelected === 2 ? 4 : undefined, 
            color: isSelected === 2 ? theme.base.base_2 : theme.text.text_6
          }]}
        >
          Mensal
        </Text>
        <Text 
          onPress={() => handlerSelectData(3)} 
          style={[styles.textSelects, {
            borderBottomWidth: isSelected === 3 ? 4 : undefined, 
            color: isSelected === 3 ? theme.base.base_2 : theme.text.text_6
          }]}
        >
          Anual
        </Text>
      </View>
      {
        type === "left" ? <BarChart data={selectData}/> : <PieChart data={selectData}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  left: {
    flex: 1,
    backgroundColor: theme.base.base_8,
    borderRadius: 15,
    padding: 16,
    rowGap: 10,
  },
  right: {
    width: "30%",
    backgroundColor: theme.base.base_8,
    borderRadius: 15,
    padding: 16,
    rowGap: 10
  },
  selects: {
    flexDirection: "row",
    columnGap: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.base.base_7
  },
  textSelects: {
    fontSize: 18, 
    fontFamily: theme.fonts.Poppins_500Medium,
    borderBottomColor: theme.base.base_2
  },
  title: {
    fontSize: 24, 
    fontFamily: theme.fonts.Poppins_500Medium,
    color: theme.text.text_6
  }
})