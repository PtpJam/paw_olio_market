import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProductBtn from "../Buttons/ProductBtn";
import cardInfoData from "../Data/CardInfoData";

function Sommelier(){
    const {t} = useTranslation("product")
    
    return(
        <Box>
            <Box sx={{
                padding: {
                    lg: "86px 62px",
                    md: "53px 38px",
                    xs: "20px 14px",
                },
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <ProductBtn active={1}/>
                <Typography
                    sx={{
                        textTransform: "uppercase",
                        fontSize: {
                            lg: "115px",
                            md: "69.5px",
                            xs: "24px"
                        },
                        lineHeight: {
                            md: "100%",
                            xs: "23px"
                        }
                    }}
                >
                    {t("Sommelier")}
                </Typography>
            </Box>
            <Box sx={{
                padding: {
                    lg: "65px 60px",
                    md: "42.5px 40px",
                    xs: "20px"
                },
                bgcolor: "#000"
            }}>
                <Grid container>
                    <Grid size={{lg: 9, xs: 11}}>
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "85px",
                                    md: "54.5px",
                                    xs: "20px"
                                },
                                color: "#A1ABFF",
                                textTransform: "uppercase"
                            }}
                        >
                            {cardInfoData.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: {  lg: "178px", md: "97.5px", xs: "17px"}}}></Box>
        </Box>
    )
}
export default Sommelier