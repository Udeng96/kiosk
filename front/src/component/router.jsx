import {BrowserRouter, Route, Routes} from "react-router-dom";
import Default from "@/component/new/default.jsx";
import Namhae from "@/component/new/namhae.jsx";
import Manage from "@/component/new/manage/manage.jsx";


const Router = () => {


    return(
        <BrowserRouter basename={"/kiosk"}>
            <Routes>
                <Route path="/" element={<Default/>}/>
                <Route path="/create" element={<Namhae/>}/>
                <Route path="/manage" element={<Manage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router