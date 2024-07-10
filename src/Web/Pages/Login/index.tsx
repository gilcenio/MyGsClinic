import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView, Animated, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import theme from '../../../Global/theme';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../Hooks';
import { DATAWELCOME } from '../../Consts';
import { Ionicons } from '@expo/vector-icons';

interface IData{
  email: string,
  password: string,
}

const validationSchema = yup.object().shape({
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

export default function Login() {
  const {signOutEmail} = useAuth()
  const { control, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(validationSchema),});
  const [scrollChange, setScrollChange] = useState(0);
  const [returning, setReturning] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const onSubmit = (data: IData) => {
    signOutEmail(data.email, data.password)
  }

  function handleScrollReturn() {
    if (scrollChange > 0) {

      scrollViewRef.current?.scrollTo({ x: (scrollChange - 1) * 1300, animated: true }); 
      setScrollChange(scrollChange - 1);
    }
  }

  function handleScrollUp() {
    if (scrollChange < DATAWELCOME.length - 1) {
      scrollViewRef.current?.scrollTo({ x: (scrollChange + 1) * 1300, animated: true }); 
      setScrollChange(scrollChange + 1);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (returning) {
        handleScrollReturn();
        if (scrollChange === 0) {
          setReturning(false);
        }
      } else {
        handleScrollUp();
        if (scrollChange === 2) {
          setReturning(true);
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [scrollChange, returning]);

  return (
    <View style={styles({}).container}>
      <View style={styles({}).box1}>
        <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={false}>
          {DATAWELCOME.map((item) => {
            return(
              <View style={{width: "50%", height: "100%", justifyContent: "center", alignItems: "center"}}>
                <Image source={item.image} resizeMode='center'/> 
              </View>
            )
          })}
        </ScrollView>
      </View>
      <View style={styles({}).box2}>
        <View style={styles({}).boxLogin}>
          <Text 
            style={
              [
                styles({fontSize: 30, fontFamily: theme.fonts.Poppins_900Black, fontColor: theme.base.base_2}).text,
                {textAlign: "center", marginBottom: 20}
              ]
            }
          >
            My Clinic
          </Text>

          <Text 
            style={
              styles({fontSize: 25, fontFamily: theme.fonts.Poppins_500Medium}).text
            }
          >
            Login
          </Text>

          <View style={{rowGap: 6}}>
            <Text style={styles({fontSize: 16, fontColor: theme.text.text_2, fontFamily: theme.fonts.Poppins_400Regular}).text}>E-mail</Text>
            <Controller
              control={control}
              name={'email'}
              render={({ field: { onChange, value } }) => (
                <TextInput 
                  value={value} 
                  onChangeText={onChange}
                  placeholderTextColor={theme.text.text_3}
                  style={
                    styles({
                      error: errors.email?.message
                    }).input
                  } 
                  placeholder={'Insira seu e-mail'}
                />
              )}
            />

          </View>

          <View style={{rowGap: 6}}>
            <Text style={styles({fontSize: 16, fontColor: theme.text.text_2, fontFamily: theme.fonts.Poppins_400Regular}).text}>Senha</Text>
            <Controller
              control={control}
              name={'password'}
              render={({ field: { onChange, value } }) => (
                <View style={{justifyContent: "center"}}>
                  <TextInput 
                    value={value} 
                    onChangeText={onChange} 
                    placeholderTextColor={theme.text.text_3}
                    secureTextEntry={secureText}
                    style={
                      styles({
                        error: errors.password?.message
                      }).input
                    } 
                    placeholder={'Insira seu e-mail'}
                  />
                  <Ionicons 
                    name={secureText ? "eye-outline" : "eye-off-outline"}
                    size={25} 
                    color={theme.text.text_3}
                    style={{position: "absolute", right: 10}}
                    onPress={() => setSecureText(!secureText)}
                  />                
                </View>
              )}
            />
            <Text style={[styles({fontSize: 14, fontColor: theme.base.base_2, fontFamily: theme.fonts.Poppins_400Regular}).text, {marginTop: 6}]}>Esqueceu sua senha?</Text>
          </View>

          <TouchableOpacity 
            onPress={handleSubmit(onSubmit)}
            style={styles({}).button}
          >
            <Text style={styles({fontSize: 16, fontColor: theme.text.text_5, fontFamily: theme.fonts.Poppins_500Medium}).text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  )
}

export interface StylesheetInterface {
  fontSize?: number
  fontColor?: string
  fontFamily?: string
  error?: string
}

const styles = ({fontSize, fontColor, fontFamily, error}: StylesheetInterface) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.base.base_1,
      flexDirection: "row"
    },
    box1: {
      width: "70%",
      padding: 20
    },
    box2: {
      paddingRight: 40,
      paddingVertical: 100,
      width: "30%",
    },
    boxLogin: {
      flex: 1,
      backgroundColor: theme.base.base_4,
      padding: 32,
      borderRadius: 40,
      justifyContent: "center",
      rowGap: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      // Elevação para Android
      // elevation: 5,
    },
    input: {
      width: "100%",
      height: 40,
      backgroundColor: theme.base.base_3,
      borderRadius: 8,
      paddingLeft: 16,
      borderWidth: error ? 1 : undefined,
      borderColor: theme.status.error,
      fontSize: 14, 
      fontFamily: theme.fonts.Poppins_400Regular
    },
    button: {
      height: 40,
      width: "100%",
      backgroundColor: theme.base.base_2,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    text: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: fontColor
    },
    toast:{
      height: 55, 
      width: "28%", 
      backgroundColor: "yellow",
      borderRadius: 20,
      position: "absolute",
      right: 40,
      top: 20
    }
  });

