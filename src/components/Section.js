import {Question} from "./Question";

export function Section({id, name, questions}) {
    return <section>
        {name && <h2 id={id}>{name}</h2>}
        {questions.map((it) => <Question key={it.id} {...it}/>)}
    </section>
}
