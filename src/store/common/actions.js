import * as types from './actionTypes';
import moment from 'moment'

export function setHeading(heading){
  return dispatch =>{
    dispatch({type:types.SET_HEADING, heading});
  }
}

export function setLocation(location){
  return dispatch =>{
    dispatch({type:types.SET_LOCATION, location, status:types.SUCCESS});
    setTimeout(()=>dispatch({type:types.SET_LOCATION, location, status:null}),20);
  }
}