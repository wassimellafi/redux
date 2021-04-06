import { ADD_TASK } from "../Constants/action-types";
import { TOGGLE_TASK } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";
import { SEARCH_TASK } from "../Constants/action-types";
const initialState = {
    todos: [
        {
            id: Math.random(),
            task: "Climb Mountain Everest",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Swim in the Great Barrier Reef",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Go to Hawaii",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Visit the great wall of china",
            isDone: false,
        },
    ],
    filter: "all",
};

export default function todosReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK: {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Math.random(), task: payload.newTask, isDone: false },
                ],
            };
        }
        case TOGGLE_TASK: {
            return {
                ...state,
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        }
        case EDIT_TASK: {
            return {
                ...state,
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, task: payload.edit }
                        : task
                ),
            };
        }
        case SEARCH_TASK: {
            return { ...state, filter: payload.filter };
        }
        default:
            return state;
    }
}
