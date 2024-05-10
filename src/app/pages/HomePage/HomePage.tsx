import React from 'react';
import { HomeWrapper, useStyles } from './styles';
import LogoIcon from '../../../assets/icons/newLogo.svg'


export const HomePage = () => {
    const classes = useStyles()
  return (
    <HomeWrapper>
      <img src={LogoIcon} alt="logo" className={classes.icon}/>
    </HomeWrapper>
  );
}

