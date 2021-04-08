import {Suggestion} from "./Suggestion";
import {cyrb53} from "../hash";

export function Suggestions({value, suggestions, apply}) {
    const suggestionNotContained = (it) => {
        if (Array.isArray(value)) {
            return !value.map(it => it.toLowerCase()).includes(it.toLowerCase());
        } else if (typeof value === 'string') {
            return !value.toLowerCase().includes(it.toLowerCase())
        }
        return true;
    };

    return <div tabIndex="-1" className={"suggestions"}>
        <div tabIndex="-1" className={"suggestions-scroll"}>
            {suggestions && suggestions
                .filter(suggestionNotContained)
                .map((it) => <Suggestion key={cyrb53(it)} title={it} onApply={() => apply(it)}/>)}
        </div>
    </div>
}
