import React, { useState,ChangeEvent } from 'react';
import { TableToolBarWrapper, useStyles ,SearchBox} from './styles';
import { Input, TextField, Typography } from '@material-ui/core';
import SearchTable from '../../../../../components/SearchTable/SearchTable';
import { invoceListTableManager } from '../../../../store/tabelsStore/invoceList';

const INVOCE_LIST_TITLE = 'Список накладных'
type InputeInvoce= {
  input1: string
}
export const TableToolBar = ()  => {
  const classes = useStyles()
  const [formData , setDormData] = useState<InputeInvoce>({
    input1: ''
  })
  const {input1} = formData
  const onChange = (e:  ChangeEvent<HTMLInputElement>) =>{
    setDormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <TableToolBarWrapper >
      <Typography variant='h3'>{INVOCE_LIST_TITLE}</Typography>
      <SearchBox>
        <TextField
        size='small' className={classes.input} variant="outlined" value={input1} name='input1' onChange={onChange} label='Наименование' />
      <SearchTable manager={invoceListTableManager} label="№ вагона"/>
      </SearchBox>
    </TableToolBarWrapper>
  );
}

