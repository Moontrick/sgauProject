import {makeStyles} from '@mui/styles';

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
            zIndex: '200000',
            backgroundColor: 'gray',
            opacity: '0.3',  
        },
    }
}
);

  
