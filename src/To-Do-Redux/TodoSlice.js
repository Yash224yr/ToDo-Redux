import { createSlice } from "@reduxjs/toolkit";

const Todoslice = createSlice({
    name: "Todo",
    initialState: {
        value: "",
        tasks: [],
        editing: false,
    },
    reducers: {
        handlerchange: ((state, actions) => {
            state.value = actions.payload
        }),
        handlersubmit: ((state) => {
            if (state.value.length > 0 && state.editing === false) {
                state.tasks = [...state.tasks, state.value]
                state.value = ""
            }
            else{
               state.tasks[state.editing] = state.value
               state.value = ""
               state.editing = false
            }

        }),
        handlerdelete: ((state, actions) => {
            state.tasks = state.tasks.filter((task, ind) => {
                return ind !== actions.payload
            })
        }),
        handleredit: ((state, actions) => {
            state.value = actions.payload
        }),
        handlerindex: ((state, actions) => {
            state.editing =  actions.payload
        })
    }

})
export const { handlerchange, handlersubmit, handlerdelete, handleredit, handlerindex } = Todoslice.actions
export default Todoslice.reducer