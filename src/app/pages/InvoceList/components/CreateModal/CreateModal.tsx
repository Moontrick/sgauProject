import React, { useState,ChangeEvent } from 'react';
import { useStyles} from './styles';
import { Modal, TextField } from '@material-ui/core';
import { CustomModal } from '../../../../../components';
import { useSelector } from 'react-redux';
import { openModalSelector, setOpenModal } from '../../../../reducer/InvoceList';
import { useAppDispatch } from '../../../../store';
import { InitStateTestType, TestType } from '../../../../types/InvoceList/invoceListTypes';

export const CreateModal = ()  => {
  const classes = useStyles()
  const openModal = useSelector(openModalSelector)
  const [formData, setFormData] = useState<TestType>(InitStateTestType)
    const {pole1, pole2, pole3, pole4, pole5} = formData;
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
  const dispatch = useAppDispatch()
    const onClose = () =>{
        dispatch(setOpenModal(false))
    }
  return (
    <>
    <CustomModal open={openModal} onClose={onClose}>
        <div className={classes.block}>
        <TextField
        size='small' 
        className={classes.input} 
        variant="outlined" 
        value={pole1} 
        name='pole1' 
        onChange={onChange} 
        label='pole1' />

        
        </div>
    </CustomModal>
    </>
  );
}

