import { Box, Typography } from "@mui/material"
import type IProfileUserHead from "./interface/IProfileUserHead"
import geo from "../assets/svg/geo.svg"
import InstalApp from "./Carts/InstalApp"

function ProfileUserHead(data : IProfileUserHead){
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
                    height: {lg: "331px", md: "379.5px", xs: "428px"},
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: {lg: "normal", md: "normal", xs: "center"}, 
                    flexDirection: {lg: "row", md: "row", xs: "column"},
                }}
            >
                <Box sx={{display: "flex", columnGap: "42px"}}>
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
                    </Box>
                </Box>
                <Box sx={{
                    width: {lg: "400px", md: "370px"},
                    height: "370px",
                    display: {md: "block", xs: "none"}
                }}>
                    <InstalApp></InstalApp>
                </Box>
            </Box>
        </Box>
    )
}
export default ProfileUserHead