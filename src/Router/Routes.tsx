import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { CreateUse } from "../pages/CreateUser";



export function Router (){


    return(

        <Routes>
            <Route path="/" >
                <Route  path="/" element ={<Login/>} />
                <Route  path="/home" element ={<Home/>} />
                <Route  path="/createUser" element ={<CreateUse/>} />
            </Route>

        </Routes>
    )
}