import React, { useEffect } from 'react';
import {ModalInfoWrapper, ModalWrapper, useStyles} from './styles';
import { Alert, Button, CircularProgress } from '@mui/material';
import { useAppDispatch } from '../../../../../../app/store';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { ErrorModalType } from '../../../../../../app/reducer/SettingStore/state';
import { showErrorModal } from '../../../../../../app/reducer/SettingStore';

interface InfoModalInterface {
errorMessage: string;
code: number;
}

export const InfoModal = ({errorMessage, code} : InfoModalInterface) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const onClose = () =>{
        const erMessage: ErrorModalType = {
            errorMessage: '',
            code: 0,
        }
        dispatch(showErrorModal({
            isOpen: false,
            errorMessage: erMessage
        }))
    }
  return (
    <ModalInfoWrapper >
        <div style={{display: 'flex'}}>
        <ModalWrapper>
            <div className={classes.modal}>
                <Typography variant='h5'>Что-то пошло не так...</Typography>
                <Alert variant="outlined" severity="error" >
                    <div style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
                        {errorMessage && errorMessage}
                        <span>Код ошибки: {code && code}</span>
                    </div>
                </Alert>    
            </div>
        </ModalWrapper>
        <Button onClick={() => onClose()} style={{marginTop: '-20px', width: '0px', height: '20px'}} >
            <CloseIcon />
        </Button>
        </div>
    </ModalInfoWrapper>
  );
}

