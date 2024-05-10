import {makeStyles, withStyles} from '@mui/styles';
import { RootWrapper } from '../../../components/RootWrapper';

export const useStyles = makeStyles(() => {
    return {
        block:{
        }

    }
}
);
export const TestWrapper = withStyles({
    root: {
        marginLeft:'400px',
        height: '100vh'
    },
  })(RootWrapper);
  