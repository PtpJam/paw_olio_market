import { Box, Divider, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import ScrollBar from "../Scroll"
import { useEffect, useState } from "react"
import type IProductCard from "../interface/IProductCard"
import { ProductsData } from "../api/CardApi"
import Beak from "../Buttons/beak"
import {useNavigate } from "react-router"
import Feedback from "../Carts/Feedback"
import FeedbeakData from "../Data/FeedbeakData"

function Comments(){
    const {t} = useTranslation("comments");
    const navigate = useNavigate();

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
                        {/* {navigate} */}
                        <Box onClick={() => navigate(-1)}
                            sx={{
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "#000",
                                display: "flex",
                                alignItems: "center",
                                gap: {lg: "10.67px", xs: "10px"}
                            }}
                        >
                            <Beak sx={{
                                width: {
                                    lg: "18.31px",
                                    md: "15.15px",
                                    xs: "12px"
                                },
                                height: {
                                    lg: "30.52px",
                                    md: "25.26px",
                                    xs: "20px"
                                },
                            }} />
                            <Typography sx={{
                                fontSize: {
                                    lg: "40px",
                                    md: "32px",
                                    xs: "24px"
                                }
                            }}>
                                {t("Comments")}
                            </Typography>
                        </Box>
                        {/* add */}
                        <Typography sx={{
                            color: "#73843D",
                            fontSize: {
                                lg: "20px",
                                md: "16px",
                                xs: "12px"
                            },
                            textAlign: "end",
                            mt: "15px",
                            mb: {lg: "20px", md: "15px", xs: "10px"}
                        }}>
                            {t("Add")}
                        </Typography>
                        <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            {FeedbeakData.map((item, index) => {
                                return <Feedback key={index} {...item} />
                            })}
                        </Box>
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
export default Comments