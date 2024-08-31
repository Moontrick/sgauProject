import React, { useState,ChangeEvent } from 'react';
import { TableToolBarWrapper, useStyles ,SearchBox} from './styles';
import { Typography } from '@material-ui/core';
import { useAppDispatch } from '../../../../store';

const PRICE_LIST_TITLE = 'Прайст-лист поставщика'


export const ToolBar = ()  => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  
  return (
    <TableToolBarWrapper >
      <Typography variant='h3'>{PRICE_LIST_TITLE}</Typography>
      <SearchBox>
      </SearchBox>
    </TableToolBarWrapper>
  );
}

