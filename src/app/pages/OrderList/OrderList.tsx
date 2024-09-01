import React, { useEffect } from 'react';
import { OrderListWrapper, useStyles } from './styles';
import { ToolBar } from './components';
import { useAppDispatch } from '../../store';
import { orderListTableManager } from '../../store/tabelsStore/orderList';
import { OrderTable } from './components/Table';
export const OrderList = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(orderListTableManager.update())
    },[])
  return (
    <OrderListWrapper>
        <ToolBar />
        <OrderTable />
    </OrderListWrapper>
  );
}

