import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import AboutUs from '../../assets/oilAboutUs.jpg';

import Oil from '../../assets/functionImg/oil.svg';
import Scroll from '../../assets/functionImg/scroll.svg';
import ListIco from '../../assets/functionImg/list.svg';
import Food from '../../assets/functionImg/food.svg';
import Nutritionist from '../../assets/functionImg/nutritionist.svg';
import Detailed from '../../assets/functionImg/detailed.svg';

import Time from '../../assets/choose/time.svg';
import Quality from '../../assets/choose/quality.svg';
import Book from '../../assets/choose/book.svg';
import Info from '../../assets/choose/info.svg';

import Pay from '../../assets/iphonIcon/pay.svg';
import Scanner from '../../assets/iphonIcon/scanner.svg';
import PlayMarket from '../../assets/iphonIcon/playMarket.svg';
import Rate from '../../assets/iphonIcon/rate.svg';
import ScrollBar from '../Scroll';

import itemsMegaCard from "../Data/MegaCardData"
import itemsNews from "../Data/NewsData"
import cards from "../Data/CardData"
import OilText from "../OilText";

const icons = [Oil, Scroll, ListIco, Food, Nutritionist, Detailed]
const iconsСhoose = [Time, Quality, Book, Info]
const iconsIphone = [PlayMarket, Scanner, Pay, Rate]


function Home(){
    
    const {t} = useTranslation("home");
    const features = t('features', { returnObjects: true });
    const choose = t('chooseInfo', { returnObjects: true });
    const useInfo = t('useInfo', { returnObjects: true });
    

    return(
        <>
            <Box sx={{
                margin: {
                    lg: "60px 0",
                    md: "60px 0",
                    xs: "20px 0"
                },
                display: "flex",
                alignItems: "center",
                padding: {
                    lg: "0 29px 0 67px",
                    md: "0 29px 0 67px",
                    xs: "0 29px 0 27px"
                },
                flexDirection: {
                    lg: "row",
                    md: "row",
                    xs: "column"
                },
                gap: {
                    lg: "65px",
                    md: "65px",
                    xs: "20px"
                }
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}>
                    <Typography sx={{
                        fontSize:{
                            lg: "40px",
                            md: "40px",
                            xs: "32px"
                        }
                    }}>
                        {t('AboutUs.title')}
                    </Typography>
                    <Typography sx={{
                        fontSize:{
                            lg: "30px",
                            md: "21px",
                            xs: "12px"
                        },
                        textAlign: "justify",
                        letterSpacing: "0.02em",
                    }}>
                        {t('AboutUs.text')}
                    </Typography>
                    <Box sx={{display: "flex", justifyContent:"flex-end"}}>
                        <Button 
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                textWrap: "nowrap",
                                padding: "10px 25px",
                                backgroundColor:"#000000",
                                borderRadius: "82px",
                                width: "179px",
                                height: "39px",
                            }}
                        >
                            {t('AboutUs.btnMore')}
                        </Button>
                    </Box>
                </Box>
                <Box 
                    component={"img"}
                    sx={{
                        border: "2px solid #0000001A",
                        maxWidth: {
                            lg: "526px",
                            md: "429px",
                            xs: "100%",
                        }, 
                        minHeight: {
                            lg: "486px",
                            md: "389px",
                            xs: "292px",
                        }, 
                        width: "100%",
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: '20% center',
                        alignItems: "center",
                        borderRadius: {
                            lg: "60px",
                            md: "40px",
                            xs: "20px"
                        }
                    }}
                    src={AboutUs}
                />
            </Box>
            <Box sx={
                {
                    p: 0,
                    width: "100%",
                    backgroundColor:"#000000",
                    height:{
                        lg: "129px",
                        md: "104px",
                        xs: "79px"
                    },
                    fontSize:{
                        lg: "40px",
                        md: "36px",
                        xs: "32px"    
                    },
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }>
                {t('functions')}
            </Box>
            <Box 
                sx={{
                    margin: {
                        lg: "25px 65px",
                        md: "25px 42.5px",
                        xs: "25px 20px"   
                    },
                    display: "grid",
                    gridTemplateColumns: {
                        lg: "repeat(3, 1fr)", 
                        md: "repeat(3, 1fr)", 
                        xs: "repeat(2, 1fr)"
                    },
                    justifyContent: {
                        lg: "space-between",
                        xs: "space-around"
                    },
                    justifyItems: "center", 
                    columnGap:"40px",
                    rowGap: "20px"

                }}
 >
                {Array.isArray(features) && features.map((item, index) => (
                        <Box key={index} sx={{
                            minWidthWidth:{
                                lg: "363px",
                                md: "265.5px",
                                sm: "207.75px",
                                xs: "150px"
                            },
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: {
                                md: "left",
                                sm: "center",
                                xs: "center"
                            },
                            rowGap: {
                                lg: "24px",
                                md: "16px",
                                sm: "14px",
                                xs: "12px" 
                            },
                        }}>
                            <Box sx={{
                              display: "flex",  
                              justifyContent: "center",
                            }}>
                                <Box 
                                    component={"img"}
                                    src={icons[index]}
                                    sx={{
                                        width:{
                                            lr: "196px",
                                            md: "142.5px",
                                            sm: "142.75px",
                                            xs: "80.75px"
                                        },
                                        height:{
                                            lr: "155px",
                                            md: "112.5px",
                                            sm: "155px",
                                            xs: "65px"
                                        },

                                    }}
                                />
                            </Box>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: {
                                    lg: "24px",
                                    md: '22px',
                                    sm: "20px",
                                    xs: "12px",
                                },
                                letterSpacing: 0,
                            }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                                fontWeight: 500,
                                fontSize: {
                                    lg: "24px",
                                    sm: "20px",
                                    xs: "12px",
                                },
                                letterSpacing: 0,
                                lineHeight: "100%",
                            }}>
                                {item.description}
                            </Typography>
                        </Box>
                    )
                  )
                }
            </Box>
            <Box
                sx={
                    {
                        backgroundColor:"#000000",
                        padding: {
                            lg: "80px 65px ",
                            xs: "20px 30px"
                        },
                        borderRadius:"32px",
                        display: "flex",
                        flexDirection: "column",
                        gap:{
                            lg: "60px",
                            md: "50px",
                            xs: "40px"
                        }
                    }
                }
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center", 
                    }}
                >
                    <Typography
                        sx={{
                            color: "#fff",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            textAlign: "center",
                            fontSize: {
                                lg: "40px",
                                md: "36px",
                                xs: "32px"
                            },
                            width:{
                                lg: "100%",
                                md: "100%",
                                xs: "201px"
                            },
                            lineHeight: {
                                lg: "1.4",
                                xs: "1.5"
                            },
                        }}    
                    >
                        {t('choose')}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        lg: "repeat(4, 1fr)", 
                        md: "repeat(4, 1fr)", 
                        xs: "repeat(2, 1fr)"
                    },
                    gap:{
                        lg: "56.84px",
                    },
                    columnGap:{
                        xs: "7px"
                    },
                    rowGap:{
                        xs: "20px"
                    }
                }}>
                     {Array.isArray(choose) && choose.map((item, index) => (
                        <Box key={index + "choose"}
                            sx={{
                                display: "flex",
                                gap: {
                                    lg: "20px",
                                    md: "15px",
                                    sm: "12.5px",
                                    xs: "10px"
                                },
                                alignItems: "start",
                            }}
                            >
                            <Box 
                                component={"img"}
                                src={iconsСhoose[index]}
                                sx={{
                                    width: {
                                        lg: "67px",
                                        md: "57px",
                                        sm: "47px",
                                        xs: "37px"
                                    },
                                }}
                            />
                            <Box 
                                sx={{
                                    color:"#fff",

                                }}>
                                <Typography 
                                    sx={{
                                        textTransform: "uppercase",
                                        fontWeight: 400,
                                        fontSize:{
                                            lg: "21px",
                                            md: "16.5px",
                                            sm: "21px",
                                            xs: "11px"
                                        },
                                        padding:{
                                            xs: "0 1px"
                                        },
                                        letterSpacing: "-5%"
                                        
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 300,
                                        fontSize:{
                                            lg: "15px",
                                            md: "12.5px",
                                            sm: "15px",
                                            xs: "8px"
                                        },
                                        letterSpacing: "-2%",
                                        
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                     ))}
                </Box>
            </Box>
            <Box 
                sx={{
                    padding:{
                        lg: "40px 49px",
                        md: "30px 39.25px",
                        xs: "20px 29.5px"
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            lg: "100px",
                            md: "62px",
                            sm: "43px",
                            xs: "24px"
                        },
                        textAlign: "center",
                        textTransform: "uppercase"
                    }}
                >
                    {t("use")}
                </Typography>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        lg: "repeat(4, 1fr)", 
                        md: "repeat(4, 1fr)", 
                        xs: "repeat(2, 1fr)"
                    },
                    rowGap: "10px"
                }}>
                    {Array.isArray(useInfo) && useInfo.map((item, index) => (
                        <Box 
                            key={index+"use"}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "30px"
                            }}
                        >
                            <Box 
                                component={"img"}
                                src={iconsIphone[index]}
                                sx={{
                                    width:{
                                        lg: "256px",
                                        md: "201.5px",
                                        sm: "250.5px",
                                        xs: "147px"
                                    }
                                }}    
                            />
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    letterSpacing: "-6%",
                                    fontSize: {
                                        lg: "24px",
                                        md: "18px",
                                        sm: "24px",
                                        xs: "12px"
                                    },
                                    textAlign: "center",
                                    width:{
                                        lg: "240px"
                                    }
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box>
                <Box
                    sx={{
                        backgroundColor: "#000000",
                        padding: {
                            lg: "62px 32px 62px 102px",
                            md: "50px 26px 50px 60px",
                            xs: "41px 20px"
                        }
                    }}
                >

                    <ScrollBar scroll={{ team: false, title: t('news'), type:"news", items: itemsNews}}></ScrollBar>    
                </Box>

                <Box></Box>
            </Box>
            <Box 
                sx={{
                    padding: {
                        lg: "40px 25px 40px 98px",
                        md: "40px 25px 40px 60px",
                        xs: "40px 25px"
                    },   
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "40px"
                }} 
            >
                <Box>
                    <ScrollBar scroll={{ team: true, title: t('cosmetics'), type:"cosmetics", items: itemsMegaCard}}></ScrollBar>
                </Box>
                <Box>
                    <ScrollBar scroll={{ team: true, title: t('populProd'), type:"product", items: cards}}></ScrollBar>
                </Box>
            </Box>
            <Box 
                 sx={{
                    padding: {
                        lg: "40px 97ppx",
                        md: "40px 61px",
                        xs: "40px 25px"
                    },   
                }}
            >
                <OilText></OilText>
            </Box>
        </>
    )
}
export default Home;