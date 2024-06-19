import { Box } from '@material-ui/core';
import {makeStyles, withStyles} from '@mui/styles';

export const useStyles = makeStyles(() => {
    return {
        modal: {
            width: '500px',
            height: '300px',
            backgroundColor: 'white',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        }
    }
}
);

export const ModalWrapper = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  })(Box);
  
export const ModalInfoWrapper = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: '0 auto',
        zIndex: '200000',
    },
  })(Box);
  