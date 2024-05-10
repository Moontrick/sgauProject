import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Table, TableHead, TableBody, makeStyles } from "@material-ui/core";
import React from "react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


export function createData(
    number: string,
    calories: number,
  ) {
    return {
      number,
      calories,
      history: [
        { date: '2020-01-05', customerId: '11091700'},
        { date: '2020-01-02', customerId: 'Anonymous'},
      ],
    };
  }
  const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
export function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.number}
          </TableCell>
          <TableCell>{row.calories}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Подробная информация
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Свойство</TableCell>
                      <TableCell>Значение</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell>
                          {historyRow.date}
                        </TableCell>
                        <TableCell>
                        {historyRow.customerId}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }