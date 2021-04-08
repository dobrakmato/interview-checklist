import {useReducer} from "react";

export function usePersistReducer(key, reducer, initialState) {
    const localStorageKey = `PersistReducer-${key}`;
    const stored = localStorage.getItem(localStorageKey);
    const firstState = stored ? JSON.parse(stored) : initialState;

    const persist = (state) => localStorage.setItem(localStorageKey, JSON.stringify(state));

    const persistReducer = (state, action) => {
        const newState = reducer(state, action);
        persist(newState);
        return newState;
    };

    return useReducer(persistReducer, firstState);
}
