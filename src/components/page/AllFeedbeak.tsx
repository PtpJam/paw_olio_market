import { Box, Divider, Grid } from "@mui/material"
import RatingBlock from "../RatingBlock"
import RatingBlockData from "../Data/RatingBlockData"
import FeedbackBlock from "../FeedbackBlock"
import { useTranslation } from "react-i18next"
import ScrollBar from "../Scroll"
import { useEffect, useState } from "react"
import type IProductCard from "../interface/IProductCard"
import { ProductsData } from "../api/CardApi"

function AllFeedbeak(){
    const {t} = useTranslation("feedbeak");

    const [cardGet, cardSet] = useState<IProductCard[]>([]);
    
    useEffect(() => {
        const fetchData = async() => {
            const data = await ProductsData(false);
            if(data){
                cardSet(data)
            }
        }
        fetchData()
    }, [])

    return(
        <Box>
            <Box
                sx={{
                    padding: {
                        lg: "60px 27px 72px 96px",
                        md: "40px 22px 46px 56px",
                        xs: "20px 17.01px"
                    }
                }}
            >
                <Grid container columnSpacing={"50px"} rowSpacing={"20px"}>
                    <Grid size={{lg: 8.3, md: 12, xs: 12}}>
                        <FeedbackBlock all={true} navigation={true}/>
                    </Grid>
                    <Grid 
                        size={{lg: 3.7, md: 12, xs: 12}}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: {lg: "end", md: "start"},
                            gap: "40px",
                            mt: {lg: "120px"}
                        }}
                    >
                        <RatingBlock {...RatingBlockData[0]}/>
                        <RatingBlock {...RatingBlockData[1]}/>
                    </Grid>
                </Grid>
            </Box>
            <Divider component="li" />
                <Box sx={{
                    padding: {
                        lg: "47px 27px 66px 96px",
                        md: "20px 40px 65px",  
                        xs: "20px 7px 40px"
                    }
                }}>
                    <ScrollBar scroll={{team: true, title: t("Recommendations"), type: "product", items: cardGet}}></ScrollBar>
            </Box>
        </Box>

    )
}
export default AllFeedbeak