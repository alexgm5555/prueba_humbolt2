import { SHOW_COORDENATES } from '../actions'
import { ADD_COORDENATES } from '../actions'
import { ADD_COORDENATESNEW } from '../actions'
import { DELETE_COORDENATES } from '../actions'

// import { showCoordenates } from '../actions'
import { setCoordenates } from '../actions'
import { deleteCoordenates } from '../actions'
const initialState = {
    list: [],
    listNew:[]
}

export  function  showCoordenates(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case SHOW_COORDENATES:
            return Object.assign({}, state, { list: action.payload })
        case ADD_COORDENATES:
                Object.assign({}, state, { list: action.payload })
            setCoordenates(state.listNew)
            return state
        case ADD_COORDENATESNEW:
            state.listNew = action.coordenate;
            return state
        case DELETE_COORDENATES:
            deleteCoordenates();
            return Object.assign({}, state, { list: [] })
        default:
            return state
    }
} 