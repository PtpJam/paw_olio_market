import { Box, Chip, Divider, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import pointerUp from "../assets/svg/pointerUp.svg";
import pointerUpSmall from "../assets/svg/pointerUpSmall.svg";
import type ICard from "./interface/IMegaCard"


function MegaCard(card : ICard) {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #00000033",
            borderBottom: 'none',
            backgroundColor: "#000000",
            borderRadius: {
                lg: "32px",
                md: "26px",
                xs: "20px"
            },
            
            padding: { 
                lg: "19px 49px 52px 49px",
                md: "15px 30px 30px 30px",
                xs: "10px 11px 10px 11px",
            },
            width: { 
                lg: "576px",
                md: "403px",
                xs: "230px",
            }, 
            height: {
                lg: "383px",
                md: "276.5px",
                xs: "170px"
            }, 
            background: `
                url(${card.src}), 
                linear-gradient(0deg, 
                rgba(161, 171, 255, 0.8) 0%,
                rgba(85, 92, 152, 0.45) 25%,  
                rgba(161, 171, 255, 0) 60%
                ), 
                #000000
            `,
            backgroundSize: '65%, cover', 
            backgroundPosition: 'bottom, center',
            backgroundRepeat: 'no-repeat',
            }}
            >
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip 
                    label="Organic" 
                    sx={{ 
                        fontSize: {
                            lg: "20px",
                            md: "17px",
                            sx: "14px"
                        },
                        mixBlendMode: 'difference',
                        backgroundColor: "#A1ABFF",
                        color: '#fff', 
                        width:{
                            lg: "189px",
                            md: "133px",
                            xs: "77px"
                        },
                        height:{
                            lg: "48px",
                            md: "38.5px",
                            xs: "29px"
                        },
                        borderRadius: '50px',
                    }} 
                />
                <Chip 
                    label="Gluten-Free" 
                    sx={{ 
                        display: {
                            lg: "flex",
                            md: "flex",
                            xs: "none"
                        },
                        fontSize: {
                            lg: "20px",
                            md: "17px",
                            sx: "14px"
                        },
                        mixBlendMode: 'difference',
                        backgroundColor: "none",
                        color: '#A1ABFF', 
                        border: "1px solid #A1ABFF",
                        width:{
                            lg: "163px",
                            md: "148px",
                            xs: "51px"
                        },
                        height:{
                            lg: "48px",
                            md: "38.5px",
                            xs: "29px"
                        },
                        borderRadius: '50px',
                    }} 
                />
                <Chip 
                    label="Vegan" 
                    sx={{ 
                        display: {
                            lg: "flex",
                            md: "flex",
                            xs: "none"
                        },
                        fontSize: {
                            lg: "20px",
                            md: "17px",
                            sx: "14px"
                        },
                        mixBlendMode: 'difference',
                        backgroundColor: "none",
                        color: '#A1ABFF', 
                        border: "1px solid #A1ABFF",
                        width:{
                            lg: "109px",
                            md: "85px",
                            xs: "41px"
                        },
                        height:{
                            lg: "48px",
                            md: "38.5px",
                            xs: "29px"
                        },
                        borderRadius: '50px',
                    }} 
                />
             </Box>

            <Box sx={{ mt: 'auto', maxWidth: "100%" }}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                    <Typography  sx={{ 
                        fontSize: { 
                            lg: '48px',   
                            md: '32px',
                            xs: '16px'
                        },
                        color: "#fff",
                        letterSpacing: "-3%",
                        textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', 
                    }}>
                        {card.title}
                    </Typography>
                    <IconButton 
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: {
                                lg: "79px",
                                md: "58px",
                                xs: "37px"
                            },

                            height: {
                                lg: "79px",
                                md: "58px",
                                xs: "37px"
                            },
                            backgroundColor: '#A1ABFF', 
                            zIndex: 2,
                            '&:hover': { backgroundColor: '#b2b9ff' }
                        }}
                    >
                        <Box 
                            component={"img"}
                            src={isLg ? pointerUp : pointerUpSmall}
                            alt="up"
                            sx={{ 
                                filter: "brightness(0) invert(1)",
                            }}
                        /> 
                    </IconButton>
                </Box>
                <Divider 
                    sx={{
                        mt: {
                            lg: "6px",
                            md: "6.5px",
                            xs: "7px"
                        },
                        mb: {
                            lg: "11px",
                            md: "8px",
                            xs: "5px"
                        },
                        borderColor: '#FFFFFF'
                    }} 
                />
                <Typography sx={{ 
                    padding: "0 2px",
                    fontSize: {
                        lg: "14px",
                        md: '11px',
                        xs: '8px',
                    }, 
                    letterSpacing: "-2%",
                    lineHeight: 1.4, 
                    color: '#fff',
                    fontWeight: 400,
                    textAlign: 'justify',
                    textJustify: "inter-word",
                    textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', 
                }}>
                    {card.description}    
                </Typography>
            </Box>
        </Box>
    );
}
export default MegaCard;