import React, { useState,ChangeEvent } from 'react';
import { TableToolBarWrapper, useStyles ,SearchBox} from './styles';
import { Input, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import SearchTable from '../../../../../components/SearchTable/SearchTable';
import { invoceListTableManager, setSearchType } from '../../../../store/tabelsStore/invoceList';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../../store';
import { showLoading,showErrorModal } from '../../../../reducer/SettingStore';
import { ErrorModalType } from '../../../../reducer/SettingStore/state';
import { getZapr } from '../../../../reducer/InvoceList/thunk';
import { setOpenModal } from '../../../../reducer/InvoceList';
import { useSelector } from 'react-redux';
import { invoceListTableParamsSearchTypeSelector } from '../../../../store/tabelsStore/invoceList/selector';
import { TableState } from '../../../../../components/Table/typings';
import SearchSelet from '../../../../../components/SearchSelet/SearchSelet';


const INVOCE_LIST_TITLE = 'Список накладных'
type InputeInvoce= {
  input1: string
}

const options = [
  {value: 'nameOfItem.contains', label: 'Наименование'},
  {value: 'numberOfParty.contains', label: '№ п/п'},
  {value: 'arivalName.contains', label: 'Производитель'}
]
export const TableToolBar = ()  => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
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
  const onChangeSearchType = (e: any) =>{
    dispatch(setSearchType(e.target.value as string))
  }
  
  return (
    <TableToolBarWrapper >
      <Typography variant='h3'>{INVOCE_LIST_TITLE}</Typography>
      <SearchBox>
        {/* <TextField
        size='small' className={classes.input} variant="outlined" value={input1} name='input1' onChange={onChange} label='Наименование' /> */}
      <SearchSelet manager={invoceListTableManager} label='Фильтр поиска' options={options} onChangeType={onChangeSearchType}/>
      <SearchTable manager={invoceListTableManager} label="Поиск"/>
      <Button onClick={ () => setError()} variant="contained">Сформировать заказ</Button>
      {/* <Button onClick={ () => setShowLoading()}>Лоадинг</Button>
      <Button onClick={ () => setError()}>Ошибка</Button>
      <Button onClick={ () => postZaprs()}>Запрос на сервер</Button>
      <Button onClick={ () => openModal()}>Открыть модалку</Button> */}
      </SearchBox>
    </TableToolBarWrapper>
  );
}

