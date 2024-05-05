import React from 'react';
import { UserWrapper, useStyles } from './styles';
import UserIcon from '../../../assets/icons/user.svg';
export const UserBlock = () => {
    const classes = useStyles()
  return (
    <UserWrapper>
      <img src={UserIcon} alt="logo" className={classes.icon}/>
    </UserWrapper>
  );
}

