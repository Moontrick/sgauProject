import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Row, createData } from './components';


const rows = [
  createData('123', 159),
  createData('345', 542),
  createData('654654', 234),
  createData('654654', 345),
  createData('65464', 6543),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Номер</TableCell>
            <TableCell >Дата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.number} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
