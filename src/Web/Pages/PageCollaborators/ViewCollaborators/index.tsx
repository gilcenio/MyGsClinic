import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../../_Styles';
import theme from '../../../../Global/theme';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import TextApp from '../../../Components/TextApp';
import ButtonApp from '../../../Components/ButtonApp';
import useResponsive from '../../../../Context/useResponsive';
import { Ionicons } from '@expo/vector-icons';

export default function ViewCollaborators() {
  const {scaledWidth} = useResponsive()
  const [value, onChange] = useState("")

  return (
    <View style={[globalStyles({}).content, {rowGap: 10}]}>
      <View style={styles().header}>
        <TextApp title='Colaboradores' fontSize={1.5} fontFamily={theme.fonts.Poppins_700Bold}/>

        <View style={{flexDirection: "row", width: "50%", justifyContent: "flex-end", columnGap: 10}}>
          <TextInput 
            value={value} 
            onChangeText={onChange}
            placeholderTextColor={theme.text.text_3}
            style={[styles().input, {fontSize: scaledWidth(0.8)}]} 
            placeholder={'Pesquisar'}
          />
          <ButtonApp onPress={() => {}} title='Adicionar' iconName={'add-circle'} paddingHorizontal={20}/>
        </View>
      </View>

      <View style={styles().content}>
        <View style={styles().header}>
          <View style={[styles().block, {width: "10%", borderTopLeftRadius: 10}]}>
            <TextApp title='Imagem' fontSize={1.2} fontFamily={theme.fonts.Poppins_600SemiBold}/>
          </View>
          <View style={[styles().block, {width: "40%"}]}>
            <TextApp title='Nome' fontSize={1.2} fontFamily={theme.fonts.Poppins_600SemiBold}/>
          </View>
          <View style={[styles().block, {width: "30%"}]}>
            <TextApp title='Documento' fontSize={1.2} fontFamily={theme.fonts.Poppins_600SemiBold}/>
          </View>
          <View style={[styles().block, {width: "20%", borderTopRightRadius: 10}]}>
            <TextApp title='Ações' fontSize={1.2} fontFamily={theme.fonts.Poppins_600SemiBold}/>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15].map(() => {
              return(
                <View style={styles().header}>
                  <View style={[styles().block, {width: "10%"}]}>
                    <TextApp title='Imagem' fontSize={1.2} fontFamily={theme.fonts.Poppins_600SemiBold}/>
                  </View>
                  <View style={[styles().block, {width: "40%"}]}>
                    <TextApp title='Nome' fontSize={1.2} fontFamily={theme.fonts.Poppins_600SemiBold}/>
                  </View>
                  <View style={[styles().block, {width: "30%"}]}>
                    <TextApp title='Documento' fontSize={1.2} fontFamily={theme.fonts.Poppins_600SemiBold}/>
                  </View>
                  <View style={[styles().block, {width: "20%", columnGap: scaledWidth(2)}]}>
                    <Ionicons 
                      name={"trash"}
                      size={scaledWidth(1.3)} 
                      color={theme.text.text_4}
                    /> 
                    <Ionicons 
                      name={"pencil"}
                      size={scaledWidth(1.3)} 
                      color={theme.text.text_4}
                    /> 
                    <Ionicons 
                      name={"eye"}
                      size={scaledWidth(1.3)} 
                      color={theme.text.text_4}
                    /> 
                  </View>
                </View>
              )
            })
          }
        </ScrollView>


      </View>
    </View>
  )
}

const styles = () =>
  StyleSheet.create({
    header: {
      width: "100%",
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    content: {
      flex: 1,
    },
    block: {
      height: "100%",
      backgroundColor: theme.base.base_8,
      borderWidth: 0.1,
      borderColor: theme.base.base_7,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    },
    input: {
      width: "50%",
      height: 40,
      backgroundColor: theme.base.base_5,
      borderRadius: 8,
      paddingLeft: 16, 
      fontFamily: theme.fonts.Poppins_400Regular,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
  }
);