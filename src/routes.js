import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Home from "./pages/Home";

function MyRoutes() {

    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} exact/>
            <Route path='/community' element = {<Community />}/>  
        </Routes>
    </BrowserRouter>
    )
}

export default MyRoutes;