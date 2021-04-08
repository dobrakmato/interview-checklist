import React, {useCallback, useEffect, useRef, useState} from "react";
import {Input} from "../Input";
import {Suggestions} from "../Suggestions";
import {cyrb53} from "../../hash";

const ListLine = ({title, onRemove}) => {
    return <div>
        {title}
        <button tabIndex={"-1"} onClick={onRemove}>✕ </button>
    </div>
};

const ListInputInner = React.memo(({value, onChange, suggestions}) => {
    const ref = useRef();
    const [newLine, setNewLine] = useState('');
    const [oldLine, setOldLine] = useState('');
    const [editingLast, setEditingLast] = useState(false);

    value = value || [];

    const addLine = useCallback((line) => {
        onChange([...value, line.trim()]);
        setNewLine('');
    }, [value, onChange]);
    const removeLine = useCallback((index) => onChange(value.filter((_, idx) => idx !== index)), [value, onChange]);

    const handleSpecialKey = useCallback((ev) => {
        if (ev.key === 'Enter') {
            if (!newLine.trim().length) return;
            addLine(newLine);
            setEditingLast(false);
        } else if (ev.key === 'ArrowUp' && !editingLast) {
            const last = value[value.length - 1];
            setOldLine(last);
            removeLine(value.length - 1);
            setNewLine(last);
            setEditingLast(true);
        } else if (ev.key === 'Escape' && editingLast) {
            setEditingLast(false);
            setOldLine(''); // this is needed to trigger effect
            addLine(oldLine);
        }
    }, [editingLast, oldLine, removeLine, value, newLine, addLine]);

    useEffect(() => {
        if (ref.current) {
            ref.current.selectionStart = ref.current.selectionEnd = ref.current.value.length;
        }
    }, [oldLine]);

    return <>
        <div className={"lines"}>
            {value.map((it, idx) => <ListLine key={cyrb53(it)} title={it} onRemove={() => removeLine(idx)}/>)}
            <input className={"skip-print"}
                   ref={ref}
                   type={"text"}
                   value={newLine}
                   onKeyDown={handleSpecialKey}
                   placeholder={"Start typing..."}
                   onChange={(ev) => setNewLine(ev.target.value)}
            />
        </div>
        <Suggestions value={value} suggestions={suggestions} apply={(it) => addLine(it)}/>
    </>
});

export const ListInput = ({id, ...rest}) => <Input id={id} render={ListInputInner} {...rest}/>
