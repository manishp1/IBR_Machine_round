import {configureStore} from '@reduxjs/toolkit'
import PersonalInfoSlice from './PersonalInfoSlice'

export default configureStore({
    reducer:{
        personalInfo:PersonalInfoSlice
    }
})