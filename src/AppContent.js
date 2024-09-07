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
                path="/Page"
                element={
                <ProtectedRoute requiredPermission="page.get">
                    <Page />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddPage"
                element={
                <ProtectedRoute requiredPermission="page.add">
                    <AddPage />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditPage/:pageid"
                element={
                <ProtectedRoute requiredPermission="page.edit">
                    <EditPage />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Section"
                element={
                <ProtectedRoute requiredPermission="page_section.get">
                    <Sections />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddSection"
                element={
                <ProtectedRoute requiredPermission="page_section.add">
                    <AddSection />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditSection/:sectionid"
                element={
                <ProtectedRoute requiredPermission="page_section.edit">
                    <EditSection />
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
                path="/Categories"
                element={
                <ProtectedRoute requiredPermission="category.get">
                    <Categories />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddCategory"
                element={
                <ProtectedRoute requiredPermission="category.add">
                    <AddCategory />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditCategory/:categoryid"
                element={
                <ProtectedRoute requiredPermission="category.edit">
                    <EditCategory />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Products"
                element={
                <ProtectedRoute requiredPermission="product.get">
                    <Products />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddProduct"
                element={
                <ProtectedRoute requiredPermission="product.add">
                    <AddProduct />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditProduct/:productid"
                element={
                <ProtectedRoute requiredPermission="product.edit">
                    <EditProduct />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Cities"
                element={
                <ProtectedRoute requiredPermission="city.get">
                    <Cities />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddCity"
                element={
                <ProtectedRoute requiredPermission="city.add">
                    <AddCity />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditCity/:cityid"
                element={
                <ProtectedRoute requiredPermission="city.edit">
                    <EditCity />
                </ProtectedRoute>
                }
            />
             <Route
                path="/DeliveryBoys"
                element={
                <ProtectedRoute requiredPermission="delivery_boy.get">
                    <DeliveryBoys />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddDeliveryBoy"
                element={
                <ProtectedRoute requiredPermission="delivery_boy.add">
                    <AddDeliveryBoy />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditDeliveryBoy/:deliveryid"
                element={
                <ProtectedRoute requiredPermission="delivery_boy.edit">
                    <EditDeliveryBoy />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Orders"
                element={
                <ProtectedRoute requiredPermission="order.get">
                    <Orders />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Order/:orderid"
                element={
                <ProtectedRoute requiredPermission="order.get">
                    <DetailsOrder />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Settings"
                element={
                <ProtectedRoute requiredPermission="setting.get">
                    <Setting />
                </ProtectedRoute>
                }
            />
             <Route
                path="/blogs"
                element={
                <ProtectedRoute requiredPermission="blog.get">
                    <Blogs />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddBlog"
                element={
                <ProtectedRoute requiredPermission="blog.add">
                    <AddBlog />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditBlog/:blogid"
                element={
                <ProtectedRoute requiredPermission="blog.edit">
                    <EditBlog />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Offers/:offerid"
                element={
                <ProtectedRoute requiredPermission="offer.get">
                    <Offers />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddOffer/:offerid"
                element={
                <ProtectedRoute requiredPermission="offer.add">
                    <AddOffer />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditOffer/:offerid"
                element={
                <ProtectedRoute requiredPermission="offer.edit">
                    <EditOffer />
                </ProtectedRoute>
                }
            />
             <Route
                path="/Banners"
                element={
                <ProtectedRoute requiredPermission="banner.get">
                    <Banners />
                </ProtectedRoute>
                }
            />
             <Route
                path="/AddBanner"
                element={
                <ProtectedRoute requiredPermission="banner.add">
                    <AddBanner />
                </ProtectedRoute>
                }
            />
             <Route
                path="/EditBanner/:bannerid"
                element={
                <ProtectedRoute requiredPermission="banner.edit">
                    <EditBanner />
                </ProtectedRoute>
                }
            />
          </Routes>
        </main>

    </>)
}
export default AppContent