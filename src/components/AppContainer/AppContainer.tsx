import {AppContainerWrapper} from './styles';
import React, {useEffect, ReactNode} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';

interface AppContainerProps {
    children: ReactNode;
  }


export const AppContainer: React.FC<AppContainerProps> = ({children}) => {
  const dispatch = useDispatch();

  return (
        <AppContainerWrapper id="root">
          {children}
        </AppContainerWrapper>
  );
};
