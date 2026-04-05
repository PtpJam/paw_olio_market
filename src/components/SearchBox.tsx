import Box from "@mui/material/Box";
import Search from "../assets/svg/search.svg"
import { useTranslation } from "react-i18next";

function SearchBox(){
    const {t} = useTranslation("header")
    
    return(
        <Box 
            component={"label"}
            sx={{
                display: "flex",
                position: "relative"
            }}
        >
            
            <Box
                sx={{
                    position: "absolute",
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: {
                        lg: "16px",
                        md: "13px",
                        xs: "13px"
                    },
                    width: {
                        lg: "18px",
                        md: "15px",
                        xs: "12px"
                    },
                    height: {
                        lg: "19px",
                        md: "15.5px",
                        xs: "12px"
                    }
                }}
                component={"img"}
                src={Search}
            />
            
            <Box 
                component={"input"}
                type="text"
                placeholder={t("search")}
                sx={{
                    pl: {
                        lg: "44px",
                        md: "38px",
                        xs: "32px",
                    },
                    pr: "20px",
                    fontSize: {
                        lg: "16px",
                        md: "12px",
                        xs: "12px"
                    },
                    background: "none",
                    border: "2px solid #fff",
                    borderRadius: "50px",
                    width: "100%",
                    color: "#fff",
                    height: {
                        lg: "48px",
                        md: "41px",
                        xs: "34px"
                    },
                    "&::placeholder": {
                        color: "#FFFFFFB2",
                        display: "flex",
                        alignItems: "center",
                        fontSize: {
                            lg: "16px",
                            md: "12px",
                            xs: "12px"
                        }
                    },
                }}
            />
        </Box>
    )
}
export default SearchBox