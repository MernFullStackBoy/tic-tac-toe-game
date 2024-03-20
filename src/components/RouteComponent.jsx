import { Route, Routes } from "react-router-dom"
import Maindash from "./Maindash"
import Game from "./game/Game"

const RouteComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Maindash />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </div>
    )
}

export default RouteComponent