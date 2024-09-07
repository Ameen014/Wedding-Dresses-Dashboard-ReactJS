import React , {useState , useEffect} from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoute";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Header from "./Layout/Header/Header";
import Login from "./Auth/Login";
import Role from "./Component/Role/Role";
import AddRole from "./Component/Role/AddRole";
import EditRole from "./Component/Role/EditRole";
import Permission from "./Component/Role/Permission";
import Admins from "./Component/Admins/Admin";
import AddAdmin from "./Component/Admins/AddAdmin";
import EditAdmin from "./Component/Admins/EditAdmin";
import Dashboard from "./Component/Dashboard/Dashboard";
import NotAuthorized from "./Component/NotAuthorized";
import Users from "./Component/Users/User";
import AddUser from "./Component/Users/AddUser";
import EditUser from "./Component/Users/EditUser";

function AppContent () {

    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleResize = () => {
        if (window.innerWidth < 968) { 
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
       
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(<>

        {!isLoginPage &&  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <main className="content">
          {!isLoginPage &&  <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                <ProtectedRoute requiredPermission="setting.get">
                    <Dashboard/>
                </ProtectedRoute>
                }
            />
            <Route
                path="/dashboard"
                element={
                <ProtectedRoute requiredPermission="setting.get">
                    <Dashboard/>
                </ProtectedRoute>
                }
            />
            <Route
                path="/not-authorized"
                element={<NotAuthorized />}
            />
            <Route
                path="/Role"
                element={
                <ProtectedRoute requiredPermission="role.get">
                    <Role />
                </ProtectedRoute>
                }
            />
            <Route
                path="/AddRole"
                element={
                <ProtectedRoute requiredPermission="role.add">
                    <AddRole />
                </ProtectedRoute>
                }
            />
            <Route
                path="/EditRole/:roleid"
                element={
                <ProtectedRoute requiredPermission="role.edit">
                    <EditRole />
                </ProtectedRoute>
                }
            />
            <Route
                path="/Permission/:permissionname/:permissionid"
                element={
                <ProtectedRoute requiredPermission="permission.get">
                    <Permission />
                </ProtectedRoute>
                }
            />
      
             <Route
                path="/admins"
                element={
                <ProtectedRoute requiredPermission="admin.get">
                    <Admins />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddAdmin"
                element={
                <ProtectedRoute requiredPermission="admin.add">
                    <AddAdmin />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditAdmin/:adminid"
                element={
                <ProtectedRoute requiredPermission="admin.edit">
                    <EditAdmin />
                </ProtectedRoute>
                }
            />
             <Route
                path="/users"
                element={
                <ProtectedRoute requiredPermission="user.get">
                    <Users />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddUser"
                element={
                <ProtectedRoute requiredPermission="user.add">
                    <AddUser />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditUser/:userid"
                element={
                <ProtectedRoute requiredPermission="user.edit">
                    <EditUser />
                </ProtectedRoute>
                }
            />
          </Routes>
        </main>

    </>)
}
export default AppContent