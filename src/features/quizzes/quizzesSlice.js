import { createSlice } from '@reduxjs/toolkit'
import { addQuizIdToTopic } from '../topics/topicsSlice'

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload
            state.quizzes[id] = action.payload
        }
    }
})

export const quizThunkAction = (payload) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizIdToTopic({
            topicId: payload.topicId,
            quizId: payload.id
        }));
    };
};

export const { addQuiz } = quizzesSlice.actions
export const selectQuizzes = state => state.quizzes.quizzes
export default quizzesSlice.reducer
