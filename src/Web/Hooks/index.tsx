import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { auth } from '../Firebase';
import { getPlanAction } from '../Services/actions/plansAction';
import {Alert, Animated, ToastAndroid} from 'react-native'

interface AuthProviderProps {
  children: ReactNode
}

interface User{
  name: string | null
  email: string | null
  uid: string | null
  idCompany: string | undefined
  userType: string
  photo?: string | null
}

interface AuthContextData { 
  loading: boolean
  user: User
  signOutEmail(email: string, password: string): void
  logoff(): Promise<void>
  toastConfig: {
    visible: boolean;
    type: string;
    label: string;
  }
  hideToast: () => void
  showToast: (type: any, label: any) => void
  alertConfig: {
    visible: boolean;
  }
  showAlert: () => void
  hideAlert: () => void
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps){
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User>({} as User);
  const userStorageKey = '@myproject:user'
  const [toastConfig, setToastConfig] = useState({
    visible: false,
    type: '',
    label: '',
  });
  const [alertConfig, setAlertConfig] = useState({
    visible: false,
  });

  const showToast = (type, label) => {
    setToastConfig({ visible: true, type, label });
  };

  const hideToast = () => {
    setToastConfig({ ...toastConfig, visible: false });
  };

  const showAlert = () => {
    setAlertConfig({ visible: true});
  };

  const hideAlert = () => {
    setAlertConfig({visible: false });
  };

  useEffect(() => {
    async function loadUserStorageDate(){
      const userStoraged = await localStorage.getItem(userStorageKey)

      if(userStoraged){
        const userLogged = JSON.parse(userStoraged) as User
        setUser(userLogged)
      }
      setLoading(false)
    }
    loadUserStorageDate()
  }, [])


  function signOutEmail(email: string, password: string){
    const getIdCompany = email.replace(/.*(?=@)/, '')
    

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const collaborators = `companies/${getIdCompany}/collaborator/${user.uid}`

      getPlanAction(collaborators).then((ress) => {
        setUser({email: user.email, name: user.displayName, uid: user.uid, idCompany: ress.idCompany, userType: ress.userType})
        localStorage.setItem(userStorageKey, JSON.stringify({email: user.email, name: user.displayName, uid: user.uid, idCompany: ress.idCompany, userType: ress.userType}))
      })
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        showToast('error', 'Opps! Endereço de e-mail ou senha inválido!')
      }
      if (error.code === 'auth/user-disabled') {
        showToast('error', 'Opps! E-mail fornecido foi desativado!')
      }
      if (error.code === 'auth/user-not-found') {
        showToast('error', 'Opps! E-mail não cadastrado!')
      }
      if (error.code === 'auth/invalid-credential') {
        showToast('error', 'Opps! E-mail não cadastrado!')
      }
      if (error.code === 'auth/missing-password') {
        showToast('error', 'Opps! E-mail ou senha incorretos!')
      }
      if (error.code === 'auth/too-many-requests') {
        showToast('error', 'Opps! O número de solicitações excede o máximo permitido! aguarde 2 minutos')
      }
      
    });
  }

  async function logoff() {
    signOut(auth).then(() => {
      setUser({} as User)
      localStorage.removeItem(userStorageKey)
      console.log('Deslogado')
    }).catch((error) => {
      console.log(error)
    });
  }

  return(
    <AuthContext.Provider value={{
      user,
      loading,
      signOutEmail,
      logoff,
      toastConfig,
      hideToast,
      showToast,
      alertConfig,
      hideAlert,
      showAlert
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export {AuthProvider, useAuth}