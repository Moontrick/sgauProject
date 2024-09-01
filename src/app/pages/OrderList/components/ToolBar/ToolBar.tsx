import React, { useState,ChangeEvent } from 'react';
import { TableToolBarWrapper, useStyles ,SearchBox} from './styles';
import { Button, Typography } from '@material-ui/core';
import { useAppDispatch } from '../../../../store';
import { orderListTableManager, setSearchType } from '../../../../store/tabelsStore/orderList';
import SearchSelet from '../../../../../components/SearchSelet/SearchSelet';
import SearchTable from '../../../../../components/SearchTable/SearchTable';
import { Options } from '../../../../types/shared/shared';

const ORDER_LIST_TITLE = 'Список заказов'

const options: Options[] = [
  {value: 'numz.contains', label: '№ заказа'},
  {value: 'codepst.contains', label: 'Код товара'},
  {value: 'tovname.contains', label: 'Наименование товара'},
  {value: 'fabrname.contains', label: 'Производитель'}
]
export const ToolBar = ()  => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const onChangeSearchType = (e: any) =>{
    dispatch(setSearchType(e.target.value as string))
  }
  return (
    <TableToolBarWrapper >
      <Typography variant='h3'>{ORDER_LIST_TITLE}</Typography>
      <SearchBox>
      <SearchSelet manager={orderListTableManager} label='Фильтр поиска' options={options} onChangeType={onChangeSearchType}/>
      <SearchTable manager={orderListTableManager} label="Поиск"/>
      <Button  style={{height: '45px'}} variant="contained">Отменить заказ</Button>
      </SearchBox>
    </TableToolBarWrapper>
  );
}

