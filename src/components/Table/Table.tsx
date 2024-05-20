import React, {useEffect, ReactNode} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableColumn } from './types';
type T = any;

interface TableInterface {
    columns: TableColumn<T>[],
    rows: T,
    children?: ReactNode;
  }


export const TableComponents: React.FC<TableInterface> = ({columns, rows, children}) => {
  const dispatch = useDispatch();
    console.log(rows)
    console.log(columns)
  return (
    <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
            {columns.map((item, index) =>{
                return(
                    <TableCell style={{width:`${item.width}`}} key={index}>{item.title}</TableCell>
                )
            })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((_e: any, indexRows: React.Key | null | undefined) =>{
            return(
            <TableRow key={indexRows}>
                {columns.map((i:TableColumn<T>, indexColumn) =>
                {
                    return(
                        <TableCell>
                            {rows[indexColumn][i.name]}
                        </TableCell>
                    )
                })}
            
            </TableRow>
            )
        })}
      </TableBody>
    </Table>
  </TableContainer>
  );
};
