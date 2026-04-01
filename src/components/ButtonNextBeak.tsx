import { Box } from "@mui/material";
import type IButtonNextBeak from "./interface/IButtonNextBeak"
import Next from "../assets/svg/next"
import Beak from "../assets/svg/beak"

function ButtonNextBeak(data: IButtonNextBeak){
    return(
        <Box 
            onClick={data.onClick} 
            sx={{
            width: {
                lg: "59px",
                md: "44.5px",
                xs: "30px"
            },
            height: {
                lg: "59px",
                md: "44.5px",
                xs: "30px"
            },
            borderRadius: "100%",
            border: data.color? `2px solid ${data.color}` : data.team ? "1px solid #00000033" : "2px solid #fff",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",                        
        }}>
        <Box colorFill={data.color ? data.color : (data.team ? "#000" : "#fff")} 
            component={data.nextBack ? Next : Beak}
            sx={{ 
                width: {
                    lg: "22.13px",
                    md: "18.56px",
                    xs: "15px",
                },
                height:{
                    lg: "25.06px",
                    md: "16.25px",
                    xs: "7.5px"
                },

                filter: data.color ? "none" : (data.team ? 'brightness(0)' : 'brightness(0) invert(1)'),

            }}
            />  
        </Box>
    )
}
export default ButtonNextBeak;