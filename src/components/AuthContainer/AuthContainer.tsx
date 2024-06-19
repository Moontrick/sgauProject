import {AuthContainerWrapper} from './styles';
import React, {useEffect, ReactNode} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AuthWrapper } from './components';
import { userAuthSelector } from '../../app/reducer/User';

interface AuthContainerProps {
    children: React.ReactNode;
  }


export const AuthContainer: React.FC<AuthContainerProps> = ({children}) => {
  const dispatch = useDispatch();
  const userData = useSelector(userAuthSelector)
  
  return (
        <AuthContainerWrapper >
            {userData ? children :
             (<AuthWrapper />)}
           
        </AuthContainerWrapper>
  );
};