import Select from '@mui/material/Select';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { TableState } from '../Table/typings';
import { ThunkTableManager } from '../Table/TableThunk';
import { useAppDispatch } from '../../app/store';
import { Options } from '../../app/types/shared/shared';
import { MenuItem, Typography } from '@mui/material';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

function SearchSelet({manager, label, options, onChangeType}: {manager: ThunkTableManager; label?: string, options: Options[], onChangeType: (e: any) => void}) {
  const dispatch = useAppDispatch();

const searchType: string = useSelector(
    ({
        [manager.key]: {
        params: {searchType},
        },
    }: {
        [key: string]: TableState;
    }) => searchType,
    ); 
    const [initState, setInitState] = useState(searchType)
    const onChange = (e: any) =>{
        setInitState(e.target.value)
    }
  return (
    <FormControl >
          <FormHelperText style={{fontSize: '18px',
    color: 'black'}}>{label}</FormHelperText>
    <Select
        value={initState}
        style={{width:"200px", height: '40px'}}
        onChange={(e) => {
            onChange(e)
            onChangeType(e)
            dispatch(manager.changeSearchType(e.target.value as string));
          }}
    >
        {options.map((item, index) => <MenuItem value={item.value} key={index}>{item.label}</MenuItem>)}
    
  </Select>

  </FormControl>
  );
}

export default SearchSelet;
