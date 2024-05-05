import {AppThunkResult} from '../../store/index';
// import {userService} from '../servise/userService/userService';


  export function findByText(text: string): AppThunkResult {
    return async (dispatch) => {
      try {
        // const data = await userService.findByText(text);
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    };
  }