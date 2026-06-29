
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../content";
import { DashboardPage } from "../lovatou/routes/pages/dashboard/DashboardPage";
import { SobreMi } from "../lovatou/routes/pages/dashboard/SobreMi";
import { Education } from "../lovatou/routes/pages/Education";
export const AppRouter = () => {

    return (
        <>
           <>
        <Navbar  />
        <div className="container">
            <Routes>
                <Route path="/*" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/sobremi" element={<SobreMi/>}/>
                <Route path="/education" element={<Education/>}/>
            </Routes>

        </div>
        </>
        </>
    )
}