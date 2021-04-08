import {useMemo} from "react";
import {CheckboxInput} from "./Input/CheckboxInput";
import {TextInput} from "./Input/TextInput";
import {TextLineInput} from "./Input/TextLineInput";
import {ListInput} from "./Input/ListInput";

export function Question({id, title, description, type, suggestions, label}) {
    const input = useMemo(() => {
        switch (type) {
            case "checkbox":
                return <CheckboxInput id={id} label={label}/>;
            case "line":
                return <TextLineInput id={id}/>;
            case "list":
                return <ListInput id={id} suggestions={suggestions}/>;
            case "text":
            default:
                return <TextInput id={id} suggestions={suggestions}/>
        }
    }, [id, type, suggestions, label]);

    return <div className={"question " + type}>
        <h3 id={id}>{title}</h3>
        <p>{description}</p>
        {input}
    </div>
}
