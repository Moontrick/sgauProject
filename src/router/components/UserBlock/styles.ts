import {makeStyles, withStyles} from '@mui/styles';
import { Box } from '@material-ui/core';

export const useStyles = makeStyles(() => {
    return {
        icon:{
            width: '40px',
            height: '40px'
        },
    }
});

export const UserWrapper = withStyles({
  root: {
    paddingTop: '30px'
  },
})(Box);
