import { View, Text, StyleSheet, Image, Button, ScrollView, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../_Styles'
import theme from '../../../Global/theme'
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonApp from '../../Components/ButtonApp';
import Avatar from '../../Assets/avatar.png'
import { SEX, UFS } from '../../Consts';
import { Ionicons } from '@expo/vector-icons';
import SelectFormApp from '../../Components/SelectFormApp';
import MaskInput, { Masks } from 'react-native-mask-input';

interface IData{
  sex: string
  name: string,
  advice: string
  ufAdvice: string
  boardNumber: string
  CPF: string
  professionalSubscription: string
  phone: string
  email: string
  funtion: string

  level: string
}

const validationSchema = yup.object().shape({
  sex: yup.string().required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
  advice: yup.string().required('Campo obrigatório'),
  ufAdvice: yup.string().required('Campo obrigatório'),
  boardNumber: yup.string().required('Campo obrigatório'),
  CPF: yup.string().required('Campo obrigatório'),
  professionalSubscription: yup.string().required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  funtion: yup.string().required('Campo obrigatório'),
  level: yup.string().required('Campo obrigatório')
});


export default function Collaborators() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isSelected, setIsSelected] = useState<any>(undefined)
  const { control, handleSubmit, watch, formState: { errors }} = useForm({resolver: yupResolver(validationSchema),});
  const watchAllFields = watch()

  async function pickAndResizeImage() {
    setIsLoading(true);
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });
  
    if (result && result.assets && result.assets.length > 0) {
      const { uri, width, height } = result.assets[0];
      
      // Define a largura desejada para a imagem redimensionada
      const desiredWidth = 100;
  
      // Calcule a altura mantendo a proporção original
      const ratio = width / height;
      const desiredHeight = desiredWidth / ratio;
  
      const resizedImage: any = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: desiredWidth, height: desiredHeight } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
      );
  
      setImage(resizedImage.base64);
    } else {
      setIsLoading(false);
    }
  }

  const onSubmit = (data: IData) => {
    console.log(data)
  }

  return (
    <View style={[globalStyles({}).content, {flexDirection: "row", columnGap: 20}]}>
      <View style={styles({}).box1}>
        <Text style={styles({
          fontFamily: theme.fonts.Poppins_700Bold,
          fontSize: 24,
          color: theme.text.text_4}).text}
        >
          Cadastrar colaborador
        </Text>

        <ScrollView style={{marginTop: 20, rowGap: 40, paddingHorizontal: 10}}>

          <View style={{flexDirection: "row", columnGap: 20, alignItems: "center"}}>
            <View style={[styles({}).controller, {flexDirection: "row", columnGap: 40}]}>
              {
                SEX.map((item, index) => {
                  return(
                    <TouchableOpacity 
                      onPress={() => setIsSelected(index)}
                      style={{flexDirection: "row", alignItems: "center", columnGap: 10}}
                    >
                      <View style={[styles({}).select, {backgroundColor: isSelected === index ? theme.base.base_2 : undefined }]}/>
                      <Text style={styles({}).title}>{item+" *"}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
            <View style={styles({}).controller}>
              <ButtonApp onPress={() => pickAndResizeImage()} title='Selecionar uma foto' iconName={'camera'} bg={theme.base.base_2}/>
            </View>
          </View>

          <View>
            <Text style={styles({}).title}>Nome completo *</Text>
            <Controller
              control={control}
              name={'name'}
              render={({ field: { onChange, value } }) => (
                <TextInput 
                  value={value} 
                  onChangeText={onChange}
                  placeholderTextColor={theme.text.text_3}
                  style={
                    styles({
                      error: errors.name?.message
                    }).input
                  } 
                  placeholder={'Nome completo'}
                />
              )}
            />
          </View>

          <View style={{flexDirection: "row", columnGap: 20, zIndex: 10}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Conselho *</Text>
              <Controller
                control={control}
                name={'advice'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.advice?.message
                      }).input
                    } 
                    placeholder={'Conselho'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>UF do conselho *</Text>
              <Controller
                control={control}
                name={'ufAdvice'}
                render={({ field: { onChange, value } }) => (
                  <SelectFormApp 
                    value={value} 
                    onChange={onChange}
                    error={errors.ufAdvice?.message}
                    placeholder={'UF do conselho'}
                    DATA={UFS}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Número do conselho *</Text>
              <Controller
                control={control}
                name={'boardNumber'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.boardNumber?.message
                      }).input
                    } 
                    placeholder={'Número do conselho'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>CPF *</Text>
              <Controller
                control={control}
                name={'CPF'}
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    placeholder={"CPF"}
                    mask={Masks.BRL_CPF}
                    style={
                      styles({
                        error: errors.CPF?.message
                      }).input
                    } 
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Assinatura profissional *</Text>
              <Controller
                control={control}
                name={'professionalSubscription'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.professionalSubscription?.message
                      }).input
                    } 
                    placeholder={'Assinatura profissional'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Telefone *</Text>
              <Controller
                control={control}
                name={'phone'}
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    placeholder={"Telefone"}
                    mask={Masks.BRL_PHONE}
                    style={
                      styles({
                        error: errors.phone?.message
                      }).input
                    } 
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>E-mail *</Text>
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
                    placeholder={'E-mail'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Função *</Text>
              <Controller
                control={control}
                name={'funtion'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.funtion?.message
                      }).input
                    } 
                    placeholder={'Função'}
                  />
                )}
              />
            </View>
          </View>
          
          <View style={styles({}).controller}>
            <Text style={styles({}).title}>Nivel de acesso *</Text>
            <Controller
              control={control}
              name={'level'}
              render={({ field: { onChange, value } }) => (
                <TextInput 
                  value={value} 
                  onChangeText={onChange}
                  placeholderTextColor={theme.text.text_3}
                  style={
                    styles({
                      error: errors.level?.message
                    }).input
                  } 
                  placeholder={'Nivel de acesso'}
                />
              )}
            />
          </View>
          
        </ScrollView>

        <ButtonApp onPress={handleSubmit(onSubmit)} title='Cadastrar colaborador' iconName={'person'}/>
      </View>
      
      <View style={styles({}).box2}>
        {isSelected != undefined && <Ionicons 
          name={isSelected === 0 ? "male" : "female"}
          size={30} 
          color={theme.text.text_4}
          style={{position: "absolute", top: 10, right: 10}}
        /> }

        <Image source={!image ? Avatar : { uri: `data:image/jpeg;base64,${image}`}} style={styles({}).image}/>

        <View style={{width: "100%"}}>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_700Bold,
              fontSize: 18,
              color: theme.text.text_4
            }).text}
          >
            {watchAllFields.name}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.advice && `Conselho: ${watchAllFields.advice}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.ufAdvice && `UF do conselho: ${watchAllFields.ufAdvice}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.boardNumber && `Número do conselho: ${watchAllFields.boardNumber}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.CPF && `CPF: ${watchAllFields.CPF}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.professionalSubscription && `Assinatura do profissional: ${watchAllFields.professionalSubscription}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.phone && `Telefone: ${watchAllFields.phone}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.email && `E-mail: ${watchAllFields.email}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.funtion && `Função: ${watchAllFields.funtion}`}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.level && `Nivel de acesso: ${watchAllFields.level}`}
          </Text>
        </View>

      </View>
    </View>
  )
}

export interface IStylesheetInterface {
  fontFamily?: string,
  fontSize?: number,
  color?: string,
  error?: string
}

const styles = ({fontSize, color, fontFamily, error}: IStylesheetInterface) =>
  StyleSheet.create({
    box2: {
      width: "20%",
      height: "60%",
      backgroundColor: theme.base.base_8,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      padding: 20,
      alignItems: "center",
      rowGap: 10
    },
    box1: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: theme.base.base_8,
      padding: 20,
      rowGap: 10
    },
    image: {
      width: 125, 
      height: 125,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: theme.base.base_2
    },
    text: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
      textAlign: "center"
    },
    title: {
      fontFamily: theme.fonts.Poppins_700Bold,
      fontSize: 18,
      color: theme.text.text_4,
      marginVertical: 15
    },
    input: {
      width: "100%",
      height: 40,
      backgroundColor: theme.base.base_5,
      borderRadius: 8,
      paddingLeft: 16,
      borderWidth: error ? 1 : undefined,
      borderColor: theme.status.error,
      fontSize: 14, 
      fontFamily: theme.fonts.Poppins_400Regular,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    controller: {
      flex: 1
    },
    select: {
      width: 30,
      height: 30,
      borderRadius: 100,
      borderWidth: 6
    }
  });