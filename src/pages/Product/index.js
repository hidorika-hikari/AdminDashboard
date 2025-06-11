import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Pagination from "@mui/material/Pagination";
import { MyContext } from "../../App";

const ProductDetails = () => {
    const [showBy, setShowBy] = useState('');
    const [showBySetCateBy, setCateBy] = useState('');
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(false);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>
                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e) => setShowBy(e.target.value)}
                                    displayEmpty
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBySetCateBy}
                                    onChange={(e) => setCateBy(e.target.value)}
                                    displayEmpty
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered table-stripe v-align">
                            <thead className="table-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th style={{ width: '70px' }}>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img card shadow m-0">
                                                    <img
                                                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                                                        alt=""
                                                        className="w-100"
                                                    />
                                                </div>
                                            </div>
                                            <div className="info ps-3">
                                                <h6>
                                                    Tops and Skirt set for
                                                    Female...
                                                </h6>
                                                <p>
                                                    Women's exclusive summer
                                                    Tops and skirt set for
                                                    Female Tops and skirt set
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">
                                            $19.00
                                        </span>
                                    </td>
                                    <td>#1</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button
                                                className="secondary"
                                                color="secondary"
                                            >
                                                <FaEye />
                                            </Button>
                                            <Button
                                                className="success"
                                                color="success"
                                            >
                                                <FaPencilAlt />
                                            </Button>
                                            <Button
                                                className="error"
                                                color="error"
                                            >
                                                <MdDelete />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex tableFooter">
                            <p>
                                Showing <b>12</b> of <b>60</b> results
                            </p>
                            <Pagination
                                count={10}
                                color="primary"
                                className="pagination"
                                showFirstButton
                                showLastButton
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
