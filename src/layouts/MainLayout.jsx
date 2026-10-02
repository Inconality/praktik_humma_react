import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout(){
    return(
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <main className='main-content'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;
