import Button from "@mui/material/Button";
import { FaCartArrowDown, FaProductHunt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className="w-100">
                                <span className="icon"><RxDashboard/></span>
                                    Dashboard
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className="w-100">
                            <span className="icon"><FaProductHunt/></span>
                                Products
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                        <ul className="submenu">
                            <li><Link to="#">Product List</Link></li>
                            <li><Link to="#">Product View</Link></li>
                            <li><Link to="#">Product Upload</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className="w-100">
                                <span className="icon"><FaCartArrowDown/></span>
                                    Orders
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className="w-100">
                                <span className="icon"><MdMessage/></span>
                                    Messages
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className="w-100">
                                <span className="icon"><IoIosSettings/></span>
                                    Settings
                                <span className="arrow"><FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;