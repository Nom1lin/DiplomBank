import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import creditSlice from './features/credits/creditSlice'
import vkladSlice from './features/vklad/vkladSlice'
// import postSlice from './features/post/postSlice'
// import commentSlice from './features/comment/commentSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        credit: creditSlice,
        vklad: vkladSlice,
        // post: postSlice,
        // comment: commentSlice,
    },
})
