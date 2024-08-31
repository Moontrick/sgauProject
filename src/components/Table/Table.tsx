import React, {SetStateAction, ReactNode, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableColumn, TableSelection } from './types';
import { Checkbox } from '@material-ui/core';
type T = any;

interface TableInterface {
    columns: TableColumn<T>[],
    rows: T,
    children?: ReactNode;
    style?: React.CSSProperties | undefined;
    isTableSelections?: boolean;
    checkElem?: TableSelection;
    setCheckElem?: (value: SetStateAction<TableSelection>) => void;
  }


export const TableComponents: React.FC<TableInterface> = ({columns, rows, children, style, isTableSelections = false, checkElem={}, setCheckElem}) => {
  const dispatch = useDispatch();
  const tableSelection = {
      name: 'selectOptions',
      title: 'Действия',
      width: '100',
  }
  const OnChangeSelection = (indexRow: number) =>{
   if(setCheckElem)
    setCheckElem({...checkElem, [indexRow]: !checkElem[indexRow]})
  }
  return (
    <TableContainer component={Paper} style={style}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
            {isTableSelections && (
               <TableCell style={{minWidth: `${tableSelection.width}px`, textAlign: 'center', borderRight: '1px solid #ccc'}} >{tableSelection.title}</TableCell>
            )}
            {columns.map((item, index) =>{
                return(
                    <TableCell style={{minWidth: `${item.width}px`, textAlign: 'center', borderRight: '1px solid #ccc'}} key={index}>{item.title}</TableCell>
                )
            })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((_e: any, indexRows: any) =>{
            return(
            <TableRow key={indexRows}>
                {isTableSelections && (
                  <TableRow >
                        <TableCell style={{borderRight: '1px solid #ccc', width:'100px'}} >
                              <Checkbox onChange={(e) => OnChangeSelection(indexRows)} color="primary"/>
                        </TableCell>
                  </TableRow>
                )}
                {columns.map((i:TableColumn<T>, indexColumn) =>
                {
                  let customStyle:React.CSSProperties = {
                    
                    textAlign: 'center', 
                    borderRight: '1px solid #ccc',
                  }
                  if (i.style?.cell?.style) {
                    customStyle = {...customStyle, ...i.style.cell.style(rows[indexRows][i.name])}
                  }
                  if(rows[indexRows][i.name]){
                    return(
                        <TableCell style={customStyle}>
                            {rows[indexRows][i.name].toString()}
                        </TableCell>
                    )
                  }else{
                    return(
                      <TableCell style={customStyle}>
                          {
                      ''}
                      </TableCell>
                  )           
                  }
                })}
            
            </TableRow>
            )
        })}
      </TableBody>
    </Table>
  </TableContainer>
  );
};
