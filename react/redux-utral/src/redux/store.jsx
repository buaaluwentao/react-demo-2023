import myReducer from './reducer'
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({"reducer": myReducer}) 