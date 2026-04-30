import { Box, Button, Divider, Typography } from "@mui/material"
import MoreHorizIcon from '../../assets/svg/MoreHorizIcon.svg';
import Arrow from '../../assets/svg/Arrow.svg';
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import Like from '../../assets/svg/Like.svg';
import LikeActive from '../../assets/svg/LikeActive.svg';
import Comentary from "../../assets/svg/Comments_Icon.svg"
import { Link } from "react-router";
import type IArticle from "../interface/IArticle";

function Article(articleData : IArticle){
    const { t } = useTranslation("article");
    const [emblaRef] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 1,         
    });

    const lengthFoto : number = articleData.foto.length

    const [likes, setLikes] = useState<number>(articleData.like);
    const [active, setActive] = useState<boolean>(articleData.active);

    function LikeHendler(){
        if(active) {
            setLikes(likes-1);
            setActive(false);
            return
        }
        else{
            setLikes(likes+1);
            setActive(true);
            return
        }
    }

    return(
        <Box 
            sx={{
                // maxWidth: {lg: "648px", md: "406.5px", xs: "168px"},
                width: "100%",
                border: "1px solid #00000033",
                padding: {lg: "30px", md: "20px", xs: "10px"},
                boxSizing: "border-box",
                borderRadius: "10px"
            }}
        >
            <Box display={"flex"} gap={"10px"}>
                <Divider orientation="vertical" flexItem 
                    sx={{
                        bgcolor: "#73843D",
                        borderRightWidth: 3,
                        borderRadius: "40px"
                    }}
                />

                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Box sx={{display: "flex", justifyContent: "space-between", mb: "20px"}}>
                        <Box 
                            component={Link}
                            to={`/user/${articleData.userId}`}
                            sx={{
                                textDecoration: "none",
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                                gap: {lg: "15px", md: "12.5", xs: "10px"}
                            }}
                        >
                            <Box 
                                component={"img"}
                                src={articleData.avatar}
                                sx={{
                                    width: {lg: "48px", md: "36.5px", xs: "25px"},
                                    height: {lg: "48px", md: "36.5px", xs: "25px"},
                                    borderRadius: "24px",
                                    objectFit: "cover",
                                    border: "1.5px solid #A1ABFF"
                                }}
                            />
                            <Box>
                                <Typography
                                    sx={{ 
                                        fontWeight: 550,
                                        fontSize: {lg: "20px", md: "16px", xs: "12px"}
                                    }}
                                >
                                    {articleData.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {lg: "16px", md: "12px", xs: "8px"},
                                        color: "#A1ABFF"
                                    }}
                                >
                                    {articleData.data} &bull; {articleData.time}
                                </Typography>
                            </Box>
                        </Box>
                        <Box component={"img"}
                            src={MoreHorizIcon}
                            sx={{
                                width: "20px",
                                height: {lg: "12px", md: "4.5px", xs: "3px"},
                                display: "flex",
                                alignItems: "start"
                            }}    
                        />
                    </Box>
                    <Typography 
                        fontSize={{
                            lg: "16px",
                            md: "12px",
                            xs: "8px"
                        }}
                    >
                        {articleData.description.slice(0, 92)}...
                    </Typography>
                    <Button
                        variant="outlined"
                        endIcon={
                            <Box 
                                component={"img"}
                                src={Arrow} 
                                sx={{
                                    width: {lg: "20px", md: "15.17px" ,xs: "10.34px"}
                                }}
                            />
                        }
                        sx={{
                            mt: {lg: "20px", md: "15px", xs: "10px"},
                            textTransform: "none",
                            borderRadius: "20px",
                            height: {
                                lg: "30px",
                                md: "25.5px",
                                xs: "21.13px", 
                            }
                        }}
                    >
                        {t("Read")}
                    </Button>
                    <Box ref={emblaRef} sx={{ overflow: "hidden", pt: "11px"}} className="inner-scroll-container">
                        <Box sx={{ display: "flex", gap: {lg: "20px", md: "12.5", xs: "5px"} }}>
                            {articleData.foto.map((url, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        flex: "0 0 auto",
                                        width: {lg: "342px", md: "231px", xs: "120px"},
                                        height: {lg: "236px", md: "159.5px", xs: "83px"},
                                        borderRadius: {lg: "20px", md: "15px", xs: "10px"},
                                        background: `
                                            linear-gradient(#73843D80, #73843D80),
                                            url(${url})
                                        `,
                                        backgroundSize: "cover",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: "flex",
                                        justifyContent:"center",
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={url}
                                        sx={{
                                            height: "100%",
                                            objectFit: "contain",
                                            borderRadius: "5px"
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            background: "#000",
                                            borderRadius: "100px",
                                            padding: {lg: "5.5px 6.5px", md: "4.5px 5px", xs: "3px 3.5px"},                                            
                                            fontSize: {lg: "18px", md: "12px", xs: "8px"},

                                            position: "absolute",
                                            right: {lg: "12px", md: "9px", xs: "6px"},
                                            top: {lg: "12px", md: "9px", xs: "6px"}
                                        }}    
                                    >
                                            {index+1}/{lengthFoto}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box 
                sx={{
                    pt: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    '& .MuiTypography-root': { 
                        fontSize: {lg: "19px", md: "15.5px", xs: "12px"},
                        fontWeight: 600
                    },
                }}
            >
                <Box
                    onClick={LikeHendler} 
                    sx={{
                        display: "flex",
                        gap: {lg: "10px", md: "6px", xs: "2px"},
                        cursor: "pointer"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Box 
                            component={"img"}
                            src={active ? LikeActive : Like}
                            sx={{
                                width: {lg: "20px", md: "16px", xs: "12px"},
                                height: {lg: "19px", md: "15px", xs: "11px"},
                            }}
                        />
                    </Box>
                    <Typography>{t("Like")}</Typography>
                    <Typography color="#00000059">{likes}</Typography>
                </Box>
                <Box 
                    component={Link}
                    to={`/articles/${articleData.id}/comments`}
                    sx={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: {lg: "10px", md: "6px", xs: "2px"},
                    }}
                >
                    <Box 
                        component={"img"} 
                        src={Comentary}
                        sx={{
                            width: {lg: "18.65px", md: "14.65px", xs: "10.66px"},
                            height: {lg: "17.76px", md: "14.21px", xs: "10.66px"}, 
                        }}
                    />
                    <Typography color="#000">{t("Comments")}</Typography>
                    <Typography color="#00000059">{articleData.comments}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Article