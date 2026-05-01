import { Box, Button, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import News, { type NewsProps } from "./Carts/News";
import Card from "./Carts/Card";
import MegaCard from "./Carts/MegaCard";
import type IMegaCard from "./interface/IMegaCard";
import ButtonNextBeak from "./Buttons/ButtonNextBeak";
import type IProductCard from "./interface/IProductCard";
import type IArticle from "./interface/IArticle";
import Article from "./Carts/Article";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";


interface Iscroll{
    team: boolean; //true - black, false - white
    title?: string;
    type: "news" | "cosmetics" | "product" | "article" | "galery"; 
    items: (NewsProps | IProductCard | IMegaCard | IArticle | string)[]; //string - galery []
    row?: number; 
}
interface Props{
    scroll: Iscroll;
}


function Scroll({scroll} : Props){
    const {t} = useTranslation("scroll")

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 1, 
        breakpoints: {
            '(max-width: 899px)': { 
                slidesToScroll: (scroll.row && scroll.row > 1) ? 2 : 1 
            }
        },
        watchDrag: (_, event) => {
            const target = event.target as HTMLElement | null;
            const isInnerScroll = target?.closest('.inner-scroll-container');
            
            return !isInnerScroll;
        }
    });

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);
    
    return(
        <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <Box sx={{
                display: "flex",
                justifyContent: scroll.title ? "space-between" : "flex-end",
            }}>
                {scroll.title && 
                    <Typography sx={{
                        color: scroll.team ? "#000000" : "#ffffff",
                        fontSize: {
                            lg: "40px",
                            md: "35px",
                            xs: "30px"
                        }
                    }}>
                        {scroll.title}
                    </Typography>
                }
                <Box sx={{ display: "flex", gap: "10px", alignItems: "end"}}>
                    <ButtonNextBeak width={{lg: 59, md:51, xs:43}} nextBack={false} team={scroll.team} onClick={scrollPrev}/>
                    <ButtonNextBeak width={{lg: 59, md:51, xs:43}} nextBack={true} team={scroll.team} onClick={scrollNext}/>
                </Box>   
                       
            </Box>

            <Box sx={{ position: "relative" }}>
                <Box ref={emblaRef} sx={{ overflow: "hidden"}}>
                    <Box 
                    sx={{
                        display: "flex",
                        flexDirection: {
                            lg: "row",
                            md: "row",
                            xs: (scroll.row && scroll.row > 1) ? "column" : "row"
                        },
                        flexWrap: {
                            lg: "nowrap",
                            md: "nowrap",
                            xs: (scroll.row && scroll.row > 1) ? "wrap" : "nowrap"
                        },

                        height: {
                            lg: "auto",
                            md: "auto",
                            xs: (scroll.row && scroll.row > 1) ? "515px" : "auto" 
                        },
                        gap: {    
                            lg: scroll.type === "galery" ? "20px" : "10px",
                            md: scroll.type === "galery" ? "15.25px" :"7.5px",
                            xs: scroll.type === "galery" ? "10.5px" : "5px"
                        },

        
                    }}>
                        {scroll.items.map((item, index) => {
                            const renderCard = () => {
                                switch (scroll.type) {
                                    case 'news':
                                        return <News {...item as NewsProps} ></News>;
                                    
                                    case 'product':
                                        return <Card {...item as IProductCard}></Card>;
                                    
                                    case 'cosmetics':
                                        return <MegaCard {...item as IMegaCard}></MegaCard>
                                    case "article":
                                        return <Box sx={{maxWidth: {lg: "648px", md: "406.5px", xs: "168px"}}}>
                                                    <Article {...item as IArticle}></Article>
                                                </Box>
                                    case "galery":
                                        return <Box 
                                                    component={"img"} 
                                                    src={item as string}
                                                    sx={{
                                                        borderRadius: "10px",
                                                        objectFit: 'cover',
                                                        objectPosition: 'center',
                                                        width: {lg: "184px", md: "147.5px", xs: "111px"},
                                                        height: {lg: "184px", md: "147.5px", xs: "111px"}
                                                    }}
                                                />
                                    default:
                                        return null;
                                }
                            };

                            return (
                                <Box 
                                    key={index + scroll.type}
                                >
                                    {renderCard()}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
            {
                scroll.type == "galery" &&
                <Box sx={{display: "flex", justifyContent: "end"}} > 
                    <Button
                        component={Link}
                        to={"galery"}
                        variant="contained"
                        sx={{
                            minWidth: "179px",
                            height: "39px",
                            bgcolor: "#000",
                            textTransform: "none",
                            borderRadius: "82px"
                        }}
                    >
                        {t("AllPhotos")}
                    </Button>
                </Box>
            }
        </Box>
    )
}
export default Scroll;