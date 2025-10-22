import {BrowserRouter, Route, Routes} from "react-router-dom";
import Default from "@/component/new/default.jsx";
import Namhae from "@/component/new/namhae.jsx";


const Router = () => {


    return(
        <BrowserRouter basename={"/kiosk"}>
            <Routes>
                <Route path="/" element={<Default/>}/>
                <Route path="/create" element={<Namhae/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router