import { Box, Chip, Divider, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import pointerUp from "../../assets/svg/pointerUp.svg"
import pointerUpSmall from "../../assets/svg/pointerUpSmall.svg";
import type ICard from "../interface/IMegaCard"

function MegaCard(card : ICard) {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const firstChipStyle = {
        fontSize: {
            lg: "20px",
            md: "17px",
            xs: "14px"
        },
        backgroundColor: 'transparent',
        position: 'relative',
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

        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: card.btnColor ? card.btnColor : "#0000",
            mixBlendMode: 'difference',
            borderRadius: '50px',
            zIndex: 0,
        },

        '& .MuiChip-label': {
            position: 'relative',
            zIndex: 1,
        },
    };

    const otherChipStyle = {
        display: {
            lg: "flex",
            md: "flex",
            xs: "none"
        },
        fontSize: {
            lg: "20px",
            md: "17px",
            xs: "14px"
        },
        mixBlendMode: 'difference',
        backgroundColor: "none",
        color: card.btnColor ? card.btnColor : "#0000", 
        border: `1px solid ${card.btnColor ? card.btnColor : "#0000"}`,
        minWidth: {
            lg: "109px",
            md: "85px",
            xs: "41px"
        },
        maxWidth:{
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
    };


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
            minWidth: { 
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
                linear-gradient(0deg, 
                ${card.colorGrad ? card.colorGrad : "rgba(161, 171, 255, 0.8) 0%"},
                rgba(85, 92, 152, 0.45) 25%,  
                rgba(161, 171, 255, 0) 60%
                ), 
                url(${card.src}),
                #000000
            `,
            backgroundSize: `${card.size? "cover, cover" : "100%, 65%"}`, 
            backgroundPosition: `${card.size? "center, center" : "bottom, center"} `,
            backgroundRepeat: 'no-repeat',
            }}
            >
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {card.chip?.map((item, index) => (
                    
                    <Chip 
                        label={item} 
                        sx={index === 0 ? firstChipStyle : otherChipStyle} 
                    />
                ))}
             </Box>

            <Box sx={{ mt: 'auto', maxWidth: "760px" }}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                    <Typography  sx={{ 
                        fontSize: { 
                            lg: '40px',   
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
                            backgroundColor: '#fff', 
                            zIndex: 2,
                            '&:hover': { backgroundColor: '#fff' }
                        }}
                    >
                        <Box 
                            component={"img"}
                            src={isLg ? pointerUp : pointerUpSmall}
                            alt="up"
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