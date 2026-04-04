import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import pointerUpSmall from "../../assets/svg/pointerUpSmall.svg"
import pointerUp from "../../assets/svg/pointerUp.svg"

export interface NewsProps {
    text: string;
    src: string;
}

function News({text, src} : NewsProps){
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    
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
            <Box sx={
                {
                    display: "flex",
                    gap: "10px"
                }
            }>
                <Box sx={{
                    color: "#fff",
                    backgroundColor: "#73843D",
                    padding: "10px 24px",
                    borderRadius: "50px"
                }}>
                    Agriculture
                </Box>
                <Box sx={{
                    color: "#fff",
                    backgroundColor: "#73843D80",
                    padding: "10px 24px",
                    borderRadius: "50px",
                    border: "1px solid #fff"
                }}>
                    Farm
                </Box>
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
                            display: "flex",
                            alignItems: "center",
                            width: {
                                lg: "79px",
                                md: "69px",
                                xs: "59px"
                            },

                            height: {
                                lg: "79px",
                                md: "69px",
                                xs: "59px"
                            },
                            backgroundColor: '#fff', 
                            color: '#0000',
                            zIndex: 2,
                            '&:hover': { backgroundColor: '#b9b9b9' }
                        }}
                    >
                        <Box 
                            component={"img"}
                            src={isLg ? pointerUp : pointerUpSmall}
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