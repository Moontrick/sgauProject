import React, { useEffect } from 'react';
import { PriceListWrapper, useStyles } from './styles';
import { ToolBar } from './components';
import { useAppDispatch } from '../../store';
export const PriceList = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
  return (
    <PriceListWrapper>
        <ToolBar />
    </PriceListWrapper>
  );
}

