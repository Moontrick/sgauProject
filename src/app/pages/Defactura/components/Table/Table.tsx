import React, { useEffect, useState } from 'react';
import { TableComponents } from '../../../../../components';
import { colums } from './columns';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { tableDataSelector } from '../../../../reducer/Defactura';


export const DefecturaTable = () => {
  const row = useSelector(tableDataSelector)
  const classes = useStyles()
  const styles:React.CSSProperties = {
    // height: '700px'
  }
  return (
    <div className={classes.table}>
    <TableComponents rows={row} columns={colums} style={styles} />
    </div>
  );
}

