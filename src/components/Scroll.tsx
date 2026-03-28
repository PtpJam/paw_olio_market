import { Box, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Next from "../assets/svg/next.svg"
import Beak from "../assets/svg/beak.svg"
import News, { type NewsProps } from "./News";
import type CardProps  from "./interface/ICard";
import Card from "./Card";
import MegaCard from "./MegaCard";
import type IMegaCard from "./interface/IMegaCard";

interface Iscroll{
    team: boolean; //true - black, false - white
    title?: string;
    type: string; // news, сosmetics, product
    items: (NewsProps | CardProps | IMegaCard)[];
}
interface Props{
    scroll: Iscroll;
}

function Scroll({scroll} : Props){
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 1, 
        breakpoints: {
            '(max-width: 899px)': { 
                slidesToScroll: scroll.type === "product" ? 2 : 1 
            }
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
                justifyContent: scroll.title ? "space-between" : "flex-end"    
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
                    <Box 
                        component={"img"}
                        src={Beak}
                        onClick={scrollPrev}
                        sx={{ 
                            cursor: "pointer",
                            width: {
                                lg: "22px",
                                md: "19.4px",
                                xs: "18.8px"
                            },
                            height:{
                                lg: "11px",
                                md: "9.53px",
                                xs: "12.06px"
                            },
                            padding: {
                                lg: "15px 10px",
                                xs: "15px 11px"
                            },
                            borderRadius: "100%",
                            border: scroll.team ? "1px solid #00000033" : "2px solid #fff",
                            filter: scroll.team ? 'brightness(0)' : 'brightness(0) invert(1)',
                        }}
                    />
                    <Box
                        component={"img"}
                        src={Next}
                        onClick={scrollNext}
                        sx={{ 
                            cursor: "pointer",
                            width: {
                                lg: "22px",
                                md: "19.4px",
                                xs: "18.8px"
                            },
                            height:{
                                lg: "11px",
                                md: "9.53px",
                                xs: "12.06px"
                            }, 
                            padding: {
                                lg: "15px 10px",
                                xs: "15px 11px"
                            },
                            borderRadius: "100%",
                            border: scroll.team ? "1px solid #00000033" : "2px solid #fff",
                            filter: scroll.team ? 'brightness(0)' : 'brightness(0) invert(1)',
                        }}
                        />  
                </Box>          
            </Box>

        <Box sx={{ position: "relative" }}>
            <Box ref={emblaRef} sx={{ overflow: "hidden" }}>
                <Box 
                  sx={{
                    display: "flex",
                    flexDirection: {
                        lg: "row",
                        md: "row",
                        xs: scroll.type === "product" ? "column" : "row"
                    },
                    flexWrap: {
                        lg: "nowrap",
                        md: "nowrap",
                        xs: scroll.type === "product" ? "wrap" : "nowrap"
                    },

                    height: {
                        lg: "auto",
                        md: "auto",
                        xs: scroll.type === "product" ? "515px" : "auto" 
                    },
                    gap: {
                        lg: "10px",
                        md: "7.5px",
                        xs: "5px"
                    },

      
                }}>
                    {scroll.items.map((item, index) => {
                        const renderCard = () => {
                            switch (scroll.type) {
                                case 'news':
                                    return <News {...item as NewsProps} ></News>;
                                
                                case 'product':
                                    return <Card {...item as CardProps}></Card>;
                                
                                case 'cosmetics':
                                    return <MegaCard {...item as IMegaCard}></MegaCard>
                                
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
        </Box>
    )
}
export default Scroll;