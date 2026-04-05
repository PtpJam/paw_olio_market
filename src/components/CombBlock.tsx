import { Typography, Box } from "@mui/material";
import type ICombBlock from "./interface/ICombBlock";

function CombBlock(data : ICombBlock){
    return(
        <Box sx={{
                display: "inline-flex", 
                background: data.bgColor,
                color: data.color,
                height: "40px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "60px",
                gap: "12px",
                padding: "0 17px"
            }}
        >
            <Box 
                component={"img"}
                src={data.src}
            />
            <Typography 
                sx={{
                    fontSize: {
                        lg: "18px",
                        md: "15px",
                        xs: "12px"
                    },
                    textWrap: "nowrap",
                }}
            >
                {data.title}
            </Typography>
        </Box>
    )
}
export default CombBlock
