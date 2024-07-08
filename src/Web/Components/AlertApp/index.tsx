import { View, Text, StyleSheet, TextInput, ScrollView, Switch, Pressable, TouchableOpacity } from 'react-native'
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
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './custom-datepicker.css'
import { DATACOLOR, FREQUENCY } from '../../Consts';

interface IData{
  title: string,
  dateStart: string
  dateFinal: string
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
  dateFinal: yup.string().required('Campo obrigatório'),
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
  const [startDate, setStartDate] = useState(new Date());
  const [isEnabled, setIsEnabled] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [frequencyIndex, setFrequencyIndex] = useState(0);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

          <View style={{zIndex: 10, flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Data e hora inicio *</Text>
              <Controller
                control={control}
                name={'dateStart'}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className={`custom-datepicker custom-datepicker-input ${errors.dateStart?.message ? 'error' : ''}`}
                    selected={startDate} 
                    onChange={(date) => {setStartDate(date), onChange(value)}} 
                    showTimeSelect
                    startDate={new Date()}
                    minDate={new Date()}
                    placeholderText="Data e hora"
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Data e hora final *</Text>
              <Controller
                control={control}
                name={'dateFinal'}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className={`custom-datepicker custom-datepicker-input ${errors.dateFinal?.message ? 'error' : ''}`}
                    selected={startDate} 
                    onChange={(date) => {setStartDate(date), onChange(value)}} 
                    showTimeSelect
                    startDate={new Date()}
                    minDate={new Date()}
                    placeholderText="Data e hora"
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
              <Text style={styles({}).text}>Dia inteiro ?</Text>
              <View style={[styles({}).input, {flexDirection: "row", alignItems: "center"}]}>
                <Text style={styles({fontSize: 14, fontFamily: theme.fonts.Poppins_400Regular}).text}>{isEnabled ? "Sim" : "Não"}</Text>

                <Switch
                  trackColor={{false: '#767577', true: theme.base.base_2}}
                  thumbColor={isEnabled ? '#f5dd4b' : theme.text.text_5}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{
                    position: "absolute",
                    right: 10
                  }}
                />
              </View>
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Frequencia</Text>
              <View style={{width: "100%", height: 40, borderRadius: 8, flexDirection: "row", columnGap: 10}}>
                {
                  FREQUENCY.map((item, index) => {
                    return(
                      <TouchableOpacity
                        onPress={() => setFrequencyIndex(index)}
                        style={[styles({}).selectFrequency,
                          {borderWidth: frequencyIndex === index ? 3 : undefined}
                        ]}
                      >
                        <Text style={styles({fontSize: 14, fontFamily: theme.fonts.Poppins_400Regular}).text}>{item}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).text}>Cor</Text>
              <View style={{width: "100%", height: 40, borderRadius: 8}}>
                <ScrollView horizontal>
                  {DATACOLOR.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() => setColorIndex(index)}
                      style={[styles({}).select, {backgroundColor: item.item, borderWidth: colorIndex === index ? 3 : undefined}]}
                    >
                      {colorIndex === index && <Ionicons 
                        name={"checkmark-sharp"}
                        size={20} 
                        color={theme.text.text_5}
                      />}
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
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
  fontSize?: number
  fontColor?: string
  fontFamily?: string
}

const styles = ({error, fontColor, fontFamily, fontSize}: IStylesheetInterface) =>
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
    selectFrequency: {
      flex: 1,
      backgroundColor: theme.base.base_5,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      paddingHorizontal: 10
    },
    select: {
      width: 29,
      height: "100%",
      borderColor: theme.text.text_4,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 4
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
      marginVertical: 10,
      color: fontColor ? fontColor : theme.text.text_4,
      fontSize: fontSize ? fontSize : 18,
      fontFamily: fontFamily ? fontFamily : theme.fonts.Poppins_700Bold
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