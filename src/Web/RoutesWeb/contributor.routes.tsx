import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import Dashboard from '../Pages/Dashboard';
import DrawerCuston from '../Components/DrawerCuston';
import Schedule from '../Pages/Schedule';
import theme from '../../Global/theme';
import HeaderTitle from '../Components/HeaderApp/HeaderTitle';
import HeaderRight from '../Components/HeaderApp/HeaderRight';

const Drawer = createDrawerNavigator();

function ContributorRoutes() {
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
    </Drawer.Navigator>
  );
}

export default ContributorRoutes;