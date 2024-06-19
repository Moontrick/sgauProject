import React, { useEffect } from 'react';
import {useStyles} from './style';
import { useAppDispatch } from '../../../../app/store';
import { InfoModal } from './components';
import { ErrorModalType } from '../../../../app/reducer/SettingStore/state';
import { showErrorModal } from '../../../../app/reducer/SettingStore';

interface ErrorInfoInterface {
    errInfo: ErrorModalType
    }
    
export const ErrorModal = ({errInfo} : ErrorInfoInterface) => {
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
    <>
      <div className={classes.root} onClick={onClose}/>
      <InfoModal errorMessage={errInfo.errorMessage} code={errInfo.code}/>
    </>
  );
}

