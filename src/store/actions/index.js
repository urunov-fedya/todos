export const TODOS_SUBMIT = "TODOS_SUBMIT";
export const TODOS_REMOVE = "TODOS_REMOVE";
export const TODOS_CHANGE = "TODOS_CHANGE";
export const TODOS_EDITED = "TODOS_EDITED";
export const TODOS_SAVE = "TODOS_SAVE";
export const TODOS_DONE = "TODOS_DONE";

export const submit = () => ({
    type: TODOS_SUBMIT,
    payload: {}
});

export const change = (name, value) => ({
    type: TODOS_CHANGE,
    payload: {name, value}
});

export const done = (id) => ({
    type: TODOS_DONE,
    payload: {id}
});

export const save = value => ({
    type: TODOS_SAVE,
    payload: { value }
});

export const edit = (id) => ({
    type: TODOS_EDITED,
    payload: {id}
});

export const remove = id => ({
    type: TODOS_REMOVE,
    payload: {id}
});

