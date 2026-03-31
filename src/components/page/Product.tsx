import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import cardsData from "../Data/CardData"
import { useParams } from "react-router";
import Botl from "../../assets/studBotl.png"
import ProductBtn from "../ProductBtn";
import ScrollBar from "../Scroll"
import cards from "../Data/CardDataDeScroll"
import cardInfoData from "../Data/CardInfoData"
import { Map, Marker } from "pigeon-maps"
import ButtonNextBeak from "../ButtonNextBeak";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ReactCountryFlag from "react-country-flag";

function Product(){
    const { id } = useParams<{ id: string }>();
    const {t} = useTranslation("product")
    const product = cardsData.find(item => item.id.toString() === id);

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
                                    {cardInfoData.info.companyName}
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
                    background: "#000",

                    height:{
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
                {/* block info company */}
                <Box sx={{
                    background: "#000",
                    color: "#fff",
                    padding:{
                        lg: "30px 62px",
                        md: "30px 43px",
                        xs: "30px 25px"
                    },
                    display: {
                        lg: "flex",
                        md: "block"
                    },
                    gap:{
                        lg: "88px",
                        md: "44px"
                    }
                }}>
                    <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1.2,
                            gap: {lg: "74px", md: "47px", xs: "20px"},
                        }}>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Typography 
                                    sx={{
                                        color:"#A4C245",
                                        fontSize: {
                                            lg: "100px",
                                            md: "62px",
                                            xs: "24px"
                                        },
                                        lineHeight: "100%"
                                        
                                    }}
                                    >
                                        {cardInfoData.info.companyName}
                                    </Typography>
                                <Typography sx={{
                                    textAlign: "end",
                                    fontSize: {
                                        lg: "20px",
                                        md: "18px",
                                        xs: "12px"
                                    }
                                }}>
                                    {t("Manufacturer")}
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <ButtonNextBeak nextBack={true} team={false}/>
                            </Box>
                        </Box>
                        <Box>
                            <Typography 
                                sx={{
                                    fontSize: {
                                        lg: "20px",
                                        md: "18px",
                                        xs: "12px"
                                    },
                                    display: "flex",
                                     wordBreak: "break-word",
                                    whiteSpace: "pre-line"
                                }}
                            >
                                {cardInfoData.info.description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box flex={1.5} sx={{display: "flex", flexDirection: "column", gap: "20px", mt: {md: "20px", xs: "20px"}}}>
                        <Box 
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: {lg: "20px", md:"15px", xs: "10px"},
                                flexWrap: "wrap",
                                justifyContent: {lg: "end", md: "start"}
                            }}>
                            <Box 
                                sx={{
                                    display: "flex",
                                    background: "#A1ABFF4D",
                                    borderRadius: "49px",
                                    width: "fit-content",
                                    minWidth: {
                                        lg: "166px",
                                        md: "134.5px",
                                        xs: "103px"
                                    },
                                    height:{
                                        lg: "53px",
                                        md: "41.5px",
                                        xs: "30px"
                                    },
                                    padding:{
                                        lg: "11.91px 12.8px",
                                        md: "9.035px 11.66px",
                                        xs: "6.16px 10.53px"  
                                    },
                                    boxSizing: "border-box",
                                    alignItems: "center",
                                    gap: {
                                        lg: "11.19px",
                                        md: "10.95px",
                                        xs: "10.72px"
                                    }
                                }}>
                                <Box 
                                    component={ReactCountryFlag}
                                    countryCode={cardInfoData.info.codeCountry}
                                    svg
                                    sx={{
                                        width: {
                                            lg: "30px !important",
                                            md: "25px !important",
                                            xs: "20px !important",
                                        },
                                        height: {
                                            lg: "30px !important",
                                            md: "25px !important",
                                            xs: "20px !important",
                                        },
                                        borderRadius: "50%",
                                        objectFit: 'cover',
                                        flexShrink: 0, 
                                    }}   
                                />
                                <Typography sx={{
                                    fontSize: {
                                        lg: "15px",
                                        md: "13.5px",
                                        xs: "12px"
                                    }
                                }}>
                                    {cardInfoData.info.nameCountry}
                                </Typography>
                            </Box>
                            <Box sx={{display: "inline-flex", gap:"10px", whiteSpace: "nowrap"}}>
                                <Typography>{t("OverallRating")}</Typography>
                                <Box 
                                    sx={{
                                        width: {
                                            lg: "86px",
                                            md: "79px",
                                            xs: "72px"
                                        },
                                        height:{
                                            lg: "36px",
                                            md: "32px",
                                            xs: "28px"
                                        },
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "22px",
                                        background: "#A1ABFF33",
                                        fontSize: {
                                            lg: "20px",
                                            md: "16px",
                                            xs: "12px"
                                        },
                                        gap: "5px",
                                        alignItem: "center"
                                    }}
                                >
                                    {cardInfoData.info.starCount} 
                                    <StarRoundedIcon fontSize="inherit"
                                        sx={{
                                            fill:"#FFB800",
                                            width: "19px",
                                            height: "18px"    
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Typography
                                sx={{
                                    color: "#A1ABFF",
                                    fontSize: {
                                        lg: "20px",
                                        md: "16px",
                                        xs: "12px"
                                    }
                                }}
                            >
                                {t("AllRatings")} {cardInfoData.info.countRating}
                            </Typography>
                        </Box>
                        <Box>
                            <Box 
                                component={"img"}
                                src={cardInfoData.info.src}
                                sx={{
                                    borderRadius: "20px",
                                    width: "100%"
                                }}
                            />
                        </Box>
                    </Box>

                </Box>
                {/*Map*/}
                <Box 
                    sx={{
                        height: {
                            lg: "475px",
                            md: "301.5px",
                            xs: "128px"
                        },

                        '& > div': { 
                            height: '100% !important' 
                        },  
                    }}>
                    <Map 
                        
                        defaultCenter={[cardInfoData.map.x, cardInfoData.map.y]}
                        defaultZoom={10}
                        mouseEvents={false}
                        touchEvents={false}
                        metaWheelZoom={false}
                    >
                        <Marker  width={40} anchor={[cardInfoData.map.x, cardInfoData.map.y]} />
                    </Map>
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