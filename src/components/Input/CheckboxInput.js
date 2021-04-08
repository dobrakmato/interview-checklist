import React from "react";
import {Input} from "../Input";

const CheckboxInputInner = React.memo(({value, onChange, label}) => {
    return <label><input type={"checkbox"}
                         checked={value || false}
                         onChange={(ev) => onChange(ev.target.checked)}
    />{label || "Yes."}</label>
});

export const CheckboxInput = ({id, ...rest}) => <Input id={id} render={CheckboxInputInner} {...rest}/>
