import React, { useEffect } from 'react';
import { InvoceWrapper, useStyles } from './styles';
import { TableToolBar,InvoceTable } from './components';

import { getTableData } from '../../reducer/InvoceList/thunk';
import { useAppDispatch } from '../../store';
import { invoceListTableManager } from '../../store/tabelsStore/invoceList';


export const InvoceList = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(invoceListTableManager.update())
    },[])
    
  return (
    <InvoceWrapper>
        <TableToolBar />
        <InvoceTable />
    </InvoceWrapper>
  );
}

