import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import сardsData from "../Data/CardData"
import { useParams } from "react-router";
import Botl from "../../assets/studBotl.png"
import ProductBtn from "../ProductBtn";
import ScrollBar from "../Scroll"
import cards from "../Data/CardDataDeScroll"
import cardInfoData from "../Data/CardInfoData"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

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
                            <ProductBtn active={0}></ProductBtn>
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
                                    {cardInfoData.name}
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
                                    src={cardInfoData?.src || Botl} 
                                    sx={{
                                        transform: {lg: "translateX(-40%)", md: "translateX(-30%)"},
                                        display: { md: "flex", xs: "none" },
                                    }}
                                />
                                <Box 
                                    component="img" 
                                    src={cardInfoData?.src || Botl} 
                                    sx={{
                                        transform: {lg: "translateX(40%)", md: "translateX(30%)", xs: "translateX(98%) scale(1.5)"},
                                    }} 
                                />
                        </Box>
                    </Box>
                </Box>
                {/*block info*/}
                <Box sx={{
                    height:{
                        background: "#000",
                        lg: "448px",
                        md: "397.25px",
                        xs: "346.5px"
                    }
                }}>

                </Box>
                {/*block For you*/}
                <Box sx={{
                    background: "#000",
                    padding: {
                        lg: "62.5px 67px",
                        md: "40px 30px",  
                        xs: "20px 12.5px 20.5px"
                    }
                }}>
                    <ScrollBar scroll={{team: false, title: t("ForYou"), type: "product", items: cards }}></ScrollBar>
                </Box>
                {/**/}
                {/*Map*/}
                <Box>

                </Box>
                {/*block For you*/}
                <Box sx={{
                    padding: {
                        lg: "20.5px 67px 62.5px 67px",
                        md: "20px 40px 65px",  
                        xs: "20px 12.5px 71.9px"
                    }
                }}>
                    <ScrollBar scroll={{team: true, title: t("ForYou"), type: "product", items: cards }}></ScrollBar>
                </Box>
            </Box>
        </>
    )
}
export default Product