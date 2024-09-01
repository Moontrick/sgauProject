import React from 'react';
import { SearchBox, TableToolBarWrapper } from './styles';
import { Button, Typography } from '@material-ui/core';
import SearchSelet from '../../../../../components/SearchSelet/SearchSelet';
import SearchTable from '../../../../../components/SearchTable/SearchTable';
import { useAppDispatch } from '../../../../store';
import { Options } from '../../../../types/shared/shared';
import { defacturaListTableManager, setSearchType } from '../../../../store/tabelsStore/Defactura';


const DEFECTURA_LIST_TITLE = 'Дефектура от поставщика'
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
      <Typography variant='h3'>{DEFECTURA_LIST_TITLE}</Typography>
      <SearchBox>
        <SearchSelet manager={defacturaListTableManager} label='Фильтр поиска' options={options} onChangeType={onChangeSearchType}/>
        <SearchTable manager={defacturaListTableManager} label="Поиск"/>
      </SearchBox>
    </TableToolBarWrapper>
  );
}

