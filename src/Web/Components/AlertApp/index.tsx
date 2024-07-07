import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import theme from '../../../Global/theme';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../Hooks';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { responsiveWidth } from '../../../Utils/responsive';
import ButtonApp from '../ButtonApp';

interface IData{
  title: string,
  dateStart: string
  hourStart: string
  dateFinal: string
  hourFinal: string
  isAllday: string
  frequency: string
  nameProfessional: string
  namePatient: string
  cor: string
  notes: string
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Campo obrigatório'),
  dateStart: yup.string().required('Campo obrigatório'),
  hourStart: yup.string().required('Campo obrigatório'),
  dateFinal: yup.string().required('Campo obrigatório'),
  hourFinal: yup.string().required('Campo obrigatório'),
  isAllday: yup.string(),
  frequency: yup.string(),
  nameProfessional: yup.string().required('Campo obrigatório'),
  namePatient: yup.string().required('Campo obrigatório'),
  cor: yup.string(),
  notes: yup.string(),
});

const AlertApp = ({visible}) => {
  const {hideAlert} = useAuth()
  const [show, setShow] = useState(false);
  const { control, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(validationSchema),});


  useEffect(() => {
    if (visible) {
      setShow(true)
    }else{
      setShow(false)
    }
  }, [visible]);

  if (!show) return null;

  const onSubmit = (data: IData) => {
    console.log(data)
  }

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles({}).alert}>
      <Ionicons 
        name={"close"}
        size={60} 
        color={theme.base.base_5}
        style={styles({}).icon}
        onPress={() => hideAlert()}
      />

      <View style={styles({}).content}>
        <Text style={styles({}).title}>Cadastrar nova agenda</Text>

        <ScrollView style={{marginBottom: 40}}>
          <View>
            <Text style={styles({}).text}>Titulo *</Text>
            <Controller
              control={control}
              name={'title'}
              render={({ field: { onChange, value } }) => (
                <TextInput 
                  value={value} 
                  onChangeText={onChange}
                  placeholderTextColor={theme.text.text_3}
                  style={
                    styles({
                      error: errors.title?.message
                    }).input
                  } 
                  placeholder={'Titulo da agenda'}
                />
              )}
            />
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Data inicial *</Text>
              <Controller
                control={control}
                name={'dateStart'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.dateStart?.message
                      }).input
                    } 
                    placeholder={'Data inicial'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Hora Inicio *</Text>
              <Controller
                control={control}
                name={'hourStart'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.dateFinal?.message
                      }).input
                    } 
                    placeholder={'Hora Inicio'}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Data final *</Text>
              <Controller
                control={control}
                name={'dateFinal'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.hourStart?.message
                      }).input
                    } 
                    placeholder={'Data final'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Hora final *</Text>
              <Controller
                control={control}
                name={'hourFinal'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.hourFinal?.message
                      }).input
                    } 
                    placeholder={'Hora final'}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Dia inteiro ?</Text>
              <Controller
                control={control}
                name={'isAllday'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.isAllday?.message
                      }).input
                    } 
                    placeholder={'Dia inteiro'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Frequencia</Text>
              <Controller
                control={control}
                name={'frequency'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.frequency?.message
                      }).input
                    } 
                    placeholder={'Frequencia'}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Nome do profissional *</Text>
              <Controller
                control={control}
                name={'nameProfessional'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.nameProfessional?.message
                      }).input
                    } 
                    placeholder={'Nome do Profissional'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Nome do paciente *</Text>
              <Controller
                control={control}
                name={'namePatient'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.namePatient?.message
                      }).input
                    } 
                    placeholder={'Nome do paciente'}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Cor</Text>
              <Controller
                control={control}
                name={'cor'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.cor?.message
                      }).input
                    } 
                    placeholder={'Cor'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Notas</Text>
              <Controller
                control={control}
                name={'notes'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.notes?.message
                      }).input
                    } 
                    placeholder={'Notas'}
                  />
                )}
              />
            </View>
          </View>

        </ScrollView>

        <ButtonApp onPress={handleSubmit(onSubmit)} title='Cadastrar agenda' iconName={'calendar'}/>
      </View>
    </Animated.View>
  )
}

export default AlertApp;

export interface IStylesheetInterface {
  error?: string
}

const styles = ({error}: IStylesheetInterface) =>
  StyleSheet.create({
    alert: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: "center",
      alignItems: "center",
      zIndex: 40
    },
    content: {
      width: responsiveWidth(70),
      backgroundColor: theme.base.base_4,
      borderRadius: 20,
      padding: 20,
    },
    icon: {
      position: "absolute",
      top: 40,
      right: 40
    },
    text: {
      fontFamily: theme.fonts.Poppins_700Bold,
      fontSize: 18,
      color: theme.text.text_4,
      marginVertical: 10
    },
    title: {
      fontFamily: theme.fonts.Poppins_700Bold,
      fontSize: 24,
      color: theme.text.text_4,
      marginVertical: 10,
      textAlign: 'center'
    },
    input: {
      width: "100%",
      height: 40,
      backgroundColor: theme.base.base_5,
      borderRadius: 8,
      paddingLeft: 16,
      borderWidth: error && 1,
      borderColor: theme.status.error,
      fontSize: 14, 
      fontFamily: theme.fonts.Poppins_400Regular,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    controller: {
      flex: 1
    }
  });