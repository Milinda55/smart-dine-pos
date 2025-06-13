import './App.css'
import './index.css'
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Home, Auth, Orders, Tables, Menu} from './pages'
import Header from "./components/shared/Header.jsx";
import {useSelector} from "react-redux";
import useLoadData from "./hooks/useLoadData.js";
import FullScreenLoader from "./components/shared/FullScreenLoader.jsx";

function Layout() {
    const location = useLocation();
    const isLoading = useLoadData();
    const hideHeaderRoutes = ["/auth"];
    const { isAuth } = useSelector(state => state.user)

    if (isLoading) return <FullScreenLoader />

    return (
        <>
            { !hideHeaderRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/" element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                } />

                <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth /> } />

                <Route path="/orders" element={
                    <ProtectedRoutes>
                        <Orders />
                    </ProtectedRoutes>
                } />
                <Route path="/tables" element={
                    <ProtectedRoutes>
                        <Tables />
                    </ProtectedRoutes>
                } />
                <Route path="/menu" element={
                    <ProtectedRoutes>
                        <Menu />
                    </ProtectedRoutes>
                } />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </>
    )
}

function ProtectedRoutes({children}) {
    const { isAuth } = useSelector(state => state.user )
    if (!isAuth) {
        return <Navigate to={"/auth"} />
    }
    return children;
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    )
}

export default App
