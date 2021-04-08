import {useCallback, useState} from "react";

export function Suggestion({title, onApply}) {
    const [used, setUsed] = useState(false);
    const apply = useCallback(() => {
        setUsed(true);
        onApply();
    }, [onApply]);

    if (used) return null;

    return <button tabIndex="-1" onClick={apply}>+ {title}</button>
}
