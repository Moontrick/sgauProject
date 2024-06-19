import React, { useEffect } from 'react';
import {useStyles} from './styles';
import { useAppDispatch } from '../../../../app/store';
import { CircularProgress } from '@mui/material';

export const ShowLoading = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    
  return (
    <>
      <div className={classes.root}/>
      <CircularProgress  className={classes.icon}/>
    </>
  );
}

