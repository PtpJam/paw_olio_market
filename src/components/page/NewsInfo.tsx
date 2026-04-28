import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import data from "../Data/NewsInfoData"
import Beak from "../Buttons/beak"
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import WeChat from "../../assets/svg/socialMedia/WeChat.svg";
import Facebook from "../../assets/svg/socialMedia/Facebook.svg";
import Instagram from "../../assets/svg/socialMedia/Instagram.svg";
import X from "../../assets/svg/socialMedia/X.svg";
import Snapchat from "../../assets/svg/socialMedia/Snapchat.svg";
import Article from "../Carts/Article";
import Scroll from "../Scroll";
import { articleDataArr } from "../Data/ArticleData";

const socialMedia : string[] = [WeChat, Facebook, Instagram, X, Snapchat]

function NewsInfo(){
    const navigate = useNavigate();
    const { t } = useTranslation("newsInfo");

    return(
        <Box sx={{ p: {lg: "0", xs: "20px 17px 27px"}}}>
            <Grid container
                spacing={3}
                sx={{
                    padding: {
                        lg: "20px 99px 25px",
                        md: "20px 58px 12.5px",
                        xs: "20px 17px 0"
                    }
                }}    
            >
                <Grid size={{lg: 2.5, xs: 0.5}}>
                    <Box onClick={() => navigate(-1)}>
                        <Beak
                            sx={{
                                pt: {lg: "18px", md: "12.5px", xs: "8.07px"},
                                cursor: "pointer",
                                height: {lg: "30.52px", md: "25.18px", xs: "19.84px"},
                                width: {lg: "18.31px", md: "15.11px", xs: "11.91px"}
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={{lg: 7, xs: 11}}>
                    <Typography
                        sx={{
                            pb: "12px",
                            fontWeight: 500,
                            fontSize: {
                                lg: "45px",
                                md: "34.5px",
                                xs: "24px"
                            }
                        }}
                    >
                        {data.title}
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Stack spacing={"5px"}
                            sx={{
                                '& .MuiTypography-root': { 
                                    fontWeight: 500,
                                    fontSize: {lg: "20px", md: "14px", xs: "8px"},
                                    color: "#00000080"
                                }
                            }}
                        >
                            <Typography>
                                {t("By")} {data.by}
                            </Typography>
                            <Typography>
                                {data.data} &bull; {data.time}
                            </Typography>
                        </Stack>
                        <Grid container spacing={{lg: "44px", md: "27px", xs: "10px"}}>
                            {
                                socialMedia.map((item, index) => (
                                    <Box 
                                        key={index}
                                        component={"img"}
                                        src={item}
                                        sx={{
                                            width: {lg: "28px", md: "23px", xs: "18px"}
                                        }}
                                    />
                                ))
                            }
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={{lg: 2.5, xs: 0.5}}></Grid>
            </Grid>
            <Divider sx={{m: {lg: "25px 0 40px 0", md: "22.5px 0 30px 0", xs: "20px 0"}}}/>
            <Grid container>
                <Grid size={{lg: 3, md: 1.25, xs: 0.25}}></Grid>
                <Grid 
                    size={{lg: 6, md: 9.25, xs: 11}}
                >
                    <Stack spacing={"20px"}>
                        {data.description.map((items, index) => (
                            <Box key={index}>
                                {items.items.map((item, index) => (
                                    <Typography
                                        key={index}
                                        sx={{
                                            textAlign: "justify",
                                            fontSize: {lg: "30px", md: "21px",xs: "12px"}
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        ))}
                    </Stack>
                    <Box pt={"10px"} display={"flex"} justifyContent={"space-between"}>
                        <Typography 
                            sx={{
                                fontSize: {lg: "30px", md: "21px", xs: "12px"},
                                color: "#A1ABFF"
                            }}
                        >
                            {t("Updated")} {data.update}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                mt: "auto",
                                textTransform: "none",
                                backgroundColor: "#000",
                                fontWeight: 700,
                                fontSize: "14px",
                                borderRadius: "82px",
                                width: {lg: "179px", md: "147.5px", xs: "116px"},
                                height: {lg: "39px", md: "33px", xs: "27px"},
                                textWrap: "nowrap",
                            }}
                        >
                            {t("AllComment")}
                        </Button>
                    </Box>
                </Grid>
                <Grid size={{lg: 3, md: 1.25, xs: 0.25}}></Grid>
            </Grid>
            <Divider sx={{m: {lg: "29px 0 40px 0", md: "24.5px 0 24px 0", xs: "20px 0 18px 0"}}}/>
            <Box 
                sx={{
                    padding: {lg: "0 63px 34.78px 61px", md: "0 42.5px 30.89p 44px", xs: "0 22px 27px"}
                }}
            >
                <Scroll scroll={{ team: true, type:"article", items: articleDataArr}}></Scroll>
            </Box>
        </Box>
    )
}
export default NewsInfo