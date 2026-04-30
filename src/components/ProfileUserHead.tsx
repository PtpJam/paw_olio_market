import { Box, Typography } from "@mui/material"
import type IProfileUserHead from "./interface/IProfileUserHead"
import geo from "../assets/svg/geo.svg"
import InstalApp from "./Carts/InstalApp"
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from "react-i18next"
import WeChat from "../assets/svg/socialMedia/WeChat.svg";
import Facebook from "../assets/svg/socialMedia/Facebook.svg";
import Instagram from "../assets/svg/socialMedia/Instagram.svg";
import X from "../assets/svg/socialMedia/X.svg";
import Snapchat from "../assets/svg/socialMedia/Snapchat.svg";

const socialMedia : string[] = [WeChat, Facebook, Instagram, X, Snapchat]

const numStyle = {
    fontSize: {lg: "24px", md: "18px", xs: "12px"}
}
const textStyle = {
    fontSize: {lg: "20px", md: "16px", xs: "12px"}
}
function ProfileUserHead(data : IProfileUserHead){
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
                                left: {lg: 0, md: 0, xs: "75px"},
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
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Typography
                                sx={{
                                    fontSize: {lg: "64px", md: "44px", xs:"24px"}
                                }}
                            >
                                {data.name}
                            </Typography>
                            <Box 
                                component={"img"} 
                                src={data.award}
                                sx={{
                                    width: {lg: "72.29px", md: "70px", xs: "40px"},
                                }}
                            />
                        </Box>
                        <Box sx={{
                            mt: "10px",
                            display: "flex",
                            justifyContent: {md: "normal", xs: "center"},

                            gap: "5px"
                        }}>
                            <Box
                                component={"img"}
                                src={geo}
                                sx={{
                                    width: {lg: "12px", xs: "10px"}
                                }}
                            />
                            <Typography sx={{
                                color: "#A1ABFF"
                            }}>
                                {data.country}
                            </Typography>
                        </Box>
                        <Box 
                            sx={{
                                display: "flex",
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
                <Box sx={{
                    width: {lg: "500px", md: "470px"},
                    height: {md: "370px", xs: "100%"},
                    padding: {lg: 0, xs: "30px 10px"},
                    display: {lg: "block", md: "none", xs: "block"}
                }}>
                    <InstalApp></InstalApp>
                </Box>
            </Box>
        </Box>
    )
}
export default ProfileUserHead