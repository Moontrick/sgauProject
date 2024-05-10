import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles(() => {
    return {
        icon:{
            width: '70px',
            height: '40px',
            strokeWidth:"2", stroke: "green", fill:"#ff0000",
            // pointerEvents: 'none',
            // userSelect: 'none',
        },
        block:{
            width: '70px', 
            height: '100%', 
            backgroundColor: '#0B3460', 
            justifyContent: 'space-between',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            zIndex:'10000'
        },
        key:{
            marginBottom: '5px', 
            padding: '10px', 
            width:'200px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'black', 
            cursor: 'pointer',
            textAlign: 'start',
            '&:hover':{
                color: '#6390F1'
            }
        },
        wrapperBlock:{
            display: 'flex',
            padding: '20px 0px 0px 50px',
            flexDirection:'column',
            alignItems: 'flex-start',
        }
    }
});
