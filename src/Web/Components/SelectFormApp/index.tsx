import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import theme from '../../../Global/theme'
import { useAuth } from '../../Hooks'

interface ISelectFormApp{
  value: string
  onChange: (...event: any[]) => void
  error: string | undefined
  DATA: string[]
  placeholder?: string | undefined
  type?: string,
  UFNascimento?: string
  message? : string
}

export default function SelectFormApp({value, onChange, error, placeholder, DATA, UFNascimento, type, message}: ISelectFormApp) {
  const {showToast} = useAuth()
  const [isSlected, setIsSlected] = useState(false)
  const [searchText, setSearchText] = useState('');

  function handlerSelectCity(){
    type === "city" ? UFNascimento ? setIsSlected(!isSlected) : showToast('error', `${message}`) : setIsSlected(!isSlected)
  }

  const filteredRR = DATA && DATA.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <TouchableOpacity style={styles({error}).content} onPress={() => handlerSelectCity()}>
        <Text style={styles({color: value ? theme.text.text_4 : theme.text.text_3}).text}>{value ? value : placeholder}</Text>
      </TouchableOpacity>
      {isSlected && 
        <View style={styles({}).select}>
          <TextInput 
            value={searchText} 
            onChangeText={setSearchText}
            placeholderTextColor={theme.text.text_3}
            style={styles({}).input} 
            placeholder={'Pesquisar'}
          />
          <ScrollView contentContainerStyle={{rowGap: 6}}>
            {
              filteredRR.map((item: any, index: number) => {
                return(
                  <Text
                    key={index+item}
                    onPress={() => {onChange(item), setIsSlected(false)}}
                    style={[
                      styles({}).text,
                      {
                        backgroundColor: theme.base.base_3, 
                        paddingVertical: 2, 
                        fontFamily: theme.fonts.Poppins_500Medium,
                        paddingLeft: 8,
                        borderRadius: 8
                      }
                    ]}
                  >
                    {item}
                  </Text>
                )
              })
            }
          </ScrollView>
        </View>
      }
    </>
  )
}

export interface IStylesheetInterface {
  color?: string,
  error?: string
}

const styles = ({error, color}: IStylesheetInterface) =>
  StyleSheet.create({
    content: {
      width: "100%",
      height: 40,
      backgroundColor: theme.base.base_5,
      justifyContent: "center",
      borderRadius: 8,
      paddingLeft: 16,
      borderWidth: error ? 1 : undefined,
      borderColor: theme.status.error,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    input: {
      width: "100%",
      height: 40,
      backgroundColor: theme.base.base_5,
      borderRadius: 8,
      padding: 16,
      borderWidth: error ? 1 : undefined,
      borderColor: theme.status.error,
      fontSize: 14, 
      fontFamily: theme.fonts.Poppins_400Regular,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    select: {
      width: "100%",
      maxHeight: 200,
      backgroundColor: theme.base.base_5,
      borderRadius: 8,
      position: "absolute",
      top: 100,
      paddingRight: 16,
      paddingLeft: 8,
      paddingVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 6,
      rowGap: 10,
    },
    text: {
      fontFamily: theme.fonts.Poppins_400Regular,
      fontSize: 14,
      color: color,
    },
})