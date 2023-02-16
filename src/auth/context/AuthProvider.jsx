import { useReducer } from 'react';
import {AuthProvider} from './AuthProvider';
import { authReducer } from './authReducer';

const initialState = {
  logged: false,
}
export const AuthProvider = ({children}) => {


  const [authState, dispatch] = useReducer(authReducer,  initialState);
  
  return (
    <AuthProvider.Provider value={{}}>
    
    {children}
    </AuthProvider.Provider>
  )
}
