import {FormContext} from "../contexts/FormContext";
import {useCallback, useContext} from "react";
import {createSetFieldAction} from "../reducers/FormReducer";

export function Input({id, render, ...rest}) {
    const {dispatch, state} = useContext(FormContext);
    const value = state[id];
    const onChange = useCallback((value) => dispatch(createSetFieldAction(id, value)), [id, dispatch]);

    const Component = render;

    return (
        <Component value={value} onChange={onChange} {...rest}/>
    )
}
