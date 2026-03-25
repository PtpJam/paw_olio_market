import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutUs from '../../assets/oilAboutUs.jpg';
import Detailed from '../../assets/functionImg/detailed.svg';
import Food from '../../assets/functionImg/food.svg';
import ListIco from '../../assets/functionImg/list.svg';
import Nutritionist from '../../assets/functionImg/nutritionist.svg';
import Oil from '../../assets/functionImg/oil.svg';
import Scroll from '../../assets/functionImg/scroll.svg';

const icons = [Oil, Scroll, ListIco, Food,Nutritionist, Detailed]

function Home(){
    
    const {t} = useTranslation("home");
    const features = t('features', { returnObjects: true });
    
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
                    },
                    fontSize:{
                        lg: "40px",
                        md: "36px",
                        xs: "32px"    
                    },
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }>
                {t('functions')}
            </Box>
            <Box 
                sx={{
                    margin: {
                        lg: "25px 65px",
                        md: "25px 42.5px",
                        xs: "25px 20px"   
                    },
                    display: "grid",
                    gridTemplateColumns: {
                        lg: "repeat(3, 1fr)", 
                        md: "repeat(3, 1fr)", 
                        xs: "repeat(2, 1fr)"
                    },
                    justifyContent: {
                        lg: "space-between",
                        xs: "space-around"
                    },
                    justifyItems: "center", 
                    columnGap:"40px",
                    rowGap: "20px"

                }}
            >
                {Array.isArray(features) && features.map((item, index) => (
                        <Box key={index} sx={{
                            width:{
                                lg: "363px",
                                md: "265.5px",
                                sm: "207.75px",
                                xs: "150px"
                            },
                            display: "flex",
                            flexDirection: "column",
                            textAlign: {
                                md: "left",
                                sm: "center",
                                xs: "center"
                            },
                            rowGap: {
                                lg: "24px",
                                xs: "12px" 
                            },
                        }}>
                            <Box sx={{
                              display: "flex",  
                              justifyContent: "center",
                            }}>
                                <Box 
                                    component={"img"}
                                    src={icons[index]}
                                    sx={{
                                        width:{
                                            lr: "196px",
                                            md: "142.5px",
                                            sm: "142.75px",
                                            xs: "80.75px"
                                        },
                                        height:{
                                            lr: "155px",
                                            md: "112.5px",
                                            sm: "155px",
                                            xs: "65px"
                                        },

                                    }}
                                />
                            </Box>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: {
                                    lg: "24px",
                                    sm: "20px",
                                    xs: "12px",
                                },
                                letterSpacing: 0,
                            }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                                fontWeight: 500,
                                fontSize: {
                                    lg: "24px",
                                    sm: "20px",
                                    xs: "12px",
                                },
                                letterSpacing: 0,
                                lineHeight: "100%",
                            }}>
                                {item.description}
                            </Typography>
                        </Box>
                    )
                  )
                }
            </Box>
        </>
    )
}
export default Home;