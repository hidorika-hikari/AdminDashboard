import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Button from "@mui/material/Button";

const DashboardBox = (props) => {
    return (
            <div className="dashboardBox" style={{
                backgroundImage:`linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
            }}>
                {
                    props.grow === true ?
                    <span className="chart"><TrendingUpIcon/></span>
                    :
                    <span className="chart"><TrendingDownIcon/></span>
                }

                <div className="d-flex w-100">
                    <div className="col1">
                        <h4 className="text-white">Total User</h4>
                        <span className="text-white">277</span>
                    </div>
                    
                    <div className="ms-auto">
                        <span className="icon">
                            {props.icon? props.icon : ''}
                        </span>
                    </div>
                </div>

                <div className="d-flex align-items-center w-100 bottomEle">
                    <h5 className="text-white mb-0 mt-0">Last Month</h5>
                    <Button className="ms-auto toggleIcon"><HiDotsVertical/></Button>
                </div>
            </div>
    )
}

export default DashboardBox;