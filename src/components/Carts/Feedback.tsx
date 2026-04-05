import { Box, Typography } from "@mui/material"
import type IFeedback from "../interface/IFeedback"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useTranslation } from "react-i18next";
import MoreVertIcon from '../../assets/svg/MoreVert.svg';
import Like from '../../assets/svg/Like.svg';
import LikeActive from '../../assets/svg/LikeActive.svg';

import { useState } from "react";

function Feedback(data : IFeedback){
    const {t} = useTranslation("feedbeak")
    const [dislikes, setDislikes] = useState<number>(data.disLike);
    const [likes, setLikes] = useState<number>(data.like);
    const [active, setActive] = useState<number>(data.likeActive ? 1 : (data.dislikeActive ? 2 : 0));

    // dis - 2 like - 1

    function DislikeHendler(){
        switch (active) {
            case 0: {
                setDislikes(dislikes+1);
                setActive(2);
                break;
            }
            case 1: {
                setLikes(likes-1);
                setDislikes(dislikes+1);
                setActive(2);
                break;
            }
            case 2: {
                setDislikes(dislikes-1);
                setActive(0);
                break;
            }
        }
    }

    function LikeHendler(){
        switch (active) {
            case 0: {
                setLikes(likes+1);
                setActive(1);
                break;
            }
            case 1: {
                setLikes(likes-1);
                setActive(0);
                break;
            }
            case 2: {
                setLikes(likes+1);
                setDislikes(dislikes-1);
                setActive(1);
                break;
            }
        }
    }

    return(
        <Box
            sx={{
                width: "100%",
                border: "1px solid #B7B7B7",
                borderRadius: '15px',
                boxSizing: "border-box",
                padding: {
                    lg: "18px 17px 19px",
                    xs: "18px 17px"
                },
                display: "flex",
                flexDirection: "column",
                gap: {
                    lg: "18px",
                    md: "16.5px",
                    xs: "15px" 
                }
            }}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                }}>
                    <Box
                        component={"img"}
                        src={data.avatar}
                        sx={{
                            width: "32px",
                            borderRadius: "100px"
                        }}
                    />
                    <Typography fontSize="16px">{data.name}</Typography>
                </Box>
                <Typography fontSize="16px" color="#A1ABFF99">{data.time}</Typography>
            </Box>
            <Typography sx={{
                fontSize: {
                    lg: "20px",
                    md: "16px",
                    xs: "12px",
                },
                textAlign: "justify",
                mb: "3px"
            }}>
                {data.description}
            </Typography>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Box 
                    sx={{
                        width: {
                            lg: "76px",
                            md: "63.5px",
                            xs: "51px"
                        },
                        height:{
                            lg: "36px",
                            md: "31px",
                            xs: "26px"
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "22px",
                        background: "#A1ABFF33",
                        fontSize: {
                            lg: "20px",
                            md: "16px",
                            xs: "12px"
                        },
                        gap: "2px",
                        alignItem: "center"
                    }}
                >
                    {data.star} 
                    <StarRoundedIcon 
                        sx={{
                            display: "flex",
                            mt: {md: "2px", xs: "1.5px"},
                            fill:"#FFB800",
                            width: {
                                lg: "25px",
                                xs: "16.5px"
                            },
                            height: "35px"
                        }}
                    />
                </Box>
                <Box sx={{display: "flex", alignItems: "center", gap: {lg: "20px", md: '15px', xs: "10px"}}}>
                    <Typography sx={{
                        color: "#A1ABFF",
                        fontSize:{
                            lg: "20px",
                            md: "16px",
                            xs: "12px"
                        }
                    }}>
                        {t("Answer")}
                    </Typography>
                    
                    <Box 
                        sx={{display: "flex", gap: {lg: "10px", md: "7.5px", xs: "5px"}}}
                        onClick={DislikeHendler}
                    >
                        <Box 
                            component={"img"}
                            src={active === 2 ? LikeActive : Like}
                            sx={{
                                rotate: "180deg",
                                transform: "scaleX(-1)"
                            }}
                        />
                        <Typography>{dislikes !== 0 && dislikes}</Typography>
                    </Box>
                    <Box
                        sx={{display: "flex", gap: {lg: "10px", md: "7.5px", xs: "5px"}}}
                        onClick={LikeHendler}
                    >
                        <Box component={"img"} src={active === 1 ? LikeActive : Like}/>
                        <Typography>{likes !== 0 && likes}</Typography>
                    </Box>

                    <Box component={"img"} src={MoreVertIcon} sx={{height: {lg: "24px", md: "20px", xs: "16px"}, }}/>
                </Box>
            </Box>
        </Box>
    )
}
export default Feedback