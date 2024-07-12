import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../../Global/theme';
import { useAuth } from '../../../Hooks';
import useResponsive from '../../../../Context/useResponsive';
import TextApp from '../../TextApp';

interface IHeaderRight{
  color?: string
}


export default function HeaderRight({color}: IHeaderRight) {
  const {scaledWidth} = useResponsive()
  const {user} = useAuth()

  return (
    <View style={[styles({}).content, {columnGap: scaledWidth(1.5)}]}>
      <View>
        <Ionicons 
          name={"notifications-outline"}
          size={scaledWidth(1.3)} 
          color={color ? color : theme.text.text_4}
        /> 
        <View style={[styles({}).badgeNotify, {width: scaledWidth(0.5), height: scaledWidth(0.5)}]}/>
      </View>

      <TouchableOpacity onPress={() => {}} style={styles({}).infos}>
        <View>
          <Image 
            source={{uri: "https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg"}} 
            style={[styles({}).avatar, {width: scaledWidth(2.5), height: scaledWidth(2.5)}]}
          />
          <View style={[styles({}).badge, {width: scaledWidth(0.8), height: scaledWidth(0.8)}]}/>
        </View>

        <View>
          <TextApp fontSize={0.9} title={user.email} color={color} fontFamily={theme.fonts.Poppins_500Medium}/>
          <TextApp fontSize={0.5} title={user.userType} color={color} fontFamily={theme.fonts.Poppins_400Regular}/>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export interface IStylesheetInterface {
  fontFamily?: string,
  fontSize?: number,
  color?: string
}

const styles = ({fontSize, color, fontFamily}: IStylesheetInterface) =>
  StyleSheet.create({
    content: {
      flexDirection: "row",
      marginRight: 16,
      alignItems: "center",
    },
    infos: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 10
    },
    text: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color ? color : theme.text.text_2
    },
    avatar: {
      backgroundColor: "red",
      borderRadius: 100
    },
    badge: {
      borderRadius: 100,
      backgroundColor: theme.base.base_2,
      position: "absolute",
      right: 0,
      bottom: 0,
      borderWidth: 3,
      borderColor: theme.base.base_8
    },
    badgeNotify: {
      borderRadius: 100,
      backgroundColor: theme.status.error,
      position: "absolute",
      right: 0,
      top: 0,
    },
    arrowIcon: {
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 14, 
      fontFamily: theme.fonts.Poppins_400Regular
    },
    containerInput: {
      width: 500,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.base.base_5,
      columnGap: 4,
      borderRadius: 10, 
    }
  }
);