import React from 'react';
import { TestWrapper, useStyles } from './styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { columns } from './colums';
import {  TableComponents } from '../../../components/Table';
import { TableColumn } from '../../../components/Table/types';

export type Test = {
  id: number;
  a: string;
  b: string;
}
type testType = {
  name: string;
  value: string;
  pole1: string;
  pole2: string;
  pole3: string;
  pole4: string;
}

export const TestPage = () => {
    const classes = useStyles()
  //   const row: testType[] = [{
  //     name:'123',
  //     value: '321',
  //   },
  // {
  //   name:'123',
  //   value: '654',
  // }]
  const n = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  const row: testType[] = n.map(() => {
    const newVal: testType = {
      name: (Math.floor(Math.random() * 100)).toString(),
      value: (Math.floor(Math.random() * 100)).toString(),
      pole1: (Math.floor(Math.random() * 100)).toString(),
      pole2: (Math.floor(Math.random() * 100)).toString(),
      pole3: (Math.floor(Math.random() * 100)).toString(),
      pole4: (Math.floor(Math.random() * 100)).toString(),
    }
    return newVal;
  })
  const colums: TableColumn<testType>[]=[{
    name: 'name',
    title: 'Имя',
    width: '20'
  },
  {
    name: 'value',
    title: 'Значение',
    width: '100'
  },
  {
    name: 'pole1',
    title: 'Поле1',
    width: '100'
  },
  {
    name: 'pole2',
    title: 'Поле2',
    width: '100'
  },
  {
    name: 'pole3',
    title: 'Поле3',
    width: '100'
  },
  {
    name: 'pole4',
    title: 'Поле4',
    width: '100'
  },

]
  return (
    <div className={classes.block}>
    {/* <DataGrid
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
    /> */}
    <TableComponents rows={row} columns={colums}/>
    </div>
  );
}

