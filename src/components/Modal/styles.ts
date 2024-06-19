import { Box, withStyles } from '@material-ui/core';
import {makeStyles} from '@mui/styles';

export const ModalBox = withStyles({
    root: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'flex-start',
        
    }
  })(Box);

  export const useStyles = makeStyles(() => {
    return {
        root:{
            background: 'white',
            borderRadius: '15px',
            padding: '20px 20px 20px 20px'
        },
    }
}
);

  
