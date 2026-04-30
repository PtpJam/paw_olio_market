import { Box, Button, Grid, Typography } from "@mui/material"
import ProfileUserHead from "../ProfileUserHead"
import profileUserHeadData from "../Data/ProfileUserHeadData"
import { useTranslation } from "react-i18next";
import {articleDataArr} from "../Data/ArticleData"
import Article from "../Carts/Article";

function ProfileUser(){
    const {t} = useTranslation("profileDesc");

    return(
        <Box>
            <ProfileUserHead {...profileUserHeadData}/>
            <Box
                sx={{ 
                    p: {
                        lg: "65px 69px 41.56px 60px", 
                        md: "42.5px 45.25px 27.78px 40.75px",
                        xs: "20px 21.5px 14px"
                    }
                }}
            >
                <Typography
                    sx={{
                        fontSize: {lg: "36px", md: "30px", xs: "24px"},
                        fontWeight: 500,
                        pb: "20px"
                    }}
                >
                    {t("Posts")}
                </Typography>
                <Grid
                    container
                    columnSpacing={{lg: "20px", md: "15px", xs: "10px"}}
                    rowSpacing={"20px"}
                >
                    {articleDataArr.slice(0, 4).map((item, index) => (
                        <Grid key={index} size={6}>
                            <Article {...item}></Article>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button 
                        variant="outlined"
                        sx={{
                            mt: "20px",
                            borderColor: "#9B9B9B",
                            color: "#00000066",
                            textTransform: "none",
                            borderRadius: "52px",
                            height: "42px",
                            padding: "0 30px",
                        }}
                    >
                        {t("MorePosts")}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
export default ProfileUser