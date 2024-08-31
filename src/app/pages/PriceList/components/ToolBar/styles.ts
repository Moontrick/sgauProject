import { Box } from '@material-ui/core';
import {makeStyles, withStyles} from '@mui/styles';

export const TableToolBarWrapper = withStyles({
    root: {
        padding: '20px 20px 20px 20px',

    }
  })(Box);

export const SearchBox = withStyles({
    root: {
        padding: '20px 20px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        alignItems: 'flex-end',
    }
  })(Box);

  export const useStyles = makeStyles(() => {
    return {
        input:{
            height: '50px',
  
        }
    }
}
);