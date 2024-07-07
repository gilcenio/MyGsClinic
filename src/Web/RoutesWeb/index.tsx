import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import { useAuth } from '../Hooks';
import { getPlansObservers } from '../Services/observers/plansObservers';
import { ActivityIndicator, View } from 'react-native';
import theme from '../../Global/theme';
import AdminRoutes from './admin.routes';
import ManagerRoutes from './manager.routes';
import TeamLeadRoutes from './teamlead.routes';
import ContributorRoutes from './contributor.routes';
import FinancialRoutes from './financial.routes';
import FrontDeskRoutes from './frontdesk.routes';
import ToastApp from '../Components/ToastApp';
import AlertApp from '../Components/AlertApp';

interface IInfoCompany{
  isOpen: boolean, 
  isInDay: boolean
}

export default function index() {
  const {user, loading, toastConfig, hideToast, alertConfig} = useAuth()
  const [infoCompany, setInfoCompany] = React.useState<IInfoCompany>({isInDay: true, isOpen: true});

  React.useEffect(() => {
    if(user.idCompany){
      getPlansObservers(user.idCompany, setInfoCompany)
    }
  }, [user.idCompany])

  console.log(user.uid)

  if(!infoCompany?.isInDay){
    return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator size="large" color={theme.base.base_1} />
    </View>
    )
  }

  if(loading){
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" color={theme.base.base_1} />
      </View>
    )
  }

  const DATA = {
    'ADMINISTRADOR': <AdminRoutes/>,
    'GERENTE': <ManagerRoutes/>,
    'LIDERDEEQUIPE': <TeamLeadRoutes/>,
    'COLABORADOR': <ContributorRoutes/>,
    'FINANCEIRO': <FinancialRoutes/>,
    'RECEPCAO': <FrontDeskRoutes/>
  }

  return (
    <NavigationContainer>
      <AlertApp visible={alertConfig.visible}/>
      <ToastApp
        type={toastConfig.type}
        label={toastConfig.label}
        visible={toastConfig.visible}
        onHide={hideToast}
      />
      {user.uid ? DATA[user.userType] : <AuthRoutes/>}
    </NavigationContainer>
  )
}