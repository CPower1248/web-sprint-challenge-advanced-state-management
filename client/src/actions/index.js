import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START})

    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("RES: ", res)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("ERR: ", err)
            dispatch({type: FETCH_SMURFS_FAIL, payload: err.message})
        })
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.