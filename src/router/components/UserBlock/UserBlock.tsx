import React from 'react';
import { UserWrapper, useStyles } from './styles';
import LogoIcon from '../../../assets/icons/newLogo.svg';
export const UserBlock = () => {
    const classes = useStyles()
  return (
    <UserWrapper>
      <img src={LogoIcon} alt="logo" className={classes.icon}/>
    </UserWrapper>
  );
}

