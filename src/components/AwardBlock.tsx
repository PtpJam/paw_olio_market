import { Box, Stack, Typography } from "@mui/material"
import type IAward from "./interface/IAward"
import infoGreen from "../assets/svg/infoGreen.svg"
import { useTranslation } from "react-i18next"

interface Props {
    data: IAward,
    award: "award" | "certificate"
}

function AwardBlock({data, award} : Props){
    const {t} = useTranslation("awardBlock")

    return(
        <Stack spacing={"22px"}
            sx={{ 
                width: {
                    lg: "216px",
                    md: "168.5px",
                    xs: "121px"
                }
            }}
        >
            <Box sx={{
                borderRadius: "100px",
                bgcolor: award == "award" ? "#fff" : "#000",
                width: "121px",
                height: "121px",
            }}>
                <Box
                    component={"img"}
                    src={data.src}
                    sx={{
                        width: "121px",
                        height: "121px",
                        boxSizing: "border-box",
                        objectFit: "contain",
                        objectPosition: "center",
                        p: award == "award" ? "22.73px 13.21px" : "0",
                    }}
                />
            </Box>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}    
            >
                <Typography
                    sx={{
                        fontSize: {lg: '20px', md: "16px", xs: "12px"},
                        color: "#fff",
                    }}
                >
                    {data.text}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                        mt: "10px", 
                    }}
                >
                    <Box
                        component="img"
                        src={infoGreen}
                        sx={{
                            display: "inline-block",
                            verticalAlign: "middle",
                            width: "20px",
                            height: "20px",
                        }}
                    />
                    <Typography
                        sx={{
                            color: "#FFFFFF80",
                            fontSize: {lg: "12px", md: "10px", xs: "8px"}
                        }}
                    >
                        {t("Information")}
                    </Typography>
                </Box>
            </Box>
        </Stack>
    )
}
export default AwardBlock