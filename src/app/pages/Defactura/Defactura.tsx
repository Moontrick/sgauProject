import React, { useEffect } from 'react';
import { DefacturaPageWrapper } from './styles';
import { useAppDispatch } from '../../store';
import { defacturaListTableManager } from '../../store/tabelsStore/Defactura';
import { TableToolBar, DefecturaTable } from './components';


export const DefacturaPage = ()  => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(defacturaListTableManager.update())
  },[])
  return (
    <DefacturaPageWrapper >
      <TableToolBar />
      <DefecturaTable />
    </DefacturaPageWrapper>
  );
}

