import {usePersistReducer} from "./UsePersistReducer";

const SET_FIELD_ACTION = '@form/setField';
const CLEAR_ACTION = '@form/clear';

const FORM_INITIAL_STATE = {};

function FormReducer(state = FORM_INITIAL_STATE, action) {
    switch (action.type) {
        case CLEAR_ACTION:
            return {};
        case SET_FIELD_ACTION:
            return {...state, [action.fieldId]: action.value};
        default:
            return state;
    }
}

export const createSetFieldAction = (fieldId, value) => ({type: SET_FIELD_ACTION, fieldId, value})
export const createClearAction = () => ({type: CLEAR_ACTION})

export const useFormReducer = (interviewId) => usePersistReducer(`form-${interviewId}`, FormReducer, FORM_INITIAL_STATE);
