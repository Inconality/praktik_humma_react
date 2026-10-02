import { Navigate, Outlet } from "react-router";

function ProtectedRoutes(){
    const isAuth = localStorage.getItem('token');

    if(!isAuth){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
}

export default ProtectedRoutes;