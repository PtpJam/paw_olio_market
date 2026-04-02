import { Box, Typography } from "@mui/material";

interface Props{
    src: string;
    description: string;
}


function Detaili({ src, description }: Props) {
    return(
        <Box sx={{display: "flex", gap:"15px", alignItems: "center"}}>
            <Box sx={{
                display: "flex",
                justifyContent: "center", alignItems: "center",
                background: "#000000",

                maxWidth: {lg: "70.16px", md: "55.08px", xs: "40px"},
                height: {lg: "70.16px",md: "55.08px", xs: "40px"},
                width: "100%",
                borderRadius: "100px",
            }}>
                <Box
                    sx={{
                        width: {
                            lg: "40.9px",
                            md: "32.11px",
                            xs: "23.32px"
                        }                    
                    }}
                    component={"img"}
                    src={src}
                />
            </Box>
            <Typography
                sx={{
                    fontSize:{
                        lg: "30px",
                        md: "23px",
                        xs: "16px"
                    },
                    fontWeight: 500,
                }}
            >
                {description}
            </Typography>
        </Box>
    )
}
export default Detaili;