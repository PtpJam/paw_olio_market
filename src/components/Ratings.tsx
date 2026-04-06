import { Box, Rating, Typography } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import type IRatings from "./interface/IRatings";

function Ratings(rating : IRatings){
    return(
        <Box sx={{display: "flex", gap: {lg: "11px", md: "10.5px", xs: "10px"}}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Typography sx={{
                    fontSize: {
                        lg: "36px",
                        md: "30px",
                        xs: "24px"
                    },
                }}>
                    {rating.countRating}
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px"}}>
                <Rating
                    name="text-feedback"
                    value={rating.countRating}
                    readOnly
                    precision={0.1}
                    emptyIcon={
                        <StarRoundedIcon 
                            fontSize="inherit"
                            sx={{
                                fill: "#9C9C9C",
                                width: "14.88px",
                                maxHeight: "14.34px",
                                transform: "scale(1.3)",
                                zIndex: 0,
                            }}
                        />
                    }
                    icon={
                        <StarRoundedIcon 
                            fontSize="inherit"
                            sx={{
                                zIndex: 1,
                                width: "14.88px",
                                maxHeight: "14.34px",
                                transform: "scale(1.3)"
                            }} 
                        />
                    }
                    sx={{
                        gap: "3px"
                    }}
                />
                <Typography sx={{fontSize: {lg: "12px", md: "10px", xs: "8px"}}}>
                    {rating.ratings.rating}{rating.ratings.unit} {rating.text}
                </Typography>
            </Box>
        </Box>
    )
}
export default Ratings;