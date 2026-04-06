import { Box, Rating, Slider, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import type IRatingBlock from "./interface/IRatingBlock";
import Ratings from "./Ratings";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function RatingBlock(data : IRatingBlock){
    const {t} = useTranslation("feedbeak");
    const ratingKeys = ['five', 'four', 'three', 'two', 'one'] as const;

    return(
        <Box>
            <Typography sx={{fontSize: "11px"}}>
                {t("Average")} {data.title} {t("Rating")}
            </Typography>
            <Ratings {...data.rating}/>
            <Box>
                {ratingKeys.map((key, index) => {

                 return( 
                    <Box sx={{display: "flex", alignItems: "center", height: "16px"}} key={index}>
                        <Box>
                            <Rating
                                name="text-feedback"
                                value={index}
                                readOnly
                                precision={1}
                                emptyIcon={
                                    <StarRoundedIcon 
                                        fontSize="inherit"
                                        sx={{
                                            zIndex: 1,
                                            color: "#FFB800",
                                            width: "10.51px",
                                            maxHeight: "10.12px",
                                            transform: "scale(1.3)",
                                        }}  
                                    />
                                }
                                sx={{display: "flex", gap: "4.75px"}}
                                icon={
                                    <StarRoundedIcon 
                                        fontSize="inherit"
                                        sx={{
                                            opacity: 0,
                                            width: "10.51px",
                                            maxHeight: "10.12px",
                                            transform: "scale(1.3)"
                                        }} 
                                    />
                                }
                            />
                        </Box>
                        <Box sx={{width: "129px", ml: "8px", mr: "15.83px"}}>
                            <Slider 
                                disabled 
                                defaultValue={data.ratingCount[key]}
                                min={0}
                                max={data.allCount}
                                aria-label="Disabled slider"
                                sx={{
                                    '& .MuiSlider-thumb': {
                                        display: 'none',
                                    },
                                    '& .MuiSlider-track': {
                                        border: 'none',
                                        height: "4px",
                                        backgroundColor: "#FFB800", 
                                    },
                                    height: "4px",
                                    display: "flex",
                                    alignItems: "center"
                                }}    
                            />
                        </Box>
                        <Typography sx={{fontSize: "13px",}}>
                            {data.ratingCount[key]}
                        </Typography>
                    </Box>
                    )
                })}  
            </Box>
        </Box>
    )
}
export default RatingBlock