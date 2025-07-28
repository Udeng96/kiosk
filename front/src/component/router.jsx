import Kiosk from "@/component/kiosk/kiosk.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "@/component/kioskCreate/create.jsx";


const Router = () => {
    return(
        <BrowserRouter basename={"/kiosk"}>
            <Routes>
                <Route path="/" element={<Kiosk/>}/>
                <Route path="/create" element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router