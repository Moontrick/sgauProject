import React, { useEffect } from 'react';
import { InvoceWrapper, useStyles } from './styles';
import { TableToolBar,InvoceTable, CreateModal } from './components';

import { getInvoceData, getTableData, getTestUrl } from '../../reducer/InvoceList/thunk';
import { useAppDispatch } from '../../store';
import { invoceListTableManager } from '../../store/tabelsStore/invoceList';


export const InvoceList = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(invoceListTableManager.update())
      dispatch(getTestUrl())
    },[])
    
  return (
    <InvoceWrapper>
        <TableToolBar />
        <InvoceTable />
        <CreateModal />
    </InvoceWrapper>
  );
}

