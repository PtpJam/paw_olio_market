import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProductBtn from "../Buttons/ProductBtn";
//import cardInfoData from "../Data/CardInfoData";
import Botl from "../../assets/studBotl.png"
import type IProduct from "../interface/IProduct";
import { imgPath } from "../api/Path";

function Sommelier(dataProduct : IProduct){
    const {t} = useTranslation("product")
    
    return(
        <Box sx={{width:"100%"}}>
            <Box sx={{
                padding: {
                    lg: "86px 62px",
                    md: "53px 38px",
                    xs: "20px 14px",
                },
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <ProductBtn active={1}/>
                <Typography
                    sx={{
                        textTransform: "uppercase",
                        fontSize: {
                            lg: "115px",
                            md: "69.5px",
                            xs: "24px"
                        },
                        lineHeight: {
                            md: "100%",
                            xs: "23px"
                        }
                    }}
                >
                    {t("Sommelier")}
                </Typography>
            </Box>
            <Box sx={{
                padding: {
                    lg: "65px 60px",
                    md: "42.5px 40px",
                    xs: "20px"
                },
                bgcolor: "#000"
            }}>
                <Grid container spacing={"20px"} >
                    <Grid size={{lg: 9, xs: 9}}>
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "85px",
                                    md: "54.5px",
                                    xs: "20px"
                                },
                                mb: {
                                    lg: "15px",
                                    md: "17.5px",
                                    xs: "20px"
                                },
                                color: "#A1ABFF",
                                textTransform: "uppercase"
                            }}
                        >
                            {dataProduct.name}
                        </Typography>
                        <Grid container sx={{color: "#fff"}} columnSpacing={"52px"} rowSpacing={"20px"}>
                            {/* {cardInfoData.sommiler.map((item, index) => ( */}
                                <Grid size={{md: 12, xs: 12}}>
                                    <Typography sx={{
                                        fontSize:{
                                            lg: "20px",
                                            md: "16px",
                                            xs: "12px"
                                        },
                                        textAlign: "justify"
                                    }}>
                                        {dataProduct.sommelierAdvices}
                                    </Typography>
                                </Grid>
                            {/* ))} */}
                        </Grid>
                    </Grid>
                    <Grid size={{lg: 3, xs: 3}}>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: {  lg: "178px", md: "97.5px", xs: "17px"}}}></Box>
            <Box          
                sx={{
                    position: "absolute",
                    height: {
                        lg: "90vh",
                        md: "50vh",
                        sm: "39.5vh",
                        xs: "27vh"
                    },
                    width: {
                        lg: "30vw",
                        sm: "30vw",
                        xs: "25vw"
                    },
                    background: `url(${dataProduct.image ? imgPath+dataProduct.image : Botl}) center/cover`,
                    backgroundSize:'cover cover',
                    backgroundRepeat: "no-repeat",
                    overflow: 'visible',   
                    zIndex: 10,  
                    top: {lg: "300px", md: "150px", sm: "90px", xs: "100px"},
                    right: 0,
                }}
            >
            </Box>
        </Box>
    )
}
export default Sommelier