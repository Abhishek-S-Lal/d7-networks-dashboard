import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppDashboard from "../components/layout/AppDashboard"
import DashboardPage from "../pages/DashboardPage"
import SmsCampaignPage from "../pages/sms/campaign/SmsCampaignPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppDashboard />} >
                    <Route
                        path=""
                        element={<Navigate replace to="dashboard" />}
                    />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="sms">
                        <Route
                            path=""
                            element={<Navigate replace to="campaign" />}
                        />
                        <Route path="campaign" element={<SmsCampaignPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}