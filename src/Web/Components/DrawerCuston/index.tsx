// CustomDrawerContent.js
import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../../../Global/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../Hooks';
import { Ionicons } from '@expo/vector-icons';

function DrawerCuston(props: DrawerContentComponentProps) {
  const {logoff} = useAuth()
  
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <Text style={styles.clinicName}>My Clinic</Text>

        {
          props.state.routes.map((item, index) => {
            const focused = props.state.index === index;
            var nameIcon: any = "grid-outline"

            if(item.name === "Agenda"){
              nameIcon = "calendar-outline"
            }else if(item.name === "Colaboradores"){
              nameIcon = "people-outline"
            }else if(item.name === "Financeiro"){
              nameIcon = "receipt-outline"
            }else if(item.name === "Pacientes"){
              nameIcon = "person-add-outline"
            }else{
              nameIcon = "grid-outline"
            }

            return(
              <LinearGradient 
                colors={focused ? ['#BBF7D0', '#14B8A6'] : [theme.base.base_8, theme.base.base_8]}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }}
                style={styles.drawerItem}
              >
                <DrawerItem
                  label={() => (
                    <View style={styles.itemContainer}>
                      <Ionicons 
                        name={nameIcon}
                        size={25} 
                        color={theme.text.text_4}
                      /> 
                      <Text
                        style={[
                          styles.drawerLabel,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </View>
                  )}
                  onPress={() => props.navigation.navigate(item.name)}
                  labelStyle={[
                    styles.drawerLabel,
                  ]}
                />
              </LinearGradient>

            )
          })
        }

      </DrawerContentScrollView>

      <View style={styles.footer}>
        <DrawerItem
          label={() => (
            <View style={styles.itemContainer}>
              <Ionicons 
                name={"settings-outline"}
                size={25} 
                color={theme.text.text_4}
              /> 
              <Text
                style={[
                  styles.drawerLabelFooter,
                ]}
              >
                Configuraçoes
              </Text>
            </View>
          )}
          onPress={() => alert('Link para Configurações')}
        />
        <DrawerItem
          label={() => (
            <View style={styles.itemContainer}>
              <Ionicons 
                name={"help-circle-outline"}
                size={25} 
                color={theme.text.text_4}
              /> 
              <Text
                style={[
                  styles.drawerLabelFooter,
                ]}
              >
                Ajuda
              </Text>
            </View>
          )}
          onPress={() => alert('Link para Ajuda')}
        />
        <DrawerItem
          label={() => (
            <View style={styles.itemContainer}>
              <Ionicons 
                name={"power-outline"}
                size={25} 
                color={theme.text.text_4}
              /> 
              <Text
                style={[
                  styles.drawerLabelFooter,
                ]}
              >
                Sair
              </Text>
            </View>
          )}
          onPress={() => logoff()} // Assumindo que `logoff` é uma função para sair
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    borderRadius: 20, 
    backgroundColor: theme.base.base_8
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  clinicName: {
    fontSize: 40,
    fontFamily: theme.fonts.Poppins_800ExtraBold,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 40,
    color: theme.base.base_2
  },
  drawerItem: {
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    marginVertical: 4
  },
  drawerItemActive: {
    backgroundColor: theme.base.base_2, // Cor de fundo para item ativo
    borderRadius: 20
  },
  drawerItemInactive: {
    backgroundColor: '#fff', // Cor de fundo para item inativo
  },
  drawerLabel: {
    fontSize: 20,
    color: theme.text.text_4, // Cor do texto padrão
    fontFamily: theme.fonts.Poppins_500Medium,
  },
  footer: {
    borderTopWidth: 1,
    marginHorizontal: 20,
    borderTopColor: theme.base.base_7
  },
  drawerLabelFooter: {
    fontSize: 16,
    color: theme.text.text_4, // Cor do texto padrão
    fontFamily: theme.fonts.Poppins_500Medium,
  },
});

export default DrawerCuston;
