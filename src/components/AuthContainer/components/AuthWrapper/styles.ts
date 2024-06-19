import {Box, withStyles, makeStyles, Button, styled} from '@material-ui/core';

export const AuthWrapperStyle = withStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0B3460', 
  },
})(Box);



export const useStyles = makeStyles(() => {
    return {
        root:{
            height: '100%',
            width: '400px',
            display: 'flex',
            backgroundColor: 'white', 
            flexDirection: 'column',
            
        },
        blockIcon:{
            backgroundColor:'#112441',
            height: '300px',
            width: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputBlock: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '100px 0px 0px 0px',
            gap: '40px'
        },
        input:{
            height: '50px',
            width: '300px'
        },
        btn: {
            width: '300px',
            height: '50px',
            
            
            '& .MuiButton-contained':{
                background: '#efecec',
            }
            
        }
    }
}
);

export const MyButton = styled(Button)({
    background: '#6390F1',
    border: 0,
    borderRadius: 3,
    color: 'white',
    width: '300px',
    height: '50px',
    padding: '0 30px',
    '&:hover': {
        backgroundColor: '#b5caf9',
    },
  });
