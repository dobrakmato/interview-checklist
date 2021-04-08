import React from "react";
import {Input} from "../Input";

const TextLineInner = React.memo(({value, onChange}) => {
    return <input type={"text"}
                  value={value || ''}
                  onChange={(ev) => onChange(ev.target.value)}
    />
});

export const TextLineInput = ({id}) => <Input id={id} render={TextLineInner}/>
