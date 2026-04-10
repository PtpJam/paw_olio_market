import { Box, Rating, Typography } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Comentary from "../../assets/svg/cometary.svg"
import Planet from "../../assets/svg/planet.svg"
import Cart from "../../assets/svg/shopping-cart.svg"
import Hert from "../../assets/svg/hert.svg"
import Balance from "../../assets/svg/balans.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ReactCountryFlag from "react-country-flag"
import CircleBtn from "../Buttons/CircleBtn";
import type IProductCard from "../interface/IProductCard";
import { imgPath } from "../api/path";

function Card(_card : IProductCard){
    // flex: "1 1 320px",
    const {t} = useTranslation("card");
    
    return(
        <>  
 
            <Box sx={{
                    background: "#fff",
                    position: "relative",
                    border: "1px solid #00000033",
                    width:{
                        lg: "374px",
                        md: _card.scroll ? "302px" : "272.5px",
                        xs: _card.scroll ? "230px" : "171px"
                    },
                    height: {
                        lg: "366px",
                        md: "309px",
                        xs: "252px"    
                    },
                    borderRadius: {
                        lg: "35px",
                        md: _card.scroll ? "30px" : "25px",
                        xs: _card.scroll ? "25px" : "15px"
                    },
                    display: "flex", 
                    justifyContent: "space-between",
                    flexDirection: "column",
                }}>

                <Box
                    component={Link}
                    to={`/product/${_card._id}`}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1, 
                        '&:hover': {
                            backgroundColor: "rgba(0,0,0,0.5)" 
                        }
                    }}
                />
                <Box 
                    sx={{
                        padding:{
                            lg: "15px 20.62px 5px 22.5px",
                            md: "13px 15px 3px 15px",
                            xs: "12px 10px 0px 10px"
                        },
                        height: {
                            lg: "36%",
                            md: "37%",
                            xs: "40%"
                        }
                    }}
                >
                    <Box sx={{display: "flex", justifyContent: "space-between", height: "100%" }}>
                        <Box 
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: {
                                    lg: "70%",
                                    md: "70%",
                                    xs: _card.scroll ? "70%" : "100%",
                                },
                                gap: _card.scroll ? "10px" : "3px"
                            }}
                        >
                            <Typography 
                            sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                fontSize:{
                                    lg: "18px",
                                    md: "15px",
                                    xs: "12px"
                                }
                            }}
                            >
                                {_card.name}
                            </Typography>
                            <Box>
                                <Box 
                                    sx={{
                                        display: {
                                            lg: "flex",
                                            md: "flex",
                                            xs: _card.scroll ? "flex" : "none"
                                        },
                                        maxHeight: "15px",
                                        alignItems: "center",
                                        gap:"15.04px" 
                                    }}
                                >
                                    <Rating
                                        name="text-feedback"
                                        value={_card.star}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={
                                            <StarRoundedIcon 
                                                style={{ opacity: 0.55 }}
                                                fontSize="inherit"
                                                sx={{
                                                    width: "14.88px",
                                                    maxHeight: "14.34px"
                                                }}
                                            />
                                        }
                                        icon={
                                            <StarRoundedIcon 
                                                fontSize="inherit"
                                                sx={{
                                                    width: "14.88px",
                                                    maxHeight: "14.34px"
                                                }} 
                                            />
                                        }
                                    />
                                    <Box sx={{display: "flex", gap:"2px"}}>
                                        <Box 
                                            sx={{
                                                maxHeight: "22px"
                                            }}>
                                            <Box 
                                                component={"img"}
                                                src={Comentary}
                                                sx={{
                                                    width:"14.63px",
                                                    height:"13.5px"
                                                }}    
                                            />
                                        </Box>
                                        <Typography 
                                            sx={{
                                                color: "#14141280",
                                                fontSize: {
                                                    lg: "15px",
                                                    md: "13.5px",
                                                    xs: "12px"
                                                }
                                            }}
                                        >
                                            {_card.comentary}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{display:"flex", justifyContent: "space-between", mt: "5px"}}>
                                    <Box>
                                        <Box sx={{display: "flex",alignItems:"center", gap:"5px"}}>
                                            {_card.country ? 
                                            <>
                                                <Box 
                                                    component={ReactCountryFlag}
                                                    countryCode={_card.codeCountry || "UA"}
                                                    svg 
                                                    width="12px" height="12px"
                                                    sx={{
                                                        borderRadius: "100px",
                                                        objectFit: 'cover'
                                                    }}    
                                                />
                                                <Typography 
                                                    sx={{
                                                        fontSize: {
                                                            lg: "12px",
                                                            md: "10px",
                                                            xs: "8px"
                                                        },
                                                        
                                                    }}
                                                >
                                                    {_card.country + ", " + _card.region}
                                                </Typography>
                                            </> : 
                                            <>
                                                <Box component={"img"} src={Planet} width="12px" height="12px" />
                                                <Typography 
                                                    sx={{
                                                        fontSize: {
                                                            lg: "12px",
                                                            md: "10px",
                                                            xs: "8px"
                                                        }
                                                    }}
                                                >
                                                    {t("allWorld")}
                                                </Typography>    
                                            </>
                                            }
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: {
                                                    lg: "24px",
                                                    md: "20px",
                                                    xs: "16px"
                                                },
                                                pt: !_card.scroll ? "2px" : 0
                                            }}
                                        >
                                            {_card.averagePrice} {t("currency")}
                                        </Typography>
                                    </Box>
                                    <Box 
                                        sx={{
                                            display: {
                                                lg: "none",
                                                md: "none",
                                                xs: _card.scroll ? "none" : "flex" 
                                            },
                                            alignItems:"center",
                                        }}
                                    >
                                        <Box 
                                            sx={{
                                                display: {
                                                    lg: "none",
                                                    md: "none",
                                                    xs: _card.scroll ? "none" : "flex" 
                                                },
                                                alignItems:"center",
                                                justifyContent:"center",
                                                backgroundColor:"#141412",
                                                borderRadius:"24px",
                                                width:{
                                                    lg: "48px",
                                                    md: "43px",
                                                    xs: "30px"
                                                },
                                                height:{
                                                    lg: "48px",
                                                    md: "43px",
                                                    xs: "30px"
                                                },
                                                zIndex: 2
                                            }}
                                            >
                                            <Box component={"img"} src={Cart} width={"15px"}/>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box 
                            sx={{
                                display: {
                                    lg: "flex",
                                    md: "flex",
                                    xs: _card.scroll ? "flex" : "none" 
                                },
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"#141412",
                                borderRadius:"24px",
                                width:{
                                    lg: "48px",
                                    md: "43px",
                                    xs: "38px"
                                },
                                height:{
                                    lg: "48px",
                                    md: "43px",
                                    xs: "38px"
                                },  
                                zIndex: 2
                            }}
                            >
                            <Box component={"img"} src={Cart} />
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", justifyContent:"space-between"}}>
                        <Typography 
                            sx={{
                                color:"#4B551E",
                                fontSize: {
                                    lg: "10px",
                                    md: "9px",
                                    xs: "8px"
                                }
                            }}
                        >
                            {_card.isPublished ? t("valid") : t("unvalid") }
                        </Typography>
                        {/* <Typography 
                            sx={{
                                color:"#141412",
                                fontSize: {
                                    lg: "10px",
                                    md: "9px",
                                    xs: "8px"
                                }
                            }}
                        >
                            {t("code")}: {_card.code}
                        </Typography> */}
                    </Box>
                </Box>

                <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        border: "1px solid #00000033",
                        borderRadius: {
                            lg: "30px",
                            md: _card.scroll ? "25px" : "22.5px",
                            xs: _card.scroll ? "20px" : "15px"
                        },
                        maxHeight:{
                            lg: "160px",
                            md: "130px",
                            xs: "98px"
                        },
                        height: "100%",
                        padding:{
                            lg: "14px 14.44px 14px 13.82px",
                            md: "11px 15px 11px 11px",
                            xs: "8.03px 16.22px 7.52px 7.65px"
                        },
                        margin: {
                            lg: "7.5px 6.56px 8px 7.5px",
                            md: "6.8px 6.2px 6.5px 6.8px",
                            xs: "6px 6px 5px 6px"
                        },
                        background: `url(${imgPath + _card.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '35%',
                        
                    }}>
                    <Box 
                        sx={{
                            display: "flex",
                            flexDirection:"column",
                            gap: "5px"
                        }}
                    >
                        <CircleBtn src={Balance} backg={"#14141280"}></CircleBtn>
                        <CircleBtn src={Hert} backg={"#14141280"}></CircleBtn>
                    </Box>
                    {/*
                    <Typography 
                        sx={{
                            display: "flex",
                            justifyContent:"end",
                            flexWrap:"nowrap",
                            whiteSpace: "nowrap",
                            color:"#14141280",
                            fontSize: {
                                lg: "10px",
                                md: "9px",
                                xs: "8px"
                            }
                        }}
                        >
                            id: {_card.id}
                    </Typography>
                    */}
                </Box>
            </Box>
        </>
    )
}
export default Card;