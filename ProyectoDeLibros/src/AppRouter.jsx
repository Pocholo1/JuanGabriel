import {Routes,Route, HashRouter } from "react-router-dom"
import Registro from "./registro"
import Inicio from "./app"
import LoginUser from "./LoginUser"
function App(){
    return(

        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/registro" element={<Registro />} />
                <Route exact path="/login" element={<LoginUser />} />

            </Routes>
        </HashRouter>
    )
}

export default App;