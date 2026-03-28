import { Box, Button, Chip, Typography } from "@mui/material";
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
import Tree from "../../assets/tree.png";
import Olives from "../../assets/olives.png";
import Logo from "../../assets/logo.png";
import Drop from "../../assets/svg/drop.svg";

const icons = [Oil, Scroll, ListIco, Food, Nutritionist, Detailed]
const iconsСhoose = [Time, Quality, Book, Info]
const iconsIphone = [PlayMarket, Scanner, Pay, Rate]


function Home(){
    
    const {t} = useTranslation("home");
    const features = t('features', { returnObjects: true });
    const choose = t('chooseInfo', { returnObjects: true });
    const useInfo = t('useInfo', { returnObjects: true });
    
    const widths = 4;

    return(
        <>
            <Box 
                sx={{
                    backgroundColor: "#000",
                    height: {
                        lg: "830px",
                        md: "508.5px",
                        xs: "508px"
                    },
                    padding: {
                        lg: "0 15px",
                        md: "0 11.425px",
                        xs: "0 7.87px"
                    }
                }}
            >   
                <Box 
                    sx={{
                        display: "flex",
                        width: "100%",
                        gap:{
                            lg: "10px",
                            md: "5px",
                            xs: 0
                        }
                    }}>
                    {[496, 572, 572, 496].map((h, index) => (
                    <Box
                        key={index}
                        sx={{
                        width: "100%",
                        height: {
                            lg: `${h}px`,
                            md: `${(h+155)/2}px`,
                            xs: "155px"
                        },
                        borderRadius: {
                            lg: "0 0 100px 100px",
                            md: "0 0 100px 100px",
                            xs: index == 0 ? "0 0 0 15px" : (index == 3 ? "0 0 15px 0" : 0) 
                        },

                        backgroundImage: `url(${Tree})`,
                        backgroundSize: `${widths * 100}% auto`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: `${(index * 100) / (widths - 1)}% 0`,
                        }}
                    />
                    ))}
                </Box>

                <Box sx={{
                    padding: {
                        lg: "0 37px 30px 62px",
                        xs: "20px 23px 24.03px 24px"
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    bottom: {lg: "360px", md: "260px", xs: "160px"},
                }}>
                    <Box>
                        {/*"Block Blur Cosmetic oils"*/}
                        <Box>
                            <Box sx={{
                                display: {
                                    md: "flex",
                                    xs: "none"
                                },
                                width:{
                                    lg: "335.2px",
                                    md: "235.2px",
                                },
                                height:{
                                    lg: "134px",
                                    md: "84px"
                                },
                                backdropFilter: "blur(54.2px)", 
                                borderRadius: {
                                    lg: "32px",
                                    md: "24px",
                                    xs: "16px"
                                },
                                position: "absolute",
                                right: "100px",
                                bottom: "auto",
                                top: {
                                    lg: "-150px",
                                    md: "-80px"
                                },
                                flexDirection: "column",
                                color: "#fff",
                                padding: {
                                    lg: "29.15px 74.2px 29.15px 62px",
                                    md: "13.15px 25.2px 13.15px 25px"
                                },
                                boxSizing: "border-box",
                                justifyContent: "space-between",
                                border: "2px solid #FFFFFF33"
                            }}>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "18px",
                                            md: "15px"
                                        },
                                        letterSpacing:"2%",
                                        fontWeight:"550"
                                    }}
                                >
                                    {t("cosmeticOils.title")}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "13px",
                                            md: "10px"
                                        }
                                    }}>
                                    {t("cosmeticOils.description")}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/*"Block Blur Edible Oils"*/}
                            <Box sx={{
                                position: "relative", 
                                bottom: {
                                    lg: "70px",
                                    md: "100px",
                                    xs: "10px"
                                },
                                zIndex: 2,
                                width:{
                                    lg: "171.41px",
                                    md: "115.83px",
                                    xs: "60.26px"
                                },
                                height:{
                                    lg: "369.8px",
                                    md: "261.9px",
                                    xs: "154px"
                                },
                                backdropFilter: "blur(54.2px)", 
                                borderRadius: {
                                    lg: "32px",
                                    md: "24px",
                                    xs: "16px"
                                },
                                padding:{
                                    lg: "40.4px 40.41px 93.4px 35px",
                                    md: "28px 25px 60px 20px",
                                    xs: "20px 5.26px 23px 5px"
                                },
                                justifyContent: "center",
                                textAlign: "center",
                                display: "flex",
                                flexWrap: "wrap",
                                boxSizing: "border-box",    
                                color: "white",
                                gap: {
                                    lg: "20px",
                                    md: "15px",
                                    xs: "10px"
                                },
                                border: "2px solid #FFFFFF33"
                            }}>
                                <Box 
                                    component={"img"}
                                    src={Drop}
                                    sx={{
                                        width:{
                                            lg: "12px",
                                            md: "9px",
                                            xs: "6px"
                                        },
                                        height:{
                                            lg: "14.49px",
                                            md: "10.86px",
                                            xs: "7.24px"
                                        },
                                        background: "#fff",
                                        padding: {
                                            lg: "7.18px 9px",
                                            md: "6px 8px",
                                            xs: "5.09px 6.5px"
                                        },
                                        borderRadius: "38px"
                                    }}
    
                                />
                                <Typography 
                                    sx={{
                                        fontSize: {
                                            lg: "18px",
                                            md: "14.5px",
                                            xs: "9px"
                                        },
                                        textTransform: "uppercase"
                                    }}
                                >
                                    {t("edibleOils.title")}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize:{
                                            lg: "14px",
                                            md: "11px",
                                            xs: "5px"
                                        },
                                        fontWeight: 300,
                                        letterSpacing:  "4%"
                                    }}    
                                >
                                    {t("edibleOils.description")}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        justifyContent: "space-between",
                        position: {md: "relative", xs: "static"},
                        bottom: {lg: "150px", md: "180px"},
                        display: {
                            md: "flex",
                            xs: "block"
                        },
                    }}>
  
                        {/*Block A new Level*/}
                        <Box   
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end",
                                width: {
                                    lg: "356px",
                                    md: "275px",
                                    xs: "177px"
                                },
                                gap: {
                                    lg: "10px",
                                    md: "7.5",
                                    xs: "5px"
                                },
                                color: "#fff"
                            }}
                        >   
                            <Box sx={{
                                textTransform: "uppercase",
                                display: "flex",
                                flexDirection: "column",
                                gap: {
                                    lg: "20px",
                                    md: "15px",
                                    xs: "10px"
                                }
                            }}>
                                {/*"Small Text"*/}

                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "12px",
                                            md: "10px",
                                            xs: "8px"
                                        }
                                    }}
                                >
                                    {t("naturcompos.small")}
                                </Typography>

                                {/*"Title Text"*/}
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "32.65px",
                                            md: "24,325px",
                                            xs: "16px"
                                        },
                                        lineHeight: "120%",
                                        letterSpacing: "-0.03em",
                                        fontWeight: 300,
                                        
                                    }}
                                >
                                    {t("naturcompos.title")}
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: {
                                    md: "flex",
                                    xs: "block"
                                },
                                gap:{
                                    md: "25px",
                                    xs: "10px"
                                }
                            }}>
                                {/*"Description Text"*/}
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: {
                                        lg: "18px",
                                        md: "13px",
                                        xs: "8px"
                                    },
                                    color: "#FFFFFF",
                                    lineHeight: "18px",
                                    textAlign: "justify"
                                }}>
                                    {t("naturcompos.description")}
                                </Typography>
                                {/*"Button"*/}
                                <Chip 
                                    label={t("naturcompos.button")} 
                                    sx={{
                                        width: {
                                            lg: "169px",
                                            xs: "177px"
                                        },
                                        height:{
                                            lg: "54px",
                                            md: "43px",  
                                            xs: "32px"
                                        },
                                        fontSize: {
                                            lg: "12px",
                                            md: "10px",
                                            sx: "8px"
                                        },
                                        mixBlendMode: 'difference',
                                        border: "2px solid #FFFFFF80",
                                        color: '#fff',
                                        background: "#73843D4D",
                                        borderRadius: '50px',
                                    }} 
                                />
                            </Box>
                        </Box>
                        {/*"Wite Block"*/}
                        <Box sx={{
                            mt: "12.3px",
                            width: {lg: "750px", md: "550px",xs: "100%"},
                            height: {lg: "344px", md: "250px",xs: "157px"},
                            borderRadius: {lg: "60px", md:"40px", xs: "20px"},
                            backgroundColor: "#fff",
                            position: "relative",
                            overflow: "visible", 
                            
                        }}>
                            {/*"Foto Olives"*/}
                            <Box 
                                component="img"
                                src={Olives}
                                sx={{
                                    rotate: "12deg",
                                    width: "60%",
                                    height: "100%",
                                    objectFit: "contain", 
                                    borderRadius: "inherit",
                                    position: "absolute",
                                    top: "-26%",
                                    left: "38%",
                                    zIndex: 1,
                                }}
                            />
                            {/*"Content"*/}
                            <Box sx={{
                                position: "relative",
                                zIndex: 2,
                                height: "75%", 
                                
                                padding: {
                                    lg: "59.7px 31.2px 29.65px 50px",
                                    md: "40px 25px 20px 35px",
                                    xs: "11.47px 14.27px 13.57px 20px"
                                },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}>
                                <Typography sx={{
                                    width: {lg: "450px", md:"350px", xs:"200px"},
                                    fontSize: {lg: "39.1px", md: "30.1px", xs: "19px"},
                                    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", 
                                    letterSpacing: "-2%",
                                    lineHeight: "120%",
                                    fontWeight: 300,

                                }}>
                                    {t("scanAndLearn.title")}
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px"
                                    }}>
                                        <Typography sx={{
                                            width:{
                                            lg: "268px",
                                            md: "190.5px",
                                            xs: "113px"  
                                            },
                                            fontSize: {
                                                lg: "14px",
                                                md: "10.5px",
                                                xs: "8px"
                                            },
                                            color: "#848484",
                                            lineHeight: "100%",
                                            textAlign: "justify"
                                        }}>
                                            {t("scanAndLearn.discription")}
                                        </Typography>
                                        <Typography sx={{
                                            textDecoration: "underline",
                                            color:"#73843D",
                                            letterSpacing: "-2%",
                                            lineHeight: "120%",
                                            textTransform: "Uppercase",
                                            textUnderlineOffset: "2px",
                                            fontSize:{
                                                lg: "14px",
                                                md: "11px",
                                                xs: "8px"
                                            }
                                        }} 
                                        >
                                            {t("scanAndLearn.learnMore")}
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        background: "#000000",
                                        color: "#fff",
                                        width:{
                                            lg: "375.46px",
                                            md: "273.58px",
                                            xs: "171.71px"
                                        },
                                        height:{
                                            lg: "102.04px",
                                            md: "74.35px",
                                            xs: "46.67px"
                                        },
                                        borderRadius: "51.02px",
                                        alignItems: "center",
                                        gap:{
                                            lg: "35px",
                                            md: "22.5px",
                                            xs: "10px"
                                        }
                                    }}>
                                        <Box 
                                            component={"img"}
                                            src={Logo}
                                            sx={{
                                                width:{
                                                    lg: '53px',
                                                    md: '44px',
                                                    xs: '35px'
                                                },
                                                height:{
                                                    lg: '53px',
                                                    md: '44px',
                                                    xs: '35px'
                                                },
                                                background: "#FFFFFF",
                                                borderRadius: "35.66px",
                                                padding: {
                                                    lg: "9.67px",
                                                    md: "5.67px",
                                                },
                                                ml:{
                                                    lg: "20px",
                                                    md: "15px",
                                                    xs: "10px"
                                                }
                                            }}
                                        />
                                        <Box sx={{
                                            textTransform: "uppercase",
                                            letterSpacing: "-2%",
                                            lineHeight: "120%",
                                            fontWeight: 700
                                        }}>
                                            <Typography sx={{
                                                fontSize: {
                                                    lg: "14px",
                                                    md: "11px",
                                                    xs: "8px"
                                                },
                                            }}>
                                                {t("scanAndLearn.try")}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: {
                                                    lg: "14px",
                                                    md: "11px",
                                                    xs: "8px"
                                                },
                                            }}>
                                                {t("scanAndLearn.download")}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>
            </Box>
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
                        lg: "0px 97ppx 40px",
                        md: "0px 61px 40px",
                        xs: "0px 25px 40px"
                    },   
                }}
            >
                <OilText></OilText>
            </Box>
        </>
    )
}
export default Home;