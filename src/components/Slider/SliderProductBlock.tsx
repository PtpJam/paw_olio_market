import { Box, Typography } from "@mui/material";
import type ISliderProductBlock from "../interface/ISliderProductBlock";
import { useTranslation } from "react-i18next";
import SliderPlusFoto from "./SliderPlusFoto";

function SliderProductBlock(data: ISliderProductBlock){
    const {t} = useTranslation("product")
    
    return(
        <Box sx={{display: "flex", flexDirection: "column", gap: {lg: "20px", md: "15px", xs: "10px"}}}>
            <Box>
                <Typography sx={{
                    fontSize: {
                        lg: "40px",
                        md: "32px",
                        xs: "24px"
                    }
                }}>
                    {data.title}
                </Typography>
                <Typography sx={{
                    fontSize:{
                        lg: "18px",
                        md: "13px",
                        xs: "8px"
                    },
                    color: '#8E8E8E'
                }}>
                    {t("Feedback", {users: data.countFeedback})}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: {lg: "20px", md: "15px", xs: "10px"}
            }}>
                {data.param.map((item, index)=>(
                    <SliderPlusFoto key={index} {...item}/>
                ))}
            </Box>
            <Typography sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "4px",
                    fontSize: {
                        lg: "16px",
                        md: "12px",
                        xs: "8px"
                    }
                }}>
                {t("Show")} 
                <Typography component="span" sx={{ 
                        textTransform: "lowercase",
                        fontSize: {
                           lg: "16px",
                            md: "12px",
                            xs: "8px"
                        }
                }}>
                    {data.title}
                </Typography>
            </Typography>
        </Box>
    )
} 
export default SliderProductBlock