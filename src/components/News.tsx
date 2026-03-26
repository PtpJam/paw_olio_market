import { Box, IconButton, Typography } from "@mui/material";
import pointerUp from "../assets/svg/pointerUp.svg"

export interface NewsProps {
    text: string;
    src: string;
}

function News({text, src} : NewsProps){
    return(
        <Box sx={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "32px",
            padding: {
                lg: "39px",
                xs: "17px 18px 35px 20px"
            },
            width:{
                lg: "576px",
                md: "457.5px",
                xs: "339px"
            },
            height:{
                lg: "394px",
                md: "388,5px",
                xs: "383px"
            },
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Box>
                <Box></Box>
                <Box></Box>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "end",
                color: "#fff",
                justifyContent: "space-between",
            }}>
                <Typography
                    sx={{
                        width: {
                            lg: "326px",
                            md: "243,5px",
                            xs: "161px",
                        },
                        fontSize:{
                            lg: "30px",
                            md: "23px",
                            xs: "16px"
                        },
                        letterSpacing: "-0.08em",
                        lineHeight: 1.1
                    }}
                >
                    {text}
                </Typography>
                <Box sx={{
                    ml: "auto"
                }}>
                    <IconButton 
                        sx={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: '#fff', 
                            color: '#0000',
                            zIndex: 2,
                            '&:hover': { backgroundColor: '#b9b9b9' }
                        }}
                    >
                        <Box 
                            component={"img"}
                            src={pointerUp}
                            alt="up"
                            sx={{ 
                                filter: 'brightness(0)'
                            }}
                        /> 
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}
export default News;