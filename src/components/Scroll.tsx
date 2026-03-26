import { Box, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Next from "../assets/svg/next.svg"
import Beak from "../assets/svg/beak.svg"

interface Iscroll{
    team: boolean; //true - black, false - white
    title?: string;
}
interface Props{
    scroll: Iscroll;
}

function Scroll({scroll} : Props){
    const [emblaRef, emblaApi] = useEmblaCarousel();

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
                        color: scroll.team ? "#0000" : "#fff",
                        fontSize: {
                            lg: "40px",
                            md: "36px",
                            xs: "32px"
                        }
                    }}>
                        {scroll.title}
                    </Typography>
                }
                <Box sx={{ display: "flex", gap: "10px",}}>
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
                <Box sx={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5,6,7].map(i => (
                    <Box
                    key={i}
                    sx={{
                        minWidth: 300,
                        height: 200,
                        background: "#111",
                        flexShrink: 0
                    }}
                    >
                    Slide {i}
                    </Box>
                ))}
                </Box>
            </Box>
        </Box>
        </Box>
    )
}
export default Scroll;