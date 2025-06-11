import { Breadcrumbs, Chip, emphasize, styled } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import { FaTag } from "react-icons/fa6";
import { MdBrandingWatermark } from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { AiFillDollarCircle } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import React from 'react';
import Slider from 'react-slick';

const StyleBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

const ProductDetails = () => {
    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    var productSliderSmallOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Product View</h5>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        className="ms-auto breadcrumb_"
                    >
                        <StyleBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<FaHome fontSize="small" />}
                        />
                        <StyleBreadcrumb
                            label="Products"
                            component="a"
                            href="#"
                        />
                        <StyleBreadcrumb label="Product View" />
                    </Breadcrumbs>
                </div>
                <div className="card productDetailsSEction">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
                                <h6 className="mb-4">Product Gallery</h6>
                                <Slider
                                    {...productSliderOptions}
                                    className="sliderBig mb-2"
                                >
                                    <div className="item">
                                        <img
                                            src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                </Slider>

                                <Slider
                                    {...productSliderSmallOptions}
                                    className="sliderSml"
                                >
                                    <div className="item">
                                        <img
                                            src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className=" pt-3 pb-3 ps-4 pe-4">
                                <h6 className="mb-4">Product Details</h6>
                                <h4>
                                    Formal suits for men wedding slim fit 3
                                    piece dress business party jacket
                                </h4>

                                <div className="productInfo mt-4">
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <MdBrandingWatermark />
                                            </span>
                                            <span className="name">Brand</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>Ecstasy</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <BiSolidCategoryAlt />
                                            </span>
                                            <span className="name">
                                                Category
                                            </span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>Man's</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <FaTag/>
                                            </span>
                                            <span className="name">Tag</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>
                                                <div className="row">
                                                    <ul className="list list-inline tags sml">
                                                        <li className="list-inline-item">
                                                            <span>SUITE</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>PARTY</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>DRESS</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <IoIosColorPalette />
                                            </span>
                                            <span className="name">Color</span>
                                        </div>
                                        <div class="col-sm-9">
                                            <span>
                                                <div class="row">
                                                    <ul class="list list-inline tags sml">
                                                        <li class="list-inline-item">
                                                            <span>RED</span>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <span>BLUE</span>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <span>WHITE</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <AiFillDollarCircle />
                                            </span>
                                            <span className="name">Price</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>$50</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <MdOutlineStorage />
                                            </span>
                                            <span className="name">Stock</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>(68) Piece</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <MdRateReview />
                                            </span>
                                            <span className="name">Review</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>(13) Review</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon">
                                                <MdOutlinePublishedWithChanges />
                                            </span>
                                            <span className="name">
                                                Published
                                            </span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>02 Feb 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
