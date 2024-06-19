
import React, {useLayoutEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { store } from './app/store';
import { RootProps } from './root.types';
import './index.css'
import App from './App';
import {Navigation} from './router/Navigation';
import { AppRouter } from './router/AppRouter';
import { AuthContainer, SettingContainer, AppContainer } from './components';


export const Root = (props: RootProps): JSX.Element => {
const {baseHref, route, applicationName} = props;
    
    useLayoutEffect(() => {
        sessionStorage.setItem('baseHref', baseHref || '');
    }, [applicationName]);

  return (
      <BrowserRouter basename={route || '/'}>
        <Provider store={store}>
          <SettingContainer>
            <AuthContainer>
              <AppContainer>
                  <Navigation />
                  <AppRouter />
                </AppContainer>
              </AuthContainer>
            </SettingContainer>
        </Provider>
      </BrowserRouter>
  );
};

export default Root;
