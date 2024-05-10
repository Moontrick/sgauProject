import React from 'react';
import { TableToolBarWrapper } from './styles';
import { Typography } from '@material-ui/core';

const ORDER_LIST_TITLE = 'Список заказов'

export const TableToolBar = ()  => {
  return (
    <TableToolBarWrapper >
      <Typography variant='h3'>{ORDER_LIST_TITLE}</Typography>
    </TableToolBarWrapper>
  );
}

