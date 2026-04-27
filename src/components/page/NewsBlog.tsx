import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ScrollBar from "../Scroll"
import itemsNews from "../Data/NewsData";
import MegaCard from "../Carts/MegaCard";
import bgOilMegaCard from "../../assets/bgOilMegaCard.png"

interface MiniCard{
    src: string;
    text: string;
}

function MiniCard({src, text} : MiniCard){
    return(
        <Box 
            sx={{
                display: "flex",
                gap: {lg: "20px", md: "15px", xs: "10px"},
                height: {lg: "100px", md: "75px", xs: "50px"},
                width: {lg: "362px", md: "288.5px",xs: "215px"}
            }}
            >
            <Box 
                component={"img"}
                sx={{
                    width: {lg: "100px", md: "75px", xs: "50px"},
                    height: {lg: "100px", md: "75px", xs: "50px"},
                    borderRadius: { lg: "20px", md: "15px", xs: "10px"},
                    objectFit: "cover", 
                    objectPosition: "center"
                }}
                src={src}
            >

            </Box>
            <Typography
                sx={{
                    fontSize: {lg: "20px", md: "16px", xs: "12px"},
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    wordBreak: "break-word",  
                    height: "90px"
                }}
            >
                {text}
            </Typography>
        </Box>
    )
}
const miniCardData : MiniCard[] = [
    {
        src: itemsNews[0].src,
        text: "The 10 Most-Read Olive Oil Times Articles of the Year"
    },
    {
        src: itemsNews[1].src,
        text: "China’s Olive Oil Sector Alleviates Poverty but Struggles to Compete"
    },
    {
        src: itemsNews[2].src,
        text: "Cobram Estate to Acquire California Olive Ranch in $173.5 Million Deal"
    },
    {
        src: itemsNews[3].src,
        text: "China’s Olive Oil Sector Alleviates Poverty but Struggles to Compete"
    },
        {
        src: itemsNews[0].src,
        text: "The 10 Most-Read Olive Oil Times Articles of the Year"
    },
    {
        src: itemsNews[1].src,
        text: "China’s Olive Oil Sector Alleviates Poverty but Struggles to Compete"
    },
    {
        src: itemsNews[2].src,
        text: "Cobram Estate to Acquire California Olive Ranch in $173.5 Million Deal"
    },
    {
        src: itemsNews[3].src,
        text: "China’s Olive Oil Sector Alleviates Poverty but Struggles to Compete"
    },
        {
        src: itemsNews[0].src,
        text: "The 10 Most-Read Olive Oil Times Articles of the Year"
    },
    {
        src: itemsNews[1].src,
        text: "China’s Olive Oil Sector Alleviates Poverty but Struggles to Compete"
    },
    {
        src: itemsNews[2].src,
        text: "Cobram Estate to Acquire California Olive Ranch in $173.5 Million Deal"
    },
    {
        src: itemsNews[3].src,
        text: "China’s Olive Oil Sector Alleviates Poverty but Struggles to Compete"
    },
]

function NewsBlog(){
    const { t } = useTranslation("newsBlog");
    
    return(
        <Box
            sx={{
                padding: {
                    lg: "40px 25px 35px 98px",
                    md: "30px 22px 24px 58.5px",
                    xs: "20px 19px 13px"
                }
            }}
        >
            <Box>
                <Typography
                    sx={{
                        fontSize: {
                            lg: "40px",
                            md: "32px",
                            xs: "24px"
                        }
                    }}
                >
                    {t("News")}
                </Typography>
                <Typography 
                    sx={{
                        fontSize: {
                            lg: "20px",
                            md: "16px",
                            xs: "12px"
                        }
                    }}
                >
                    {t("StayUp")}
                </Typography>
            </Box>
            <Box>
                <ScrollBar scroll={{ team: true, type:"news", items: itemsNews}}></ScrollBar>
            </Box>
            <Box pt={"20px"}>
                <MegaCard 
                    btnColor="#6272d5"
                    colorGrad="#000"
                    chip={["Health"]}
                    title={"Study Links Oleic Acid to Stronger Immune Response in Cancer Patients"}
                    description={"New research suggests that oleic acid, found in olive oil, may help restore immune defenses impaired by palmitic acid, potentially impacting the body’s resistance to cancer. "}
                    src={bgOilMegaCard}
                    size={true}
                >
                </MegaCard>
            </Box>
            <Box pt={"20px"} pb={{lg: "56px", xs: "20px"}}>
                <Typography
                    sx={{
                        fontSize: {
                            lg: "40px",
                            md: "32px",
                            xs: "24px"
                        },
                        pb: "15px"
                    }}
                >
                    {t("Popular")}
                </Typography>
                <Grid container spacing={{lg: "57px", md: "36px", xs: "15px"}}>
                    <Grid size={{lg: 4, xs: 12}} container spacing={0} rowSpacing={"17px"}>
                        {miniCardData.slice(0, 4).map((item, index) => (
                            <Grid key={index} size={12}>
                                <MiniCard {...item}/>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid size={{lg: 8, xs: 12}}>
                        <MegaCard 
                            btnColor="#6272d5"
                            colorGrad="#000"
                            chip={["Health"]}
                            title={"Study Links Oleic Acid to Stronger Immune Response in Cancer Patients"}
                            description={"New research suggests that oleic acid, found in olive oil, may help restore immune defenses impaired by palmitic acid, potentially impacting the body’s resistance to cancer. "}
                            src={bgOilMegaCard}
                            size={true}
                        >
                        </MegaCard>
                    </Grid>
                </Grid>
            </Box> 
            <Box>
                <ScrollBar scroll={{ team: true, type:"news", items: itemsNews}}></ScrollBar>
            </Box>
            <Box pt={{lg: "30px", md: "20px", xs: "10px"}}>
                <Typography
                    sx={{
                        fontSize: {
                            lg: "40px",
                            md: "32px",
                            xs: "24px"
                        },
                        pb: "15px"
                    }}
                >
                    {t("NewsOfWeek")}
                </Typography>
                <Grid container rowSpacing={"15px"} justifyContent={"space-between"} display={"flex"}>
                    {miniCardData.map((item, index) => (
                        <Grid key={index} size={{lg: 4, md: 6, xs: 12}}>
                            <MiniCard {...item}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
export default NewsBlog;