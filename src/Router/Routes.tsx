import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";




export function Router (){


    return(

        <Routes>
            <Route path="/" >
                <Route  path="/" element ={<Login/>} />
                
            </Route>

        </Routes>
    )
}