import * as React from 'react';
import {Text} from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import Dashboard from '../Pages/Dashboard';
import DrawerCuston from '../Components/DrawerCuston';
import Schedule from '../Pages/Schedule';
import Collaborators from '../Pages/Collaborators';
import Financial from '../Pages/Financial';
import Patients from '../Pages/Patients';
import theme from '../../Global/theme';
import HeaderRight from '../Components/HeaderApp/HeaderRight';
import HeaderTitle from '../Components/HeaderApp/HeaderTitle';
import Help from '../Pages/Help';

const Drawer = createDrawerNavigator();

function AdminRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <DrawerCuston {...props} />}

      screenOptions={{
        drawerStyle: {
          backgroundColor: "transparent",
          padding: 20,
          width: 380
        },
        headerStyle:{
          backgroundColor: theme.base.base_8
        },
        headerShadowVisible: false,
        headerTintColor: theme.text.text_4,
        headerRight: () => <HeaderRight/>
      }}
    >
      <Drawer.Screen
        name="Dashboard" 
        component={Dashboard}
        options={{
          headerTitle: () => <HeaderTitle title={"Dashboard"}/>,
        }}
      />
      <Drawer.Screen 
        name="Agenda" 
        component={Schedule}
        options={{
          headerTitle: () => <HeaderTitle title={"Agenda"}/>,
        }} 
      />
      <Drawer.Screen 
        name="Colaboradores" 
        component={Collaborators}
        options={{
          headerTitle: () => <HeaderTitle title={"Colaboradores"}/>,
        }} 
      />
      <Drawer.Screen 
        name="Pacientes" 
        component={Patients}
        options={{
          headerTitle: () => <HeaderTitle title={"Pacientes"}/>,
        }}  
      />
      <Drawer.Screen 
        name="Financeiro" 
        component={Financial} 
        options={{
          headerTitle: () => <HeaderTitle title={"Financeiro"}/>,
        }} 
      />
      <Drawer.Screen 
        name="Help" 
        component={Help} 
        options={{
          headerStyle:{
            backgroundColor: theme.help.help_1
          },
          headerTintColor: theme.text.text_1,
          headerRight: () => <HeaderRight color={theme.text.text_1}/>,
          headerTitle: () => <HeaderTitle title={"Ajuda"} color={theme.text.text_1}/>,
        }} 
      />
    </Drawer.Navigator>
  );
}

export default AdminRoutes;