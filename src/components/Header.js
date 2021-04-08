import {FormContext} from "../contexts/FormContext";
import {useCallback, useContext} from "react";
import {createClearAction} from "../reducers/FormReducer";

export function Header() {
    const {dispatch, state} = useContext(FormContext);
    const companyName = state['company-name'];

    const onClear = useCallback(() => {
        if (window.confirm("Do you really want to clear the form?")) {
            dispatch(createClearAction());
        }
    }, [dispatch]);

    const onExport = useCallback(() => {
        window.print();
    }, []);

    return <header>
        <h1>Interview Checklist{companyName && ' - '}{companyName}</h1>
        <div className={"buttons"}>
            <button onClick={onClear}>Clear</button>
            <button onClick={onExport}>Export</button>
        </div>
    </header>;
}
