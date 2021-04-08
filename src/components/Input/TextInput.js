import React from "react";
import {Input} from "../Input";
import {Suggestions} from "../Suggestions";
import TextareaAutosize from 'react-textarea-autosize';

const TextInputInner = React.memo(({value, onChange, suggestions}) => {
    const applySuggestionFromList = (suggestion) => {
        if (!value) return suggestion;
        return value.trim() + ', ' + suggestion;
    };

    return <>
        <TextareaAutosize minRows={1} value={value || ''} onChange={(ev) => onChange(ev.target.value)}/>
        <Suggestions value={value} suggestions={suggestions} apply={(it) => onChange(applySuggestionFromList(it))}/>
    </>
});

export const TextInput = (props) => <Input id={props.id} render={TextInputInner} {...props}/>
