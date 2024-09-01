import React, { useEffect } from 'react';
import { PriceListWrapper } from './styles';
import {PriceTable} from './components/Table';
import { useAppDispatch } from '../../store';
import { priceListTableManager } from '../../store/tabelsStore/priceList';
import { TableToolBar } from './components/TableToolBar';


export const PriceListPage = ()  => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(priceListTableManager.update())
  },[])
  return (
    <PriceListWrapper >
      <TableToolBar />
      <PriceTable />
    </PriceListWrapper>
  );
}

