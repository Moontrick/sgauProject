import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TableComponents } from '../../../../../components';
import { TableColumn, TableSelection } from '../../../../../components/Table/types';
import { colums } from './columns';
import { InvoceTableType } from '../../../../types/InvoceList/invoceListTypes';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { tableDataSelector } from '../../../../reducer/InvoceList';


export const InvoceTable = () => {
  const row = useSelector(tableDataSelector)
  const classes = useStyles()
  const styles:React.CSSProperties = {
    // height: '700px'
  }
  const [selectedRows, setSelectedRow] = useState<TableSelection>({})

  useEffect(() =>{
    let newCheckRows: InvoceTableType[] = [];
    for (const key in selectedRows) {
      if (selectedRows[key]) {
        const rowInRows = row[Number(key)];
        if (rowInRows) {
          newCheckRows = [...newCheckRows, rowInRows];
        }
      }
    }
    console.log(newCheckRows)
  },[selectedRows])
  return (
    <div className={classes.table}>
    <TableComponents rows={row} columns={colums} style={styles} isTableSelections={true} checkElem={selectedRows} setCheckElem={setSelectedRow}/>
    </div>
  );
}

