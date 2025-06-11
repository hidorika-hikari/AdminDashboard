import Button from "@mui/material/Button";
import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import { FaHome } from "react-icons/fa";

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
        '&:hover, &:focus' : {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        }
    }
})

const ProductDetails = () => {

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Product View</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumb_">
                        <StyleBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<FaHome fontSize="small"/>}
                        />
                        <StyleBreadcrumb
                            label="Products"
                            component="a"
                            href="#"
                        />
                        <StyleBreadcrumb
                            label="Product View"
                        />
                    </Breadcrumbs>
                </div>
            </div>

            <div className="card">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
