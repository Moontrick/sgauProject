import React from 'react';
import { TestWrapper, useStyles } from './styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { columns } from './colums';

export type Test = {
  id: number;
  a: string;
  b: string;
}


export const TestPage = () => {
    const classes = useStyles()
    const rows: Test[] = [{
      id: 1,
      a: '123',
      b: '1323'
    }]

  return (
    <div className={classes.block}>
    <DataGrid
      rows={rows}
      columns={columns}
      disableColumnFilter={true}
      disableColumnMenu={true}
      disableEval={true}
      disableColumnSorting={true}
      disableDensitySelector={true}
      disableVirtualization={true}
      style={{width: '300px', height: '500px'}}
      checkboxSelection
      disableRowSelectionOnClick
      hideFooter={true}
    />
    </div>
  );
}

