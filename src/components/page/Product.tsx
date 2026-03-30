import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import сardsData from "../Data/CardData"
import { useParams } from "react-router";
import Botl from "../../assets/studBotl.png"

function Product(){
    const { id } = useParams<{ id: string }>();
    const {t} = useTranslation("product")
    const product = сardsData.find(item => item.id.toString() === id);

    return(
        <>
            <Box>
                <Box>
                    {/* Block head */}
                    <Box sx={{ 
                        display: "flex", 
                        justifyContent: { md: "center", xs: "left" }, 
                        position: "relative",
                        overflow: {
                            md: "hidden",
                            xs: "visible"
                        },
                        backgroundColor: "#fff",
                    }}>    
                        <Box sx={{position: "relative",
                            zIndex: 4, 
                            padding: {
                                lg: "86px 60px 134px",
                                md: "53px 42px 74px",
                                xs: "20px 15px 15px"
                            },
                            display: "flex",
                            flexDirection: "column",
                            gap: {
                                lg: "20px",
                                md: "15px",
                                xs: "10px"
                            }
                        }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: {
                                        lg: "5px",
                                        md: "3.5px",
                                        xs: "2px"
                                    },
                                    height:{
                                        lg: "38px",
                                        md: "33px",
                                        xs: "28px",
                                    },
                                    '& .MuiButton-root': {
                                        borderRadius: "32px",
                                        textTransform: "none",
                                        alignItems: "center",
                                        fontSize: {
                                            md: "14px",
                                            xs: "12px"
                                        },
                                        padding: {
                                            xs: "5px 10px"
                                        }

                                    },
                                    '& .MuiButton-contained': {
                                        backgroundColor: '#73843D',
                                        boxShadow: 'none',
                                        },

                                    '& .MuiButton-outlined': {
                                        borderColor: '#000',
                                        color: '#000',
                                    },
                                    
                                }}
                            >
                                <Button sx={{widht: {lg: "133px", md: "122px", xs: "111px"}}} variant="contained">{t("AllAbout")}</Button>
                                <Button sx={{widht: {lg: "116px", md: "97px", xs: "78px"}}} variant="outlined">{t("Sommelier")}</Button>
                                <Button sx={{widht: {lg: "106px", md: "105.5px", xs: "95px"}}} variant="outlined">{t("AboutOil")}</Button>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize:{
                                            lg: "115px",
                                            md: "80px",
                                            sm: "32px",
                                            xs: "24px"
                                        },
                                        flexGrow: 1,
                                        mb: "12px",
                                        letterSpacing: "0%",
                                        lineHeight: "100%",
                                        textAlign: {
                                            md: "center",
                                            xs: "start"
                                        },
                                        width: {
                                            md: "100%",
                                            sm: "300px",
                                            xs: "192px"
                                        },
                                        textTransform: "uppercase",
                                        color: "#000",
                                        mixBlendMode: "difference",
                                    }}  
                                >
                                    Extra Virgin Olive Oil
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "24px",
                                            md: "18px",
                                            sm: "15px",
                                            xs: "12px"
                                        },
                                        textAlign: {
                                            md: "end",
                                            xs: "start"
                                        }
                                    }}
                                >
                                    Olive Dew
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                                display: "flex",
                                zIndex: 3,
                                overflowX: "clip",
                                position: "absolute", 
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: "100%", 
                                justifyContent: "center",
                                '& img': {
                                    position: "absolute",
                                    height: "100%",
                                    width: "auto",
                                    textAlign: "center",
                                    objectFit: "contain",
                                    bottom: {
                                        md: 0,
                                        xs: "-39px"
                                    },
                                }
                            }}>
                                <Box 
                                    component="img" 
                                    src={product?.src || Botl} 
                                    sx={{
                                        transform: {lg: "translateX(-40%)", md: "translateX(-30%)"},
                                        display: { md: "flex", xs: "none" },
                                    }}
                                />
                                <Box 
                                    component="img" 
                                    src={product?.src || Botl} 
                                    sx={{
                                        transform: {lg: "translateX(40%)", md: "translateX(30%)", xs: "translateX(98%) scale(1.5)"},
                                    }} 
                                />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    height:{
                        background: "#000",
                        lg: "448px",
                        md: "397.25px",
                        xs: "346.5px"
                    }
                }}>

                </Box>
            </Box>
        </>
    )
}
export default Product