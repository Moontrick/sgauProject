import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../app/store';
import LogoIcon from '../../../../assets/icons/newLogo.svg'
import { AuthWrapperStyle, useStyles, MyButton } from './styles';
import { TextField } from '@mui/material';
import { Button, Typography } from '@material-ui/core';
import { setValueToStorage } from '../../../utils';
import { setAuthUser } from '../../../../app/reducer/User';
import { getAuth } from '../../../../app/reducer/User/thunk';

type AuthData = {
    name: string;
    password: string;
}
export const AuthWrapper = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    
    const [errorOfAuth, setErrorOfAuth] = useState<boolean>(false);
    const [authData, setAuthData] = useState<AuthData>({
        name: '',
        password: '',
    })
    const {name, password} = authData;
    
    const onChange = (e:  ChangeEvent<HTMLInputElement>) =>{ 
        setErrorOfAuth(false);
        setAuthData({...authData, [e.target.name]: e.target.value})
      }
    const onClick = () =>{
        if(name === 'admin' && password === '123456'){
        dispatch(getAuth())
        }else{
            setAuthData({name: '', password: ''})
            setErrorOfAuth(true)
        }
    }
  return (
    <>
      <AuthWrapperStyle >
            <div className={classes.root}>
                <div className={classes.blockIcon}>
                 <img src={LogoIcon} alt="logo" />
                </div>
                <div className={classes.inputBlock}>
                <Typography variant='h5'>Авторизация в системе</Typography>
                <div>
                <TextField
                    size='small' 
                    className={classes.input} 
                    variant="outlined" 
                    value={name} 
                    name='name' 
                    onChange={onChange} 
                    label='Логин' />
                    {errorOfAuth && (
                        <div>
                            <p style={{color: 'red'}}>Ошибка входа!!</p>
                        </div>
                    )}
                </div>
                <TextField
                    size='small' 
                    className={classes.input} 
                    type='password'
                    variant="outlined" 
                    value={password} 
                    name='password' 
                    onChange={onChange} 
                    label='Пароль' />
                <MyButton variant="contained" className={classes.btn} onClick={onClick}>
                    Войти
                </MyButton>
                </div>
            </div>
        </AuthWrapperStyle>
    </>
  );
}

