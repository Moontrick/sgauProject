import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { TableState } from '../Table/typings';
import { ThunkTableManager } from '../Table/TableThunk';
import { useAppDispatch } from '../../app/store';

function SearchTable({manager, label}: {manager: ThunkTableManager; label?: string}) {
  const dispatch = useAppDispatch();
 
  const query: string = useSelector(
    ({
      [manager.key]: {
        params: {query},
      },
    }: {
      [key: string]: TableState;
    }) => query,
  ); 
  const [initState, setInitState] = useState(query)
  const onChange = (e: any) =>{
    setInitState(e.target.value)
  }
  return (
    <TextField
      size='small' 
      variant="outlined"
      label={label}
      value={initState}
      onChange={(e) => {
        onChange(e)
        dispatch(manager.changeQuery(e.target.value));
      }}
    />
  );
}

export default SearchTable;
