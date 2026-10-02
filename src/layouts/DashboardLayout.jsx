import { Link, Outlet } from "react-router";
import { Suspense } from "react";

const loader = () => <div style={{ textAlign: 'center', padding: '36px'}}>Loading...</div>

function DashboardLayout(){
    return(
        <div style={{ display: 'flex', gap: '20px' }}>
            <aside style={{ width: '200px', borderRight: '1px solid #ccc' }}>
                <h3>Menu Dashboard</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><Link className="nav-link" to="/dashboard">Overview</Link></li>
                    <li><Link className="nav-link" to="/dashboard/settings">Settings</Link></li>
                    <li><Link className="nav-link" to="/dashboard/users/123">Profile</Link></li>
                </ul>
            </aside>
            <section style={{ flex: 1 }}>
                <Suspense fallback={loader()}>
                    <Outlet/>
                </Suspense>
            </section>
        </div>
    );
}

export default DashboardLayout;
