import { Box, Grid, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import manufacturerProfileData from "../Data/ManufacturerProfileData"
import ManufacturerProfileHead from "../ManufacturerProfileHead"
import { useTranslation } from "react-i18next"
import FeedbackBlock from "../FeedbackBlock"
import RatingBlock from "../RatingBlock"
import RatingBlockData from "../Data/RatingBlockData"
import manufacturerData from "../Data/ManufactureData"
import InstalApp from "../Carts/InstalApp"
import Drop from "../img/Drop"
import { useEffect, useState } from "react"
import type IProductCard from "../interface/IProductCard"
import { ProductsData } from "../api/CardApi"
import { articleData } from "../Data/ArticleData"
import Scroll from "../Scroll"
import Article from "../Carts/Article"
import StudBotl from "../../assets/studBotl.png"
import pointerUp from "../../assets/svg/pointerUp.svg"
import pointerUpSmall from "../../assets/svg/pointerUpSmall.svg";
import { Link } from "react-router"
import { awardsData, certificatesData } from "../Data/AwardsData"

function ManufacturerProfile(){
    const {t} = useTranslation("manufacture")
    const styleTitle = {fontSize: {lg: "40px", md: "32px", xs: "24px"}}


    const [cardGet, cardSet] = useState<IProductCard[]>([]);
    
    useEffect(() => {
        const fetchData = async() => {
            const data = await ProductsData(true);
            if(data){
                cardSet(data)
            }
        }
        fetchData()
    }, [])


    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    return(
        <Box>
            <ManufacturerProfileHead {...manufacturerProfileData}/>
            <Box
                sx={{
                    p: {
                        lg: "50px 62px 98.78px",
                        md: "35px 39px 57px",
                        xs: "20px 16px 15.4px"
                    }
                }}
            >
                <Box>
                    <Typography sx={styleTitle} pb={"20px"}>
                        {t("AboutSeller")}
                    </Typography>
                    <Grid container spacing={{lg: "120.71px", md: "60.35px", xs: "20px"}}>
                        <Grid size={{md: 7, xs: 11 }}>
                            <Typography 
                                sx={{
                                    fontSize: {lg: "30px", md: "21px", xs: "12px"},
                                    textAlign: "justify"
                                }}
                            >
                                {manufacturerData.AboutSeller}
                            </Typography>
                        </Grid>
                        <Grid
                            size={{md: 5, xs: 12}}
                        >
                            <InstalApp></InstalApp>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{pb: {lg: "50px", md: "35px", xs: "20px"}}}>
                    <Typography sx={styleTitle}>
                        {t("ProducesOils")}
                    </Typography>
                    <Stack spacing={"20px"}>
                        {manufacturerData.ProducesOils.map((item, index) => (
                            <Box key={index}
                                sx={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center"
                                }}
                            >
                                <Drop color={item.color} sx={{height: "20.87px"}}></Drop>
                                <Typography 
                                    sx={{
                                        fontSize: {
                                            lg: '30px',
                                            md: "21px",
                                            xs: "12px"
                                        },
                                        fontWeight: 400
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
                {/* {product} */}
                <Box>
                    <Scroll scroll={{ team: true, title: t('Products'), type:"product", items: cardGet}}></Scroll>
                </Box>
                <Grid container
                    spacing={{lg: "50px", md: "80px", xs: "10px"}}
                    sx={{
                        p: {
                            lg: "76px 81px",
                            md: "48px 61px",
                            xs: "20px 41px"
                        },
                        mx: { lg: "-62px", md: "-39px", xs: "-16px" },
                        bgcolor: "#000"
                    }}  
                >
                    <Grid size={{md: 7.5, xs: 12}} sx={{order: { xs: 2, md: 1 }}}>
                        <Box mb={"30px"}>
                            <Scroll scroll={{items: certificatesData, title: t("Certificates"), type:"certificate", team: false}}></Scroll>
                        </Box>
                        <Box>
                            <Scroll scroll={{items: awardsData, title: t("Awards"), type:"award", team: false}}></Scroll>
                        </Box>
                    </Grid>
                    <Grid size={{md: 4.5, xs: 12}} sx={{order: { xs: 1, md: 2 }}}>
                        <Stack 
                            spacing={"20px"}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: "20px",
                                p: {
                                    lg: "31px 43px",
                                    md: "25.5px 26.5px",
                                    xs: "20px 10px"
                                }
                            }}
                        >
                            <Typography sx={{
                                fontSize: {lg: "40px", md: "32px", xs: "24px"},
                                textAlign: "center"
                            }}>
                                {t("PopularProduct")}
                            </Typography>
                            <Box 
                                component={"img"}
                                src={StudBotl}
                            />
                            <Box 
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: {lg: "40px", md: "32px", xs: "24px"}
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "20px"
                                }}
                            >
                                <Typography sx={{letterSpacing: "-0.08em"}}>
                                    Extra Virgin <Typography component={"span"} sx={{color: "#A4C245"}}>Olive</Typography> Oil
                                </Typography>
                                <IconButton 
                                    component={Link}
                                    to="/product/1"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: "58px",
                                        height: "58px",
                                        backgroundColor: '#000', 
                                        zIndex: 2,
                                        '&:hover': { backgroundColor: '#000' }
                                    }}
                                >
                                    <Box 
                                        component={"img"}
                                        src={isLg ? pointerUp : pointerUpSmall}
                                        alt="up"
                                        sx={{filter: "invert(1)"}}
                                    /> 
                                </IconButton>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
                {/* {posts} */}
                <Box pb={"20px"}>
                    <Typography sx={styleTitle} pb={"20px"}>
                        {t("Posts")}
                    </Typography>
                    <Grid container spacing={{lg: "20px", md: "15px", xs: "10px"}}>
                        <Grid size={6}>
                            <Article {...articleData}></Article>
                        </Grid>
                        <Grid size={6}>
                            <Article {...articleData}></Article>
                        </Grid>
                    </Grid>
                </Box>
                {/* video */}
                {manufacturerData.Video &&
                    <Box sx={{borderRadius: "10px"}}>
                        <Box 
                            sx={{
                                width: "100%",
                            }}
                            component={"img"}
                            src={manufacturerData.Video} 
                        />
                    </Box>
                }
                {/* {galary} */}
                {
                    manufacturerData.Galery &&
                    <Box>
                        <Scroll scroll={{items: manufacturerData.Galery, team: true, type: "galery" }}></Scroll>
                    </Box>
                }
                {/* {feedbeak} */}
                <Box>
                    <Grid container columnSpacing={"50px"} rowSpacing={"20px"}>
                        <Grid size={{lg: 8, md: 12, xs: 12}}>
                            <FeedbackBlock all={false} navigation={true}/>
                        </Grid>
                        <Grid 
                            size={{lg: 4, md: 12, xs: 12}}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "40px"
                            }}
                        >
                            <RatingBlock {...RatingBlockData[0]}/>
                            <RatingBlock {...RatingBlockData[1]}/>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
export default ManufacturerProfile