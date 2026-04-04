import { Box, Typography } from "@mui/material"
import bgInstallApp from "../../assets/bgInstalApp.png"
import phoneBg from "../../assets/phoneBg.png"
import { useTranslation } from "react-i18next"
import ApleGoogleApp from "../ApleGoogleApp"

function InstalApp(){
    const {t} = useTranslation("appReclam")
    
    return(
        <Box sx={{
            height: "100%",
            width: "100%",

            backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url('${phoneBg}'),
                url('${bgInstallApp}')
            `,
            backgroundPosition: "center, 40% 35%, top left",
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundSize: "cover, 100vh, 500%",
            borderRadius: "20px", 
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column"
        }}>
            <Box 
                sx={{
                    padding: {
                        lg: "17px 44px 0 45px",
                        md: "20px 35px",
                        xs: "25px 15px 25px 15px",
                    },
                    color: "#fff",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    "& p, & span": {
                        textShadow: "3px 3px 4px rgba(0, 0, 0, 0.6)",
                        fontSize: "40px"
                    }
                }}>
                <Typography sx={{textTransform: "uppercase"}}>
                    {t("Try")}
                </Typography> 
                <Typography>
                     Vivo<Typography component={"span"} sx={{color: "#C2FF00"}}>Olio</Typography> 
                </Typography>
                <Typography sx={{textTransform: "uppercase"}}>
                    {t("today")}!
                </Typography>    
            </Box>
            <Box sx={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                padding: {
                    lg: "17px 50px 17px 45px",
                    md: "20px 35px",
                    xs: "25px 15px 25px 15px",
                },
                borderRadius: "0 0 20px 20px",
            }}>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "5px",
                    "& p": {
                        fontSize: "22px",
                        fontWeight: 700,
                        display: "inline",
                        margin: 0 
                    },
                    mb: "10px"
                }}>
                    <Typography>{t("Download")}</Typography>
                    <Typography sx={{color: "#C2FF00"}}>{t("Green")}</Typography>
                    <Typography>{t("Oil")}</Typography>
                </Box>
                <Box>
                    <ApleGoogleApp/>
                </Box>
            </Box>

        </Box>
    )
}
export default InstalApp