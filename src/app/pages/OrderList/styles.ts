import {makeStyles, withStyles} from '@mui/styles';
import { RootWrapper } from '../../../components/RootWrapper';
import { Box } from '@material-ui/core';

export const useStyles = makeStyles(() => {
    return {
        icon:{
            width:'500px',
            height:'500px',
        }

    }
}
);
export const OrderListWrapper = withStyles({
    root: {
    },
  })(Box);
  