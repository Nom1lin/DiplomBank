import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import creditSlice from './features/credits/creditSlice'
import vkladSlice from './features/vklad/vkladSlice'
import feedbackSlice from './features/feedback/feedbackSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        credit: creditSlice,
        vklad: vkladSlice,
        feedback: feedbackSlice,
    },
})
