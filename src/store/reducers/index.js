import {
    TODOS_SUBMIT,
    TODOS_CHANGE,
    TODOS_EDITED,
    TODOS_DONE,
    TODOS_REMOVE,
} from "../actions";

const empty = {
    id: 0,
    name: '',
    date: '',
    priority: 1,
    done: false
};

export const initialState = {
    todos: [],
    todo: empty,
    author: {
        name: 'Firdavs',
        surname: 'Urunov',
        job: 'JS Devaloper',
        img: 'https://media-exp1.licdn.com/dms/image/C4D03AQG_KR320nVXZw/profile-displayphoto-shrink_100_100/0/1600845119411?e=1616025600&v=beta&t=D6hhSf4cfDmt0uIoTGvc0hfTksZdnp3ZUrKeuqSd-Wg',
        links: {
            github: 'http://github.com/Firdavs2002/',
            linkedin: 'https://www.linkedin.com/in/urunov/',
            telegram: 'https://t.me/firdavsurunov',
        }
    },
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_SUBMIT:
            return reducerSubmit(state, action);
        case TODOS_CHANGE:
            return reducerChange(state, action);
        case TODOS_DONE:
            return reducerDone(state, action);
        case TODOS_EDITED:
            return reducerEdit(state, action);
        case TODOS_REMOVE:
            return reducerRemove(state, action);
        default:
            return state;
    }
};

const reducerSubmit = (state, action) => {
    const {todo, todos} = state;
    const tod = {
        ...todo,
        id: todo.id || Date.now()
    };

    if (todo?.id === 0) {
        return {
            ...state,
            todos: [{...tod}, ...todos],
            todo: empty
        }
        
    }
    
    return {
        ...state,
        todos: todos.map(t => {
            if (t.id !== tod.id) {
                return t;
            }
            return {...tod};
        }),
        todo: empty,
    };
};

const reducerChange = (state, action) => {
    const {todo} = state;
    const {payload: {name, value}} = action;
    
    return {
        ...state,
        todo: {...todo, [name]: value}
    }
};

const reducerDone = (state, action) => {
    const {todos} = state;
    const {payload: {id}} = action;
    
    return {
        ...state,
        todos: todos.map(t => {
            if (t.id === id) {
                const done = !t.done;
                return {
                    ...t,
                    done
                }
            }
            return t;
        })
    }
};

const reducerEdit = (state, action) => {
    const {todos, todo} = state;
    const { payload : {id} } = action;
    const tod = todos.find(t => t.id === id);

    if (tod === undefined) {
        return {...state};
    }
    
    return {
        ...state,
        todo: {
            ...todo,
            ...tod
        }
    }
};

const reducerRemove = (state, action) => {
    const {todos} = state;
    const {payload: { id }} = action;
    return {
        ...state,
        todos: todos.filter(o => o.id !== id)
    }
};