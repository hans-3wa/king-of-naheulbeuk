import './App.css';
import {Register} from "./pages/Register/Register";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {Rules} from "./pages/Rules/Rules";
import {DisplayTournament} from "./pages/DisplayTournament/DisplayTournament";

function App() {

    const {page} = useSelector(state => state.game)

    return (
        <Routes>
            {page === 'register' && <Route path={"/"} element={<Register/>}/>}
            {page === 'rules' && <Route path={"/rules"} element={<Rules/>}/>}
            {page === 'tournament' && <Route path={"/tournament"} element={<DisplayTournament/>}/>}
            <Route path="*" element={<Register/>}/>
        </Routes>
    );
}

export default App;
