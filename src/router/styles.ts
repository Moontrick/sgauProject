import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles(() => {
    return {
        icon:{
            width: '40px',
            height: '40px'
        },
        block:{
            width: '70px', 
            height: '100%', 
            backgroundColor: '#167ffb', 
            gap: '100px',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
        },
        key:{
            display: 'block', 
            marginBottom: '10px', 
            padding: '10px', 
            borderRadius: '5px', 
            backgroundColor: '#666', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer' 
        },
        wrapperBlock:{
            display: 'flex',
            padding: '20px 11px 10px 50px',
            flexDirection:'column',
        }
    }
});
