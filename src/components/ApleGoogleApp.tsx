import Box from "@mui/material/Box"
import ApleStore from "../assets/svg/appStore.svg"
import GooglePlay from "../assets/svg/googlePlay.svg"
import ApleStoreText from "../assets/svg/appStoreText.svg"
import GooglePlayText from "../assets/svg/googlePlayText.svg"
import { useTranslation } from "react-i18next"
import { Typography } from "@mui/material"

interface Props{
    Isfooter?: boolean 
}

function ApleGoogleApp({Isfooter} : Props){
    const { t: tFooter } = useTranslation("footer"); 
    
    return(
        <Box sx={{                  
            display:"flex",
            gap: {lg: "40px", md:"25px", xs:"10px"},
        }}>
            <Box 
                component={"a"}
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.vivoolio.platform&hl=uk"
                sx={{
                    textDecoration: "none",
                    color: "#fff",
                    border: "1px solid #FFFFFF4D",
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
                }}
            >
                <Box
                    component={"img"}
                    src={GooglePlay}
                    sx={{height:{md: "27px", xs: Isfooter ? "21px" : '27px'}}}
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
                    <Box component={"img"} src={GooglePlayText}
                        sx={{height: {md: "19px", xs: Isfooter ? "15px" : "19px"}}}
                    />
                </Box>
            </Box>
                <Box
                    component={"a"}
                    target="_blank"
                    href="https://apps.apple.com/ua/app/vivoolio/id6667120224?l=uk"
                    sx={{
                        textDecoration: "none",
                        color: "#fff",
                        border: "1px solid #FFFFFF4D",
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
                    }}
                >
                <Box
                    component={"img"}
                    src={ApleStore}
                    sx={{height:{md: "29px", xs: Isfooter ? "21px" : '29px'}}}
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
                    <Box component={"img"} src={ApleStoreText}
                        sx={{height: {md: "17px", xs: Isfooter ? "14px" : "17px"}}}/>
                </Box>
            </Box>
        </Box>
    )

}
export default ApleGoogleApp