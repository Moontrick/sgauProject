import { Box } from '@material-ui/core';
import {makeStyles, withStyles} from '@mui/styles';

export const TableToolBarWrapper = withStyles({
    root: {
        padding: '20px 20px 20px 20px'
    }
  })(Box);
  export const SearchBox = withStyles({
    root: {
        padding: '20px 20px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'flex-end',
    }
  })(Box);