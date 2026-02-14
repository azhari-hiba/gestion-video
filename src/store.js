import { configureStore} from "@reduxjs/toolkit";
import videoReduce from './videosSlice';
export const store =configureStore({
    reducer:{
        videos:videoReduce
    }
})                                                        