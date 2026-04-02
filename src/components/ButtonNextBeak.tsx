import { Box } from "@mui/material";
import type IButtonNextBeak from "./interface/IButtonNextBeak"
import Next from "./Button/next"
import Beak from "./Button/beak"

function ButtonNextBeak(data: IButtonNextBeak){
    return(
        <Box 
            onClick={data.onClick} 
            sx={{
            width: {
                lg: `${data.width.lg}px`,
                md: `${data.width.md}px`,
                xs: `${data.width.xs}px`
            },
            height: {
                lg: `${data.width.lg}px`,
                md: `${data.width.md}px`,
                xs: `${data.width.xs}px`
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
                    xs: "16px"
                },
            }}
            />  
        </Box>
    )
}
export default ButtonNextBeak;