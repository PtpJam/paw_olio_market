import { Box, Typography } from "@mui/material"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from "react-i18next"
import WeChat from "../assets/svg/socialMedia/WeChat.svg";
import Facebook from "../assets/svg/socialMedia/Facebook.svg";
import Instagram from "../assets/svg/socialMedia/Instagram.svg";
import X from "../assets/svg/socialMedia/X.svg";
import Snapchat from "../assets/svg/socialMedia/Snapchat.svg";
import type IManufacturerProfile from "./interface/IManufacturerProfile"
import { Map, Marker } from "pigeon-maps"

const socialMedia : string[] = [WeChat, Facebook, Instagram, X, Snapchat]

const numStyle = {
    fontSize: {lg: "24px", md: "18px", xs: "12px"}
}
const textStyle = {
    fontSize: {lg: "20px", md: "16px", xs: "12px"}
}
function ManufacturerProfileHead(data : IManufacturerProfile){
    const {t} = useTranslation("acountHead");
    
    return(
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Box  
                component={"img"}
                src={data.headImg}
                sx={{
                    width: "100%",
                    height: {lg: "280px", md: "223px", xs: "166px"},
                    objectFit: "cover",
                    objectPosition: 'center',
                }}
            />
            
            <Box
                sx={{
                    padding: {lg: "35px 69px", md: "37.5px 49.5px", xs: "40px 30px"},
                    background: "#000",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: {lg: "normal", md: "normal", xs: "center"}, 
                    flexDirection: {lg: "row", md: "row", xs: "column"},
                    gap: "30px"
                }}
            >
                <Box sx={{display: "flex", columnGap: {lg: "42px", md: "42px", xs: 0}}}>
                    <Box sx={{  position: "relative"}}>
                        <Box 
                            component={"img"}
                            src={data.avatar}
                            sx={{
                                position: {lg: "relative", md: "relative", xs: "absolute"},
                                top: {lg: "-60px", md: "-55px", xs: "-100px"},
                                right: 0,
                                left: {lg: 0, md: 0, xs: "105px"},
                                width: {lg: "185px", md: "152.5px", xs: "80px"},
                                height: {lg: "185px", md: "152.5px", xs: "80px"},
                                objectFit: "cover",
                                objectPosition: 'center',
                                border: "5px solid #A1ABFF",
                                borderRadius: "100%"
                            }}
                        />
                    </Box>
                    <Box sx={{mt: {lg: 0, md: 0, xs: "10px"}}}>
                        <Box sx={{display: "flex", justifyContent: {md: "normal", xs: "center"}}}>
                            <Typography
                                sx={{
                                    fontSize: {lg: "64px", md: "44px", xs:"24px"}
                                }}
                            >
                                {data.name}
                            </Typography>
                        </Box>
                        {/* {rait} */}
                        <Box sx={{
                            mt: "10px",
                            display: "flex",
                            justifyContent: {md: "normal", xs: "center"},

                            gap: "20px"
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
                                        countryCode={data.countryCode}
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
                                        {data.country} {data.region}
                                    </Typography>
                            </Box>
                            <Box sx={{display: "inline-flex", gap:"10px", whiteSpace: "nowrap", alignItems: "center"}}>
                                    <Typography sx={{display: "flex", alignItems: "center"}}>
                                        {t("OverallRating")}
                                    </Typography>
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
                                        {data.star} 
                                        <StarRoundedIcon fontSize="inherit"
                                            sx={{
                                                fill:"#FFB800",
                                                width: "19px",
                                                height: "18px"    
                                            }}
                                        />
                                    </Box>
                            </Box>
                        </Box>
                        {/*  folows*/}
                        <Box 
                            sx={{
                                display: "flex",
                                justifyContent: {md: "normal", xs: "center"},
                                gap: "30px",
                                mt: {lg: "12px", md: "12.75px", xs:"13.5px"}
                            }}>
                            <Box sx={{ textAlign: {md: "start", xs: "center"}}}>
                                <Typography sx={numStyle}>
                                    {data.followers}
                                </Typography>
                                <Typography sx={textStyle}>
                                    {t("Followers")}
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: {md: "start", xs: "center"}}}>
                                <Typography sx={numStyle}>{data.following}</Typography>
                                <Typography sx={textStyle}>
                                    {t("Following")}
                                </Typography>
                            </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: {md: "normal", xs: "center"}}}>
                                <Box sx={{ display: "flex", gap: "10px"}}>
                                    <Typography sx={numStyle}>{data.rankIn}</Typography>
                                    <Box 
                                        component={ReactCountryFlag}
                                        countryCode={data.countryCode || "UA"} svg                                         
                                        sx={{
                                            width: {lg: "23.44px !important", md: "22.22px !important", xs: "21px !important"},
                                            height: {lg: "23.44px !important", md: "22.22px !important", xs: "21px !important"},
                                            borderRadius: "100px",
                                            objectFit: 'cover'
                                        }}    
                                    />
                                </Box>
                                <Typography sx={textStyle}>
                                    {t("RankIn")} {data.countryCode}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: {md: "normal", xs: "center"},
                                gap: {lg: "44px", md: "37.5px", xs: "31px"}
                            }}
                        >
                            {
                                socialMedia.map((item, index) => (
                                    <Box 
                                        key={index}
                                        component={"img"}
                                        src={item}
                                        sx={{
                                            mt: "30px",
                                            filter: 'invert(100%) brightness(200%)',
                                            width: {lg: "28px", md: "23px", xs: "18px"}
                                        }}
                                    />
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
                <Box 
                    sx={{
                        height: {
                            lg: "261px",
                            md: "230.5px",
                            xs: "128px"
                        },
                        width: {lg: "545px", md: "408px", xs: "271px"},
                        '& > div': { 
                            borderRadius: "20px",
                            height: '100% !important' 
                        },  
                    }}>
                    <Map 
                        
                        defaultCenter={[data.map.x, data.map.y]}
                        defaultZoom={10}
                        mouseEvents={false}
                        touchEvents={false}
                        metaWheelZoom={false}
                    >
                        <Marker  width={40} anchor={[data.map.x, data.map.y]} />
                    </Map>
                </Box>
            </Box>
        </Box>
    )
}
export default ManufacturerProfileHead