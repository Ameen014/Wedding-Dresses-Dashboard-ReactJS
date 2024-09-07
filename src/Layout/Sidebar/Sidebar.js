    import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import logo from "../../assets/Logo.png";
    import GridViewIcon from '@mui/icons-material/GridView';
    import PersonIcon from '@mui/icons-material/Person';
    import LockIcon from '@mui/icons-material/Lock';
    import Woman2Icon from '@mui/icons-material/Woman2';
    import CloseIcon from '@mui/icons-material/Close';
    import EventNoteIcon from '@mui/icons-material/EventNote';
    
    const Sidebar = ({ isOpen , toggleSidebar }) => {

        const location = useLocation();
        const isLoginPage = (location.pathname === "/login");
        const [activeItem, setActiveItem] = useState(location.pathname);
        const user = JSON.parse(localStorage.getItem("user"))
        const permissions = user?.permission


        useEffect(() => {
            const contentElement = document.querySelector('.content');
            if (isOpen && !isLoginPage) {
                contentElement.style.paddingLeft = '225px';
            } else {
                contentElement.style.paddingLeft = '0';
            }

            setActiveItem(location.pathname);

        }, [isOpen ,location.pathname]);


    const menuItems = [
            { path: '/dashboard', label: 'Dashboard', icon: <GridViewIcon className='icon' sx={{ fontSize: "22px", marginRight: "9px" }} />, permission: 'setting.get' },
            { path: '/admins', label: 'Admins', icon: <PersonIcon className='icon' sx={{ fontSize: "22px", marginRight: "9px" }} />, permission: 'admin.get' },
            { path: '/Role', label: 'Roles', icon: <LockIcon className='icon' sx={{ fontSize: "22px", marginRight: "9px" }} />, permission: 'role.get' },
            { path: '/dresses', label: 'Dresses', icon: <Woman2Icon className='icon' sx={{ fontSize: "22px", marginRight: "9px" }} />, permission: 'dress.get' },
            { path: '/specifications', label: 'Specifications', icon: <Woman2Icon className='icon' sx={{ fontSize: "22px", marginRight: "9px" }} />, permission: 'specification.get' },
            { path: '/specificationOptions', label: 'Spec-Options', icon: <Woman2Icon className='icon' sx={{ fontSize: "22px", marginRight: "9px" }} />, permission: 'specificationOption.get' },
            { path: '/reservations', label: 'Reservations', icon: <EventNoteIcon className='icon' sx={{ fontSize: "22px", marginRight: "9px" }} />, permission: 'reservation.get' },
    ];
    

      const filteredMenuItems = menuItems.filter(item => permissions?.includes(item.permission));


        return (
            <>

                <div className={`menu ${isOpen ? '' : 'hidden'}`}>
                    {isOpen ?
                        <button onClick={toggleSidebar} className="toggle-button-open">
                            <CloseIcon fontSize="small" className="spin-icon" sx={{ color: "green !important" }} />
                        </button> : ""
                    }
                    <div className='logo'>
                        <img className='logosidebar' src={logo} alt="logo" />
                    </div>
                    <div className='menu--list'>
                        {filteredMenuItems.map(item => (
                            <Link key={item.path} to={item.path} className={`item ${activeItem === item.path ? 'active' : ''}`}>
                                <span>
                                    {item.icon}
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        );
    };

    export default Sidebar;
