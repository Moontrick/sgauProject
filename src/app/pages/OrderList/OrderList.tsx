import React from 'react';
import { OrderListWrapper } from './styles';
import {TableToolBar} from './components';
import Table from './components/Table/Table';

export const OrderListPage = ()  => {
  return (
    <OrderListWrapper >
      <TableToolBar />
      <Table />
    </OrderListWrapper>
  );
}

