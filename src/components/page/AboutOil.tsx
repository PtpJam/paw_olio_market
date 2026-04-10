import { Box, Divider, Grid, Typography } from "@mui/material";
import Botl from "../../assets/studBotl.png"
import ProductBtn from "../Buttons/ProductBtn";
import { useTranslation } from "react-i18next";
import cardInfoData from "../Data/CardInfoData";
import aboutOilData from "../Data/AboutOilData";
import type IAboutOil from "../interface/IAboutOil";
import aboutOilDownData from "../Data/AboutOilDownData";
import infoGreen from "../../assets/svg/infoGreen.svg";
import Rait from "../../assets/rait.png";

interface OilInfoBlockProps {
    data: IAboutOil[];
}

const OilInfoBlock = ({data} : OilInfoBlockProps) => {
    return(
        <Grid
            container 
            columnSpacing={"40px"}
            rowSpacing={"20px"}
        >
            {data.map((item, index) => (
                <Grid
                    size={{lg: 3, xs: 6}}
                    key={index}
                    sx={{display: "flex", flexDirection: "column", rowGap: "15px"}}
                >
                    <Box sx={{
                        display: "flex",
                    }}>
                        <Typography
                            sx={{
                                fontSize: { lg: '18px', md: "15px", xs: "12px" },
                                color: !item.description ? "#A4C245" : "#fff",
                                lineHeight: "1.2", 
                            }}
                        >
                            {item.title}
                            {item.info && (
                                <Box
                                    component="img"
                                    src={infoGreen}
                                    sx={{
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                        ml: "8px",
                                        width: { lg: "23.33px", md: "17.665px", xs: "12px" },
                                        height: { lg: "23.33px", md: "17.665px", xs: "12px" },
                                        mt: "-2px"
                                    }}
                                />
                            )}
                        </Typography>

                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: {
                            lg: "20px",
                            md: "6.5px",
                            xs: "5px"
                        }
                    }}>
                        {item.description?.map((desc, index) => (
                            <Box 
                                key={index}
                                sx={{
                                    display: "flex",
                                    gap: "4px",
                                }}
                            >
                                <Typography sx={{
                                    fontSize: {lg: "18px", md: "12px", xs: "8px"},
                                    color: "#FFFFFF99"
                                }}>
                                    {desc.title}
                                </Typography>
                                {
                                    desc.description &&
                                    <Typography sx={{
                                        fontSize: {lg: "18px", md: "12px", xs: "8px"},
                                        color: "#A4C245"
                                    }}>
                                        {desc.description}
                                    </Typography>
                                }
                            </Box>
                        ))}
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

function AboutOil(){
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
                <ProductBtn active={2}/>
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
                    {t("AboutOil")}
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
                    <Grid size={{lg: 10, xs: 10}}>
                        <Grid 
                            container
                            sx={{color: "#fff", display: "flex", flexDirection: "column"}}
                            columnSpacing={"52px"}
                            rowSpacing={"20px"}
                        >
                            <OilInfoBlock data={aboutOilData} />
                            <Divider sx={{ my: 2, borderColor: "#FFFFFF73" }} />
                            <OilInfoBlock data={aboutOilDownData} />
                        </Grid>
                    </Grid>


                </Grid>
            </Box>
            <Grid 
                container
                sx={{
                    padding: {lg:"39px 62px 52px", xs:"20px 20px 14px"}
                }}
            >
                <Grid size={{md: 6, xs: 12}} sx={{display: "flex", flexDirection: "column", gap:{lg: "24px", md: "17px", xs: "10px"}}}>  
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "48px",
                                md: "35px",
                                xs: "24px"
                            }
                        }}
                    >
                        {t("AddInfo")}
                    </Typography>
                    <Typography 
                        sx={{
                            fontSize: {
                                lg: "18px",
                                md: "15px",
                                xs: "12px"
                            },
                            textAlign: "justify"
                        }}
                    >
                        {cardInfoData.addInfo}
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{
                padding: {
                    lg: "0 0 54.87px 62px",
                    md: "0 0 34.99px 40.5px",
                    xs: "0 0 15.11px 19px"
                },
                position: "relative",
                display: "flex"
            }}>
                <Box 
                    component={"img"}
                    src={Rait}
                    sx={{
                        position: "relative",
                        width: {
                            lg: "536.66px",
                            md: "361.83px",
                            xs: "187.01px"
                        },
                        height: {
                            lg: "430.13px",
                            md: "290px",
                            xs: "149.89px"
                        },
                        zIndex: 1
                    }}
                />
                <Box
                    sx={{
                        
                        width: "100%",
                        borderRadius: "300px 0 0 300px",
                        marginLeft: {
                            md: "0",
                            xs: "-55px"
                        },
                        height:{
                            lg: "291px",
                            md: "195.5px",
                            xs: "100px"
                        },
                        padding: {
                            lg: "81.5px 50px 81.5px 96px",
                            md: "50.75px 55.5px",
                            xs: "20px 15px"
                        },
                        color: "#fff",
                        background: "#000",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: {lg:"5px", xs: 0},
                    }}
                >
                    <Typography sx={{
                        display: "flex",
                        alignItems: "start",
                        fontWeight: 400,
                        fontSize: {lg: "128px", md: "94px", xs: "60px"}
                    }}>
                        “
                    </Typography>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            fontSize: { lg: "40px", md: "31px", xs: "14px" },
                            fontWeight: 550,
                            lineHeight: 1.5,
                        }}
                    >
                        {t("Rait")}
                        <Box
                            component={"span"}
                            sx={{
                                ml: { lg: "30px", md: "10px", xs: "3px" },
                                position: "relative",
                                top: {lg: "30px", md: "22px", xs: "12px"},
                                display: "inline-block",
                                verticalAlign: "middle",
                                alignItems: "end",
                                lineHeight: 0,
                                fontWeight: 400,
                                fontSize: {lg: "128px", md: "94px", xs: "60px"}
                            }}
                        >
                            “
                        </Box>
                    </Typography>

                </Box>
            </Box>
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
                    background: `url(${cardInfoData?.src || Botl}) center/cover`,
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
export default AboutOil