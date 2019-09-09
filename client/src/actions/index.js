
export const SHOW_COORDENATES = 'SHOW_COORDENATES'
export const ADD_COORDENATES = 'ADD_COORDENATES'
export const ADD_COORDENATESNEW = 'ADD_COORDENATESNEW'
export const DELETE_COORDENATES = 'DELETE_COORDENATES'

export function showCoordenates() {
    return function (dispatch, getState) {
        fetch('api/coordinate')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: SHOW_COORDENATES,
                    payload: data
                })
            });
    }
}
export function setCoordenates(e) {
    console.log(e)
        fetch('/api/coordinate/many', {
            method: 'POST',
            body: JSON.stringify(e),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                return function (dispatch, getState) {
                    
                    dispatch({
                        type: SHOW_COORDENATES,
                        payload: showCoordenates().then((e)=>{
                    
                        })
                    })
                }
            })
            .catch(err => console.error(err));
    return function (dispatch, getState) {
        return function (dispatch, getState) {
            dispatch({
                type: SHOW_COORDENATES,
                payload: []
            })
        }
    }
}
export function deleteCoordenates(e) {
        fetch('/api/coordinate/all', {
            method: 'DELETE',
            body: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return function (dispatch, getState) {
                    dispatch({
                        type: SHOW_COORDENATES,
                        payload: []
                    })
                }
            })
            .catch(err => console.error(err));
    return function (dispatch, getState) {
        dispatch({
            type: SHOW_COORDENATES,
            payload: []
        })
            }
}