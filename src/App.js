import data from './data.json';
import {Section} from "./components/Section";
import {useFormReducer} from "./reducers/FormReducer";
import {FormContext} from "./contexts/FormContext";
import {Header} from "./components/Header";

function FormStoreProvider({children, interviewId}) {
    const [state, dispatch] = useFormReducer(interviewId);

    // todo: implement actual load and save logic

    return <FormContext.Provider value={{dispatch, state}}>
        {children}
    </FormContext.Provider>
}

function App() {
    const interviewId = 0;

    return <FormStoreProvider interviewId={interviewId}>
        <Header/>
        <main>
            {data.sections.map(it => <Section key={it.id} {...it}/>)}
        </main>
    </FormStoreProvider>;
}

export default App;
