import {makeStyles, withStyles} from '@mui/styles';
import { RootWrapper } from '../../../components/RootWrapper';

export const useStyles = makeStyles(() => {
    return {
        block:{
            backgroundColor: 'black'
        }

    }
}
);
export const HomeWrapper = withStyles({
    root: {
        height: '100vh'
    },
  })(RootWrapper);
  