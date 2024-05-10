import {makeStyles, withStyles} from '@mui/styles';
import { RootWrapper } from '../../../components/RootWrapper';

export const useStyles = makeStyles(() => {
    return {
        icon:{
            width:'500px',
            height:'500px',
        }

    }
}
);
export const HomeWrapper = withStyles({
    root: {
        height: '100vh',
        backgroundColor:'#112441',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    
    },
  })(RootWrapper);
  