import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../_Styles'
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import theme from '../../../Global/theme';
import { dateRegex, mask, SEX } from '../../Consts';
import ButtonApp from '../../Components/ButtonApp';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Avatar from '../../Assets/avatar.png'
import { Ionicons } from '@expo/vector-icons';
import MaskInput, { Masks } from 'react-native-mask-input';
import SelectFormApp from '../../Components/SelectFormApp';

interface IData{
  nome: string,
  dataNascimento: string,
  sexo: string,
  telefone: string, 
  estadoCivil: string, 
  rg: string, 
  cpf: string, 
  UFNascimento: string,     
  cidadeNascimento: string, 
  nomeMae: string, 
  nomePai: string,  
  conjugue: string, 
  CPFConjugue: string, 
  endereco: string, 
  bairro: string, 
  estado: string, 
  cidade: string, 
  profissao: string, 
  email: string, 
  numeroCartaoSaude: string, 
  nomeSocial: string, 
  peso: string, 
  altura: string,
  observacao: string, 
  myDoctors: Object
}

const validationSchema = yup.object().shape({
  sexo: yup.string().required('Campo obrigatório'),
  nome: yup.string().required('Campo obrigatório'),
  dataNascimento: yup.string().required('Campo obrigatório'),
  telefone: yup.string().required('Campo obrigatório'),
  estadoCivil: yup.string().required('Campo obrigatório'), 
  rg: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório'),
  UFNascimento: yup.string().required('Campo obrigatório'),
  cidadeNascimento: yup.string().required('Campo obrigatório'),
  nomeMae: yup.string().required('Campo obrigatório'),
  nomePai: yup.string(), 
  conjugue: yup.string(), 
  CPFConjugue: yup.string(), 
  endereco: yup.string().required('Campo obrigatório'), 
  bairro: yup.string().required('Campo obrigatório'),
  estado: yup.string().required('Campo obrigatório'),
  cidade: yup.string().required('Campo obrigatório'),
  profissao: yup.string(),
  email: yup.string(), 
  numeroCartaoSaude: yup.string(),
  nomeSocial: yup.string(), 
  peso: yup.string(), 
  altura: yup.string(),
  observacao: yup.string(),
});

export default function Patients() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isSelected, setIsSelected] = useState<any>(undefined)
  const { control, handleSubmit, watch, formState: { errors }} = useForm({resolver: yupResolver(validationSchema),});
  const watchAllFields = watch()

  async function pickAndResizeImage() {
    setIsLoading(true)
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });
  
    if (result && result.assets) {
      const resizedImage = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 100, height: 100 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
      );
  
      setImage(resizedImage.base64)

    }else{
      setIsLoading(false)
    }
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <View style={[globalStyles.content, {flexDirection: "row", columnGap: 20}]}>
      <View style={styles({}).box2}>
        {isSelected != undefined && <Ionicons 
          name={isSelected === 0 ? "male" : "female"}
          size={30} 
          color={theme.text.text_4}
          style={{position: "absolute", top: 10, right: 10}}
        /> }

        <Image source={!image ? Avatar : { uri: `data:image/jpeg;base64,${image}`}} style={styles({}).image}/>

        <View style={{width: "100%", height: "100%"}}>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_700Bold,
              fontSize: 18,
              color: theme.text.text_4
            }).text}
          >
            {watchAllFields.nome}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.dataNascimento}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.telefone}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.estadoCivil}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.rg}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.cpf}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.UFNascimento}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.cidadeNascimento}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.nomeMae}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.nomePai}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.conjugue}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.CPFConjugue}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.endereco}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.bairro}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.estado}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.cidade}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.profissao}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.email}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.numeroCartaoSaude}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.nomeSocial}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.peso}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.altura}
          </Text>
          <Text style={
            styles({
              fontFamily: theme.fonts.Poppins_400Regular,
              fontSize: 16,
              color: theme.text.text_2
            }).text}
          >
            {watchAllFields.observacao}
          </Text>
        </View>

      </View>

      <View style={styles({}).box1}>
        <Text style={styles({
          fontFamily: theme.fonts.Poppins_700Bold,
          fontSize: 24,
          color: theme.text.text_4}).text}
        >
          Cadastrar Paciente
        </Text>

        <ScrollView style={{paddingTop: 20, paddingBottom: 40, rowGap: 40}}>

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

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Nome completo *</Text>
              <Controller
                control={control}
                name={'nome'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.nome?.message
                      }).input
                    } 
                    placeholder={'Nome completo'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Data de nascimento *</Text>
              <Controller
                control={control}
                name={'dataNascimento'}
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    placeholder={"Data de nascimento"}
                    mask={Masks.DATE_DDMMYYYY}
                    style={
                      styles({
                        error: errors.dataNascimento?.message
                      }).input
                    } 
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Telefone *</Text>
              <Controller
                control={control}
                name={'telefone'}
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    placeholder={"Telefone"}
                    mask={Masks.BRL_PHONE}
                    style={
                      styles({
                        error: errors.dataNascimento?.message
                      }).input
                    } 
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Estado civil *</Text>
              <Controller
                control={control}
                name={'estadoCivil'}
                render={({ field: { onChange, value } }) => (
                  <SelectFormApp 
                    value={value} 
                    onChange={onChange}
                    error={errors.estadoCivil?.message}
                    placeholder={'Estado civil'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>RG *</Text>
              <Controller
                control={control}
                name={'rg'}
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    placeholder={"RG"}
                    mask={mask}
                    style={
                      styles({
                        error: errors.dataNascimento?.message
                      }).input
                    } 
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>CPF *</Text>
              <Controller
                control={control}
                name={'cpf'}
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    placeholder={"CPF"}
                    mask={Masks.BRL_CPF}
                    style={
                      styles({
                        error: errors.dataNascimento?.message
                      }).input
                    } 
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>UF de nascimento *</Text>
              <Controller
                control={control}
                name={'UFNascimento'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.UFNascimento?.message
                      }).input
                    } 
                    placeholder={'UF de nascimento'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Cidade de nascimento *</Text>
              <Controller
                control={control}
                name={'cidadeNascimento'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.cidadeNascimento?.message
                      }).input
                    } 
                    placeholder={'Cidade de nascimento'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Nome da mãe *</Text>
              <Controller
                control={control}
                name={'nomeMae'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.nomeMae?.message
                      }).input
                    } 
                    placeholder={'Nome da mãe'}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Nome do Pai</Text>
              <Controller
                control={control}
                name={'nomePai'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.nomePai?.message
                      }).input
                    } 
                    placeholder={'Nome do Pai'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Conjugue</Text>
              <Controller
                control={control}
                name={'conjugue'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.conjugue?.message
                      }).input
                    } 
                    placeholder={'Conjugue'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>CPF conjugue</Text>
              <Controller
                control={control}
                name={'CPFConjugue'}
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    placeholder={"CPF conjugu"}
                    mask={Masks.BRL_CPF}
                    style={
                      styles({
                        error: errors.dataNascimento?.message
                      }).input
                    } 
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Endereço *</Text>
              <Controller
                control={control}
                name={'endereco'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.endereco?.message
                      }).input
                    } 
                    placeholder={'Endereço'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Bairro *</Text>
              <Controller
                control={control}
                name={'bairro'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.bairro?.message
                      }).input
                    } 
                    placeholder={'Bairro'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Estado *</Text>
              <Controller
                control={control}
                name={'estado'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.estado?.message
                      }).input
                    } 
                    placeholder={'Estado'}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Cidade *</Text>
              <Controller
                control={control}
                name={'cidade'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.cidade?.message
                      }).input
                    } 
                    placeholder={'Cidade'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Profissão</Text>
              <Controller
                control={control}
                name={'profissao'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.profissao?.message
                      }).input
                    } 
                    placeholder={'Profissão'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>E-mail</Text>
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
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Numero do cartão de saude</Text>
              <Controller
                control={control}
                name={'numeroCartaoSaude'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.numeroCartaoSaude?.message
                      }).input
                    } 
                    placeholder={'Numero do cartão de saude'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Nome social</Text>
              <Controller
                control={control}
                name={'nomeSocial'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.nomeSocial?.message
                      }).input
                    } 
                    placeholder={'Nome social'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Peso</Text>
              <Controller
                control={control}
                name={'peso'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.peso?.message
                      }).input
                    } 
                    placeholder={'Peso'}
                  />
                )}
              />
            </View>
          </View>

          <View style={{flexDirection: "row", columnGap: 20}}>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Altura em centimetros</Text>
              <Controller
                control={control}
                name={'altura'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.altura?.message
                      }).input
                    } 
                    placeholder={'Altura em centimetros'}
                  />
                )}
              />
            </View>
            <View style={styles({}).controller}>
              <Text style={styles({}).title}>Observção</Text>
              <Controller
                control={control}
                name={'observacao'}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    value={value} 
                    onChangeText={onChange}
                    placeholderTextColor={theme.text.text_3}
                    style={
                      styles({
                        error: errors.observacao?.message
                      }).input
                    } 
                    placeholder={'Observção'}
                  />
                )}
              />
            </View>
          </View>
          
        </ScrollView>

        <ButtonApp onPress={handleSubmit(onSubmit)} title='Cadastrar paciente' iconName={'person'}/>
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