import main from '../src/main'
import {Routes, Route, HashRouter} from 'react-router-dom'
import registro from '../src/registro'

function App(){
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<main/>} />
                <Route exact path="/registro" element={<registro/>} />
            </Routes>
        </HashRouter>
    )
}

export default App