const initialValue = {
    todoList: [
        {
            title: 'javascript',
            id: Math.random(),
            isDone: false
        },
        {
            title: 'python',
            id: Math.random(),
            isDone: false
        },
        {
            title: 'django',
            id: Math.random(),
            isDone: true
        }
    ],
    currentStage: 'inWorking'
}

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                todoList: [
                    ...state.todoList,
                    action.payload
                ],
                currentStage: state.currentStage
            };
            break;
        case 'updateTodo/delete':
            const newArray = state.todoList.filter(item => item.id !== action.payload);
            return {
                todoList: newArray,
                currentStage: state.currentStage
            };
            break;
        case 'updateTodo/done':
            const newArray2 = state.todoList.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isDone: true
                    }
                } else {
                    return item;
                };
            });
            return {
                todoList: newArray2,
                currentStage: state.currentStage
            };
            break;
        case 'updateTodo/inProgress':
            const newArray3 = state.todoList.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isDone: false
                    }
                } else {
                    return item;
                };
            });
            return {
                todoList: newArray3,
                currentStage: state.currentStage
            };
            break;
        case 'setWorking':
            return {
                ...state,
                currentStage: "inWorking"
            };
            break;
        case 'setDone':
            return {
                ...state,
                currentStage: "done"
            };
            break;
        default:
            return state;
    };
};

export default reducer;