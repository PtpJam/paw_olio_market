import { Box, Slider, Typography } from "@mui/material";
import type ISliderProduct from "../interface/ISliderProduct"
import Drop from "../../assets/svg/dropBLue.svg"

function SliderProduct({textStart, textEnd, point, type} : ISliderProduct){
    return(
        <Box>
            <Box 
                sx={{
                    display:"flex",
                    gap: (type === 0) ? "13px" : {lg: "10px", md: "7.5px", xs: "5px"},
                    justifyContent: "space-between",
                    '& .MuiTypography-root': {
                        fontSize: {
                            lg: "14px",
                            md: "11px",
                            xs: "8px"
                        }
                    }
                }}>
                <Typography>{textStart}</Typography>
                <Typography>{textEnd}</Typography>
            </Box>
            <Slider 
                track={false}
                defaultValue={point}
                valueLabelDisplay="auto"
                aria-label={Drop} 
                disabled
                sx={{
                    pb: 0,
                    '&.Mui-disabled': {
                        color: '#D9D9D9',
                        height: "9px"
                    },
                    '& .MuiSlider-thumb.Mui-disabled': {
                        background: (type === 0 || type === 1) ? "block" :  `url("${Drop}")`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        

                        color: (type === 0 || type === 1) ? '#73843D' : "#A1ABFF" ,
                        width: (type === 0 || type === 2) ? "17px" : ((type === 1) ? {lg: "43px", md: "32.5px", xs: "22px"} : "17px"),
                        height: (type === 0) ? "17px" : ((type === 1) ? "9px" : "25px"),
                        borderRadius: "48px",
                        
                        '&::before': {
                            boxShadow: !(type === 0 || type === 1) ? "none": "inherit",
                        }
                    },
                    '& .MuiSlider-rail.Mui-disabled': {
                        opacity: 0.38, 
                        backgroundColor: '#393939', 
                    },
                }}
            />
        </Box>
    )
}
export default SliderProduct;