import {Routes,Route, HashRouter } from "react-router-dom"
import Registro from "./registro"
import Inicio from "./app"

function App(){
    return(

        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/registro" element={<Registro />} />
            </Routes>
        </HashRouter>
    )
}

export default App;