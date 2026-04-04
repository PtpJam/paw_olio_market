import Box from "@mui/material/Box"
import ApleStore from "../assets/svg/appStore.svg"
import GooglePlay from "../assets/svg/googlePlay.svg"
import ApleStoreText from "../assets/svg/appStoreText.svg"
import GooglePlayText from "../assets/svg/googlePlayText.svg"
import { useTranslation } from "react-i18next"
import { Typography } from "@mui/material"

function ApleGoogleApp(){
    const { t: tFooter } = useTranslation("footer"); 
    
    return(
        <Box sx={{                  
            display:"flex",
            gap: {lg: "40px", md:"25px", xs:"10px"},
        }}>
            <Box sx={{
                background: "#A1ABFF4D",
                display: "flex",
                borderRadius: "50px",
                width: {
                    lg: "173px",
                    md: "150.5px",
                    xs: "100%"
                },
                height: {
                    lg: "50px",
                    md: "49.5px",
                    xs: "39px"
                },
                justifyContent: "center",
                alignItems: "center",
                padding: {
                    xs: "1px 10px"
                },
                gap: {
                    lg: "11.33px",
                    md: "10.65px",
                    xs: "10px"
                }
            }}>
                <Box
                    component={"img"}
                    src={GooglePlay}
                    sx={{height:"27px"}}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <Typography
                        sx={{
                            fontSize: "7px",
                            fontWeight: 700,
                            lineHeight: "100%"
                        }}
                    >
                        {tFooter("Download")}
                    </Typography>
                    <Box component={"img"} src={GooglePlayText} height={"17px"}/>
                </Box>
            </Box>
            <Box sx={{
                background: "#A1ABFF4D",
                display: "flex",
                borderRadius: "50px",
                width: {
                    lg: "173px",
                    md: "150.5px",
                    xs: "100%"
                },
                height: {
                    lg: "50px",
                    md: "49.5px",
                    xs: "39px"
                },
                justifyContent: "center",
                alignItems: "center",
                padding: {
                    xs: "1px 10px"
                },
                gap: {
                    lg: "11.33px",
                    md: "10.65px",
                    xs: "10px"
                }
            }}>
                <Box
                    component={"img"}
                    src={ApleStore}
                    sx={{height: "29px"}}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <Typography
                        sx={{
                            fontSize: "7px",
                            fontWeight: 700,
                            lineHeight: "100%"
                        }}
                    >
                        {tFooter("Download")}
                    </Typography>
                    <Box component={"img"} src={ApleStoreText} height="17px"/>
                </Box>
            </Box>
        </Box>
    )

}
export default ApleGoogleApp