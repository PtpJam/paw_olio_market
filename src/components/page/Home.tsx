import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutUs from '../../assets/oilAboutUs.jpg';
function Home(){
    
    const {t} = useTranslation("home");

    return(
        <>
            <Box sx={{
                margin: {
                    lg: "60px 0",
                    md: "60px 0",
                    xs: "20px 0"
                },
                display: "flex",
                alignItems: "center",
                padding: {
                    lg: "0 29px 0 67px",
                    md: "0 29px 0 67px",
                    xs: "0 29px 0 27px"
                },
                flexDirection: {
                    lg: "row",
                    md: "row",
                    xs: "column"
                },
                gap: {
                    lg: "65px",
                    md: "65px",
                    xs: "20px"
                }
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}>
                    <Typography sx={{
                        fontSize:{
                            lg: "40px",
                            md: "40px",
                            xs: "32px"
                        }
                    }}>
                        {t('AboutUs.title')}
                    </Typography>
                    <Typography sx={{
                        fontSize:{
                            lg: "30px",
                            md: "21px",
                            xs: "12px"
                        },
                        textAlign: "justify",
                        letterSpacing: "0.02em",
                    }}>
                        {t('AboutUs.text')}
                    </Typography>
                    <Box sx={{display: "flex", justifyContent:"flex-end"}}>
                        <Button 
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                textWrap: "nowrap",
                                padding: "10px 25px",
                                backgroundColor:"#000000",
                                borderRadius: "82px",
                                width: "179px",
                                height: "39px",
                            }}
                        >
                            {t('AboutUs.btnMore')}
                        </Button>
                    </Box>
                </Box>
                <Box 
                    component={"img"}
                    sx={{
                        border: "2px solid #0000001A",
                        maxWidth: {
                            lg: "526px",
                            md: "429px",
                            xs: "100%",
                        }, 
                        minHeight: {
                            lg: "486px",
                            md: "389px",
                            xs: "292px",
                        }, 
                        width: "100%",
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: '20% center',
                        alignItems: "center",
                        borderRadius: {
                            lg: "60px",
                            md: "40px",
                            xs: "20px"
                        }
                    }}
                    src={AboutUs}
                />
            </Box>
            <Box sx={
                {
                    p: 0,
                    width: "100%",
                    backgroundColor:"#000000",
                    height:{
                        lg: "129px",
                        md: "104px",
                        xs: "79px"
                    }
                }
            }>

            </Box>
        </>
    )
}
export default Home;