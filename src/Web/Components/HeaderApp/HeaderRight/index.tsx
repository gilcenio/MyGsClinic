import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../../Global/theme';
import { useAuth } from '../../../Hooks';

export default function HeaderRight() {
  const {user} = useAuth()
  const [search, setSearch] = useState("")

  return (
    <View style={styles.content}>
      {/* <View style={styles.containerInput}>
        <Ionicons 
          name={"search-outline"}
          size={20} 
          color={theme.text.text_4}
          style={{marginLeft: 8}}
        /> 
        <TextInput 
          value={search}
          onChangeText={setSearch}
          placeholder='Buscar'
          style={styles.input}
          placeholderTextColor={theme.text.text_3}
        />
      </View> */}

      <View>
        <Ionicons 
          name={"notifications-outline"}
          size={25} 
          color={theme.text.text_4}
        /> 
        <View style={styles.badgeNotify}/>
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.infos}>
        <View>
          <Image 
            source={{uri: "https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg"}} 
            style={styles.avatar}
          />
          <View style={styles.badge}/>
        </View>


        <View style={styles.labels}>
          <Text style={[styles.text, {fontSize: 16, fontFamily: theme.fonts.Poppins_500Medium}]}>{user.email}</Text>
          <Text style={[styles.text, {fontSize: 10, fontFamily: theme.fonts.Poppins_400Regular}]}>{user.userType}</Text>
        </View>

        <Ionicons 
          name={"chevron-down"}
          size={20} 
          color={theme.base.base_2}
          style={styles.arrowIcon}
        /> 
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    marginRight: 16,
    alignItems: "center",
    columnGap: 25
  },
  infos: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10
  },
  text: {
    color: theme.text.text_2
  },
  labels: {

  },
  avatar: {
    width: 50, 
    height: 50, 
    backgroundColor: "red",
    borderRadius: 100
  },
  badge: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: theme.base.base_2,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderWidth: 3,
    borderColor: theme.base.base_8
  },
  badgeNotify: {
    width: 10,
    height: 10,
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
})