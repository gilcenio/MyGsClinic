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
        name="Financeiro" 
        component={Financial} 
        options={{
          headerTitle: () => <HeaderTitle title={"Financeiro"}/>,
        }} 
      />
      <Drawer.Screen 
        name="Pacientes" 
        component={Patients}
        options={{
          headerTitle: () => <HeaderTitle title={"Pacientes"}/>,
        }}  
      />
    </Drawer.Navigator>
  );
}

export default AdminRoutes;