import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type ISliderProductBlockNoImg from "../interface/ISliderProductBlockNoImg";
import SliderProduct from "./SliderProduct";

function SliderProductBlockNoImg(data: ISliderProductBlockNoImg){
    const {t} = useTranslation("product")
    
    return(
        <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: {lg: "76px", md: "43px", xs: "10px"},
                justifyContent: "space-between"
            }}>
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
                        md: "15px",
                        xs: "12px"
                    },
                    color: '#8E8E8E'
                }}>
                    {t("Reviews", {reviews: data.countFeedback})}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "7px"
            }}>
                {data.param.map((item, index)=>(
                    <SliderProduct key={index} {...item}/>
                ))}
            </Box>
        </Box>
    )
} 
export default SliderProductBlockNoImg