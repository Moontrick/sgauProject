import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TableComponents } from '../../../../../components';
import { TableColumn } from '../../../../../components/Table/types';
import { colums } from './columns';
import { InvoceTableType } from '../../../../types/InvoceList/invoceListTypes';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { tableDataSelector } from '../../../../reducer/InvoceList';


export const InvoceTable = () => {
  const row = useSelector(tableDataSelector)
  const classes = useStyles()
  const styles:React.CSSProperties = {
    height: '700px'
  }
  return (
    <div className={classes.table}>
    <TableComponents rows={row} columns={colums} style={styles}/>
    </div>
  );
}

