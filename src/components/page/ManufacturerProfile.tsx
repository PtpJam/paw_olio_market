import { Box, Grid, Stack, Typography } from "@mui/material"
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
                    <Scroll scroll={{ team: true, title: t('Products'), type:"product", items: cardGet, row: 2}}></Scroll>
                </Box>
                {/* {posts} */}
                <Box>
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
                {/* {feedbeak} */}
                <Box>
                    <Grid container columnSpacing={"50px"} rowSpacing={"20px"}>
                        <Grid size={{lg: 8, md: 12, xs: 12}}>
                            <FeedbackBlock all={false} />
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