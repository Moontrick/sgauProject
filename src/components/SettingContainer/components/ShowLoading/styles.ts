import { Box } from '@mui/material';
import {makeStyles, withStyles} from '@mui/styles';

export const useStyles = makeStyles(() => {
    return {
        root:{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            position: 'absolute',
            top: '0px',
            zIndex: '100000',
            backgroundColor: 'gray',
            opacity: '0.3',
                
              
        },
        icon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            right: '50%',
            zIndex: '100000',
        }
    }
}
);

  
