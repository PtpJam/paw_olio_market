import { Box, Typography } from "@mui/material";
import type ISliderPlusPhoto from "../interface/ISliderPlusFoto";
import SliderProduct from "./SliderProduct";
import { useTranslation } from "react-i18next";
import InfoOutlineIcon from '../InfoOutlineIcon';

function SliderPlusFoto(data : ISliderPlusPhoto){
    const {t} = useTranslation("product")

    return(
        <Box sx={{display: "flex", gap: {lg: "9px", md: "15.45px", xs: "21.9px"}}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "6px"}}>
                <Box sx={{position: 'relative'}}>
                    <InfoOutlineIcon 
                        src={data.src}
                        sx={{
                            position: "absolute",
                            top: "-9px",
                            right: "-9px",
                            width: {
                                lg: "19px",
                                md: "15.2px",
                                xs: "11.4px"
                            },
                            height: {
                                lg: "19px",
                                md: "15.2px",
                                xs: "11.4px"
                            }
                        }}
                    />

                    <Box sx={{
                        width: {
                            lg: "71px",
                            md: "56.8px",
                            xs: "42.6px"
                        },
                        height: {
                            lg: "71px",
                            md: "56.8px",
                            xs: "42.6px"
                        },  
                        borderRadius: "100px",
                        background: `url(${data.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: 'cover',
                        filter: 'brightness(1.5)',
                    }}>

                    </Box>
                </Box>
                <Typography sx={{
                        width: {lg: "71px", md: "56.8px", xs: "42.6px"},
                        fontSize:{lg: "13px", md: "10.5px", xs: "8px"},
                        textAlign: "center",
                        wordBreak: "break-word",
                    }}>
                    {data.title}
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                height: {
                    lg: "71px",
                    md: "56.8px",
                    xs: "42.6px"
                },  
                display: "flex",
                alignItems: "center",
                '& > *': { width: '100%' }}}>
            {data.slider ?
                <SliderProduct point={data.slider.point} textStart={data.slider.textStart} textEnd={data.slider.textEnd} type={data.slider.type} ></SliderProduct>
                :
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", ml: {md: "16px", xs: 0}}}>
                    <Typography sx={{
                        fontSize: {
                            lg: "15px",
                            md: "11.5px",
                            xs: "8px"
                        }
                    }}>
                        {t("NoInfo")}
                    </Typography>
                    <Typography
                        sx={{
                            color:"#73843D",
                            fontSize: {
                                lg: "20px",
                                md: "16px",
                                xs: "12px"
                            }
                        }}
                    >
                        {t("Add")}
                    </Typography>
                </Box>
            }
            </Box>
        </Box>
    )
}
export default SliderPlusFoto