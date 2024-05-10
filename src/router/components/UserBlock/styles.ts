import {makeStyles, withStyles} from '@mui/styles';
import { Box } from '@material-ui/core';

export const useStyles = makeStyles(() => {
    return {
        icon:{
            width: '70px',
            height: '37px'
        },
    }
});

export const UserWrapper = withStyles({
  root: {
    display: 'flex',
    backgroundColor: '#112441',
    height: '70px',
    justifyContent: 'center',
    alignItems: 'center',
  }
})(Box);
