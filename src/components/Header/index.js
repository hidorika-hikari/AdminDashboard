import { MdMenuOpen, MdOutlineLightMode, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCartOutline, IoShieldHalfSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from '@mui/material/Button';
import SearchBox from "../SearchBox";
import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotifications, setIsOpenNotificationsDrop] = useState(false);

    const openNotifications = Boolean(isOpenNotifications);
    const openMyAcc = Boolean(anchorEl);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpenNotificationsDrop = () => {
        setIsOpenNotificationsDrop(true);
    }

    const handleCloseNotificationsDrop = () => {
        setIsOpenNotificationsDrop(false);
    }

    return (
    <>
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-2 part1">
                        <Link to={"/"} className="d-flex align-items-center logo">
                            <img src={logo} alt="logo"></img>
                            <span className="ms-2">HOME</span>
                        </Link>
                    </div>

                    <div className="col-sm-3 d-flex align-items-center part2 ps-4">
                        <Button className="rounded-circle me-3"><MdMenuOpen/></Button>
                        <SearchBox/>
                    </div>
                    
                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        <Button className="rounded-circle me-3"><MdOutlineLightMode/></Button>
                        <Button className="rounded-circle me-3"><IoCartOutline/></Button>
                        <Button className="rounded-circle me-3"><MdOutlineMailOutline/></Button>
                        
                        <div className="dropDownWrapper">
                            <Button className="rounded-circle me-3"><FaRegBell
                            onClick={handleOpenNotificationsDrop}/></Button>
                            <Menu
                                    anchorEl={isOpenNotifications}
                                    className="notifications"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleCloseNotificationsDrop}
                                    onClick={handleCloseNotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <h4>Orders (12)</h4>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My Notification
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                    <ListItemIcon>
                                        <IoShieldHalfSharp/>
                                    </ListItemIcon>
                                    Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                    </MenuItem>
                            </Menu>
                        </div>

                        <div className="myAccWrapper">
                            <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                <div className="myAcc d-flex align-items-center">
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://i.scdn.co/image/ab67616d00001e026f157409ae8578b9695be2b3" alt="user_avatar"/>
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h4>hidorika shine</h4>
                                        <p className="mb-0">@hidorika</p>
                                    </div>
                                </div>
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openMyAcc}
                                onClose={handleCloseMyAccDrop}
                                onClick={handleCloseMyAccDrop}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <IoShieldHalfSharp/>
                                </ListItemIcon>
                                Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                                </MenuItem>
                            </Menu>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    </>
  )
};

export default Header;