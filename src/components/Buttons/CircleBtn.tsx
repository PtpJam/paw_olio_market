import { Box, type SxProps, type Theme } from "@mui/material";

interface ICircleBtn{
    src: string;
    backg: string;
    sx?: SxProps<Theme>;  
}

function CircleBtn({src, backg, sx} : ICircleBtn){
    return(
        <Box sx={{
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor: backg,
            borderRadius:"24px",
            width: "34px",
            height: "34px",
            zIndex:2,
            ...sx
        }}>
            <Box component={"img"} src={src} width={"16.88px"} height={"18px"}/>
        </Box>
    )
}
export default CircleBtn;