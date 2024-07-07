import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Pages/Login';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{animation: "slide_from_right", headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default AuthRoutes;