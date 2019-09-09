import { combineReducers} from 'redux'
import { showCoordenates } from './coordenates'

const rootReducer = combineReducers({
    coordenates:showCoordenates
}) 

export default rootReducer