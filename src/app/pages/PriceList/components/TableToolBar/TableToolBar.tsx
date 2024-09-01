import React from 'react';
import { SearchBox, TableToolBarWrapper } from './styles';
import { Button, Typography } from '@material-ui/core';
import { priceListTableManager, setSearchType } from '../../../../store/tabelsStore/priceList';
import SearchSelet from '../../../../../components/SearchSelet/SearchSelet';
import SearchTable from '../../../../../components/SearchTable/SearchTable';
import { useAppDispatch } from '../../../../store';
import { Options } from '../../../../types/shared/shared';


const ORDER_LIST_TITLE = 'Прайс-лист от поставщика'
const options: Options[] = [
  {value: 'tovcod.contains', label: 'Код товара'},
  {value: 'tovname.contains', label: 'Наименование'},
  {value: 'fabrname.contains', label: 'Производитель'}
]
export const TableToolBar = ()  => {
  const dispatch = useAppDispatch()

  const onChangeSearchType = (e: any) =>{
    dispatch(setSearchType(e.target.value as string))
  }
  return (
    <TableToolBarWrapper >
      <Typography variant='h3'>{ORDER_LIST_TITLE}</Typography>
      <SearchBox>
        <SearchSelet manager={priceListTableManager} label='Фильтр поиска' options={options} onChangeType={onChangeSearchType}/>
        <SearchTable manager={priceListTableManager} label="Поиск"/>
      </SearchBox>
    </TableToolBarWrapper>
  );
}

