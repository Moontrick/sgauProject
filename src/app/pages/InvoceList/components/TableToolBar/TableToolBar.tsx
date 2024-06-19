import React, { useState,ChangeEvent } from 'react';
import { TableToolBarWrapper, useStyles ,SearchBox} from './styles';
import { Input, TextField, Typography } from '@material-ui/core';
import SearchTable from '../../../../../components/SearchTable/SearchTable';
import { invoceListTableManager } from '../../../../store/tabelsStore/invoceList';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../../store';
import { showLoading,showErrorModal } from '../../../../reducer/SettingStore';
import { ErrorModalType } from '../../../../reducer/SettingStore/state';
import { getZapr } from '../../../../reducer/InvoceList/thunk';
import { setOpenModal } from '../../../../reducer/InvoceList';

const INVOCE_LIST_TITLE = 'Список накладных'
type InputeInvoce= {
  input1: string
}
export const TableToolBar = ()  => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [formData , setDormData] = useState<InputeInvoce>({
    input1: ''
  })
  const {input1} = formData
  const onChange = (e:  ChangeEvent<HTMLInputElement>) =>{
    setDormData({...formData, [e.target.name]: e.target.value})
  }
  const setShowLoading = () =>{
    dispatch(showLoading())
  }
  const postZaprs = () =>{
    dispatch(getZapr())
  }
  const openModal = () =>{
    dispatch(setOpenModal(true))
  }
  const setError = () =>{
    const erMessage: ErrorModalType = {
      errorMessage: '1234',
      code: 0,
  }
  dispatch(showErrorModal({
      isOpen: true,
      errorMessage: erMessage
  }))
  }
  return (
    <TableToolBarWrapper >
      <Typography variant='h3'>{INVOCE_LIST_TITLE}</Typography>
      <SearchBox>
        <TextField
        size='small' className={classes.input} variant="outlined" value={input1} name='input1' onChange={onChange} label='Наименование' />
      <SearchTable manager={invoceListTableManager} label="№ вагона"/>
      <Button onClick={ () => setShowLoading()}>Лоадинг</Button>
      <Button onClick={ () => setError()}>Ошибка</Button>
      <Button onClick={ () => postZaprs()}>Запрос на сервер</Button>
      <Button onClick={ () => openModal()}>Открыть модалку</Button>
      </SearchBox>
    </TableToolBarWrapper>
  );
}

