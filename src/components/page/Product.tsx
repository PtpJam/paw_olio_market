import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Botl from "../../assets/studBotl.png"
import ProductBtn from "../Buttons/ProductBtn";
import ScrollBar from "../Scroll"
import cardInfoData from "../Data/CardInfoData"
import { Map, Marker } from "pigeon-maps"
import ButtonNextBeak from "../Buttons/ButtonNextBeak";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ReactCountryFlag from "react-country-flag";
import CircleBtn from "../Buttons/CircleBtn";
import Hert from "../../assets/svg/hert.svg"
import Balance from "../../assets/svg/balans.svg";
import Sofa from "../../assets/svg/sofa.svg";
import Ratings from "../Ratings";
import Price from "../../assets/price.png"
import Man from "../../assets/svg/man.svg"
import Detali from "../Detali";
import SliderProductBlock from "../Slider/SliderProductBlock";
import type ISliderProductBlock from "../interface/ISliderProductBlock";
import DataSliderPlusFoto from "../Data/SliderPlusFotoData"
import SliderProductBlockNoImg from "../Slider/SliderProductBlockNoImg";
import SliderProductData from "../Data/SliderProductBlockNoImgData";
import InstalApp from "../Carts/InstalApp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Bread from "../../assets/svg/bread.svg"
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import combination from "../../assets/combination.png"
import SearchBox from "../SearchBox";
//import combData from "../Data/CombData";
import CombBlock from "../CombBlock";
import FeedbackBlock from "../FeedbackBlock";
import RatingBlock from "../RatingBlock";
import RatingBlockData from "../Data/RatingBlockData";
import { useEffect, useState } from "react";
import {ProductsData } from "../api/CardApi";
import type IProductCard from "../interface/IProductCard";
import type IProduct from "../interface/IProduct";
import { imgPath } from "../api/Path";
import type ICombBlock from "../interface/ICombBlock";

const data : ISliderProductBlock[] =[
    {
        title: "Aromas",
        countFeedback: 429,
        param: [DataSliderPlusFoto[0], DataSliderPlusFoto[1], DataSliderPlusFoto[2]]
    },
    {
        title: "Tastes",
        countFeedback: 315,
        param: [DataSliderPlusFoto[3], DataSliderPlusFoto[4], DataSliderPlusFoto[5]]
    }
]
const comb : string[] = [combination, combination, combination]

function Product(dataProduct : IProduct){
    const {t} = useTranslation("product")

    const [cardGet, cardSet] = useState<IProductCard[]>([]);
    
    useEffect(() => {
        const fetchData = async() => {
            const data = await ProductsData(false);
            if(data){
                cardSet(data)
            }
        }
        fetchData()
    }, [])

    return(
        <>
            <Box>
                <Box>
                    {/* Block head */}
                    <Box sx={{ 
                        display: "flex", 
                        justifyContent: { md: "center", xs: "left" }, 
                        position: "relative",
                        overflow: {
                            md: "hidden",
                            xs: "visible"
                        },
                        backgroundColor: "#fff",
                    }}>    
                        <Box sx={{position: "relative",
                            zIndex: 11, 
                            padding: {
                                lg: "86px 60px 134px",
                                md: "53px 42px 74px",
                                xs: "20px 15px 15px"
                            },
                            display: "flex",
                            flexDirection: "column",
                            gap: {
                                lg: "20px",
                                md: "15px",
                                xs: "10px"
                            },
                            width: "100%"
                        }}>
                            <ProductBtn active={0}></ProductBtn>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize:{
                                            lg: "115px",
                                            md: "80px",
                                            sm: "32px",
                                            xs: "24px"
                                        },
                                        flexGrow: 1,
                                        mb: "12px",
                                        letterSpacing: "0%",
                                        lineHeight: "100%",
                                        textAlign: {
                                            md: "center",
                                            xs: "start"
                                        },
                                        width: {
                                            md: "100%",
                                            sm: "300px",
                                            xs: "192px"
                                        },
                                        textTransform: "uppercase",
                                        color: "#000",
                                        mixBlendMode: "difference",
                                        textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)", 
                                    }}  
                                >
                                    {dataProduct.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "24px",
                                            md: "18px",
                                            sm: "15px",
                                            xs: "12px"
                                        },
                                        textAlign: {
                                            md: "end",
                                            xs: "start"
                                        },
                                    }}
                                >
                                    {dataProduct.brand}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                                display: "flex",
                                zIndex: 10,
                                overflowX: "clip",
                                position: "absolute", 
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: "100%", 
                                justifyContent: "center",
                                '& img': {
                                    position: "absolute",
                                    height: "100%",
                                    width: "auto",
                                    textAlign: "center",
                                    objectFit: "contain",
                                    bottom: {
                                        md: 0,
                                        xs: "-39px"
                                    },
                                }
                            }}>
                                <Box 
                                    component="img" 
                                    src={dataProduct?.image ? imgPath+dataProduct?.image : Botl} 
                                    sx={{
                                        transform: {lg: "translateX(-40%)", md: "translateX(-30%)"},
                                        display: { md: "flex", xs: "none" },
                                    }}
                                />
                                <Box 
                                    component="img" 
                                    src={dataProduct?.image ? imgPath+dataProduct?.image : Botl}
                                    sx={{
                                        transform: {lg: "translateX(40%)", md: "translateX(30%)", xs: "translateX(98%) scale(1.5)"},
                                    }} 
                                />
                        </Box>
                    </Box>
                </Box>
                {/*block info*/}
                <Box sx={{
                    background: "#000",

                    padding: {
                        lg: "30px 101px",
                        md: "25px 20px",
                        xs: "20px"
                    }
                }}>
                    <Box sx={{color: "#FFFFFF"}}>
                        {/* {folow and } */}
                        <Box sx={{
                            display: "flex",
                            gap: "5px",
                            mb: {lg: "29px", md: "23,5px", xs:"18px"}
                        }}>
                            <CircleBtn src={Sofa} backg={"#A1ABFF4D"} sx={{display: {md: "flex", xs: "none"}}}></CircleBtn>
                            <CircleBtn src={Balance} backg={"#A1ABFF4D"}></CircleBtn>
                            <CircleBtn src={Hert} backg={"#A1ABFF4D"}></CircleBtn>
                        </Box>
                        <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                rowGap:"20px",
                                columnGap:"100px",
                                flexDirection: {md: "row", xs:"column"},
                                 position: "relative"}}>
                            {/* {price and rate} */}
                            <Box 
                                sx={{
                                    zIndex: 11,
                                    display: "flex",
                                    flexDirection: {md: "column", xs: "row"},
                                    gap:'52px',
                                    justifyContent: "space-between",                                
                                }}>
                                <Box sx={{
                                        display: "flex",
                                        flexDirection:  "column",
                                        gap:{lg: "15px", md:"16.5", xs: "18px"},
                                        width: "fit-content"
                                    }}
                                    >
                                    <Box
                                        sx={{
                                            background: `url(${Price})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",

                                            padding: "23px 41.43px 24.43px 27px",
                                            display: "flex",
                                            alignItems: "center",
                                            boxSizing: "border-box",
                                            borderRadius: '12px', 
                                            height: {
                                                lg: "85.43px",
                                                md: "66.465px",
                                                xs: "47.5px"
                                            },     
                                            justifyContent: "center",
                                        }} >
                                        <Typography
                                            sx={{
                                                fontSize:{
                                                    lg: "48px",
                                                    md: "36px",
                                                    xs: "24px"
                                                }
                                            }}
                                        >
                                            ${dataProduct.averagePrice}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{wordBreak: "break-word", whiteSpace: "normal", fontSize:{lg: "20px", md: "16px", xs:"12px"}}}>
                                        {t("AveragePrice")} {dataProduct.volume} {dataProduct.volume_type}.
                                    </Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column", gap: {lg: "20px", md: "15px", xs: "10px"}}}>
                                    <Ratings 
                                        countRating={cardInfoData.infoProduct.rateCount}
                                        ratings={cardInfoData.infoProduct.ratings}
                                        text={t("Ratings")}    
                                    >
                                    </Ratings>
                                    <Box width={{lg: "455px", md: "299.5px", xs: "144px"}}>
                                        <Button 
                                            endIcon={ 
                                                <StarRoundedIcon fontSize="inherit"
                                                sx={{
                                                    transform: {
                                                        lg: "scale(1)",
                                                        md: "scale(1.15)",
                                                        xs: "scale(1.3)"
                                                    },
                                                    fill:"rgb(255, 118, 64)",
                                                    width: {
                                                        lg: "32px",
                                                        md: "24px",
                                                        xs: "14.88px"
                                                    },
                                                    height: {
                                                        lg: "32px",
                                                        md: "24px",
                                                        xs: "14.34px"
                                                    }   
                                                }}
                                                />
                                            }
                                            sx={{
                                                textTransform: "none",
                                                width: "100%",
                                                background: "#fff",
                                                color: "#000",
                                                borderRadius: "66px",
                                                fontSize: {
                                                    lg: "20px",
                                                    md: "16px",
                                                    xs: "12px"
                                                }
                                            }}
                                        >
                                            {t("WillRate")}
                                        </Button>

                                    </Box>
                                </Box>
                            
                            </Box>
                            {/* {Botl img} */}
                            <Box zIndex={10}
                                component={"img"} 
                                src={dataProduct?.image ? imgPath+dataProduct?.image : Botl}
                                sx={{
                                    height: {
                                        lg: "900px",
                                        md: "800px",
                                    },
                                    display:{
                                        md: "block",
                                        xs: "none"
                                    },
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    bottom: {
                                        lg: "-150px",
                                        md: "-150px",
                                    },
                                    right: 0,
                                }}
                            />
                            {/* {Certificates / awards} */}
                            <Box zIndex={11} sx={{
                                maxWidth: {
                                    lg: "400px",
                                    md: "330px"
                                },
                                minWidth:{
                                    xs: {
                                        md: "310px"    
                                    }
                                },
                                width:{
                                    lg: "450px",
                                    md: "450px"
                                }
                            }}>
                                {/* {cetificate} */}
                                {(dataProduct.certificates_generated && dataProduct.certificates_generated.length > 0) && 
                                    <Box sx={{mb: "76px",display: {md: "block", xs: "none"}}}>
                                        <Typography sx={{
                                            fontSize: {
                                                lg: "32px",
                                                md: "28px",
                                                xs: "24px"
                                            }
                                        }}>
                                            {t("Certificates")}
                                        </Typography>
                                        <Box sx={{display: "flex", gap:"10px"}}>
                                            {dataProduct.certificates_generated.map((item, index)=> (
                                                <Box
                                                    key={index} 
                                                    component={"img"}
                                                    sx={{
                                                        width: "90px",
                                                        height: "90px"
                                                    }}
                                                    src={imgPath+item.image}
                                                />   
                                            ))}
                                        </Box>
                                        
                                    </Box>
                                }
                                {/* {awards} */}
                                {(dataProduct.awards_generated && dataProduct.awards_generated.length > 0) && 
                                    <Box>
                                        <Box sx={{mb: "5px",display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        lg: "32px",
                                                        md: "28px",
                                                        xs: "24px"
                                                    }
                                                }}
                                            >
                                                {t("Awards")}
                                            </Typography>
                                            <ButtonNextBeak width={{lg: 47, md: 38.5, xs:30}} team={false} color="#FFFFFF99" nextBack={true}></ButtonNextBeak>
                                        </Box>
                                        <Grid 
                                            container
                                            spacing={1} 
                                            sx={{
                                                gap: {lg: "0", xs: "2px"},
                                                justifyContent: "space-between",
                                                flexWrap: "wrap",
                                                width: {lg: "457px"},
                                                mt: "10px"
                                            }}>
                                            {dataProduct.awards_generated.map((item, index)=> (
                                                    <Grid size={6}
                                                        key={index}
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent: index % 2 !== 0 ? "flex-end" : "flex-start",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            mb: 2,
                                                        }}
                                                    >
                                                        <Box 
                                                            src={imgPath+item.image}
                                                            component={"img"}
                                                            sx={{width: {lg: "75px", md: "58.5px", xs: "42px"}}}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                fontSize:{
                                                                    lg: "16px",
                                                                    md: "14px",
                                                                    xs: "12px"
                                                                },
                                                                fontWeight: 500,
                                                                lineHeight: 1.2,
                                                                maxWidth: {
                                                                    lg: "110px",
                                                                    md: "95px",
                                                                    xs: "80px"
                                                                }  
                                                            }}
                                                        >
                                                            {item.medal} {item.year} 
                                                            <br />
                                                            {item.title}
                                                        </Typography>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </Box>
                                }
                            </Box>
                        </Box>
                    </Box> 
                </Box>
                {/* {Important details} */}
                <Box sx={{
                    padding: {
                        lg: "156px 34px 62px 62px",
                        md: "80px 30px 50px 50px",
                        xs: "20px 21px"
                    }
                }}>
                    <Grid container spacing={2}>
                        <Grid size={{sm: 9, xs:7 }}>
                            <Typography sx={{
                                fontSize:{
                                    lg: "40px",
                                    md: "32px",
                                    xs: "24px"
                                },
                                mb: {
                                    lg: "40px",
                                    md: "25px",
                                    xs: "10px"
                                }
                            }}>
                                {t("ImpDetal")}
                            </Typography>
                            <Grid container columnSpacing={{lg: 20, md: 3}} rowSpacing={{lg: 5, xs: 1}}>
                                {cardInfoData.ImpDetal.map((item, index) => (
                                    <Grid size={{md: 6, xs: 12}} key={index} sx={{display: "flex", alignItems: "center"}}>
                                        <Detali description={item.description} src={item.src}></Detali>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid size={{sm: 3, xs:5 }} sx={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                            <Box 
                                component={"img"}
                                src={Man}
                                sx={{
                                    height:{lg: "431px", md: "334px",xs:"237px"}
                                }}/>
                        </Grid>
                    </Grid>
                </Box>
                {/*block For you*/}
                <Box sx={{
                    background: "#000",
                    padding: {
                        lg: "62.5px 67px",
                        md: "40px 30px",  
                        xs: "20px 12.5px 20.5px"
                    }
                }}>
                    <ScrollBar scroll={{team: false, title: t("ForYou"), type: "product", items: cardGet }}></ScrollBar>
                </Box>
                {/* analis */}
                <Box sx={{
                    padding: {
                        lg: "39px 32px 39px 101px",
                        md: "30px 40px",
                        xs: "20px"
                    }
                }}>
                    <Grid container mb={"45px"} columnSpacing={{lg: "69px", md: "69px", xs: 0}} rowSpacing={"20px"}>
                        <Grid size={{md: 6, xs: 12}}>
                            <SliderProductBlockNoImg {...SliderProductData}/>
                        </Grid>
                        <Grid size={{md: 6, xs: 12}} sx={{display: {md: "block", xs: "none"}}}>
                            <InstalApp/>                            
                        </Grid>
                    </Grid>
                    <Grid container columnSpacing={{lg: "69px", md: "69px", xs: 0}} rowSpacing={"20px"}>
                        {data.map((item, index) =>(
                            <Grid size={{md: 6, xs: 12}} key={index}>
                                <SliderProductBlock {...item}></SliderProductBlock>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/* {carusel} */}
                <Box
                    sx={{
                        padding:{
                            lg: "69.15px 67px",
                            md: "44.57px 46.75px",
                            xs: "20px 26.5px"
                        },
                        background: "#000000",
                        color: "#fff"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "40px",
                                md: "32px",
                                xs: '24px'
                            },
                            mb: {
                                lg: "20px",
                                md: "15px",
                                xs: "10px",

                            }
                        }}
                    >
                        {t("CombinatDishes")}
                    </Typography>

                    <Grid container columnSpacing={"60px"} rowSpacing={"20px"}>
                        <Grid size={{md: 6, xs:12}}>
                            <Box
                                component={Swiper}
                                modules={[Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 10000 }}
                                sx={{
                                    height: {
                                        lg: "308.97px",
                                        md: "235.95px",
                                        xs: "162.94px"
                                    },
                                    "--swiper-pagination-color": "#56C1E9",
                                    "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": {
                                        lg: "12px",
                                        md: "9.17px",
                                        xs: "6.34px"
                                    },
                                    "--swiper-pagination-bullet-horizontal-gap": {
                                        lg: "8px",
                                        md: "6.11px",
                                        xs: "4.22px"
                                    },
                                    pb: {
                                        lg: "56.36px",
                                        md: "43.04px",
                                        xs: "29.72px"
                                    },
                                }}
                            >
                                {comb.map((item, index) => (
                                    <SwiperSlide>
                                        <Box 
                                            key={index}
                                            component={"img"}
                                            src={item} 
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block',
                                                borderRadius: "20px"
                                            }}
                                        />     
                                    </SwiperSlide>
                                ))}
                            </Box>
                        </Grid>
                        <Grid 
                            size={{md: 4, xs:12}}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: {
                                    lg: "30px",
                                    md: "20px",
                                    xs: "10px"
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize:{
                                        lg: "32px",
                                        md: "24px",
                                        xs: "16px"
                                    },
                                }}
                            >
                                {t("AlsoCombines")}
                            </Typography>
                            <Box sx={{display: "flex", columnGap: "10px", rowGap: "9px", flexWrap: "wrap"}}>
                                {dataProduct.foodPairings?.map((item, index) => {
                                    const itemData : ICombBlock= {
                                        title: item,
                                        color: "#8A6914",
                                        bgColor: "#FFE194",
                                        src: Bread
                                    }
                                    return <CombBlock {...itemData} key={index}/>
                                })}
                            </Box>
                            <Box>
                                <SearchBox/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/* {Instal app} */}
                <Box
                    sx={{
                        display: {md: "none", xs: "block"},
                        padding: "20px"
                    }}
                >
                    <InstalApp></InstalApp>
                </Box>
                {/* {Feedbacks} */}
                <Box
                    sx={{
                        padding: {
                            lg: "55px 67.5px",
                            md: "37.5px 42.5px",
                            xs: "20px 17.5px"
                        }
                    }}
                >
                    <Grid container columnSpacing={"50px"} rowSpacing={"20px"}>
                        <Grid size={{lg: 8, md: 12, xs: 12}}>
                            <FeedbackBlock all={false} />
                        </Grid>
                        <Grid 
                            size={{lg: 4, md: 12, xs: 12}}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "40px"
                            }}
                        >
                            <RatingBlock {...RatingBlockData[0]}/>
                            <RatingBlock {...RatingBlockData[1]}/>
                        </Grid>

                    </Grid>
                </Box>
                {/* block info company */}
                <Box sx={{
                    background: "#000",
                    color: "#fff",
                    padding:{
                        lg: "30px 62px",
                        md: "30px 43px",
                        xs: "30px 25px"
                    },
                    display: {
                        lg: "flex",
                        md: "block"
                    },
                    gap:{
                        lg: "88px",
                        md: "44px"
                    }
                }}>
                    <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1.2,
                            gap: {lg: "74px", md: "47px", xs: "20px"},
                        }}>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Typography 
                                    sx={{
                                        color:"#A4C245",
                                        fontSize: {
                                            lg: "100px",
                                            md: "62px",
                                            xs: "24px"
                                        },
                                        lineHeight: "100%"
                                        
                                    }}
                                    >
                                        {dataProduct.brand}
                                    </Typography>
                                <Typography sx={{
                                    textAlign: "end",
                                    fontSize: {
                                        lg: "20px",
                                        md: "18px",
                                        xs: "12px"
                                    }
                                }}>
                                    {t("Manufacturer")}
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <ButtonNextBeak width={{lg: 59, md:51, xs:43}} nextBack={true} team={false}/>
                            </Box>
                        </Box>
                        <Box>
                            <Typography 
                                sx={{
                                    fontSize: {
                                        lg: "20px",
                                        md: "18px",
                                        xs: "12px"
                                    },
                                    display: "flex",
                                     wordBreak: "break-word",
                                    whiteSpace: "pre-line"
                                }}
                            >
                                {cardInfoData.info.description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box flex={1.5} sx={{display: "flex", flexDirection: "column", gap: "20px", mt: {md: "20px", xs: "20px"}}}>
                        <Box 
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: {lg: "20px", md:"15px", xs: "10px"},
                                flexWrap: "wrap",
                                justifyContent: {lg: "end", md: "start"}
                            }}>
                            <Box 
                                sx={{
                                    display: "flex",
                                    background: "#A1ABFF4D",
                                    borderRadius: "49px",
                                    width: "fit-content",
                                    minWidth: {
                                        lg: "166px",
                                        md: "134.5px",
                                        xs: "103px"
                                    },
                                    height:{
                                        lg: "53px",
                                        md: "41.5px",
                                        xs: "30px"
                                    },
                                    padding:{
                                        lg: "11.91px 12.8px",
                                        md: "9.035px 11.66px",
                                        xs: "6.16px 10.53px"  
                                    },
                                    boxSizing: "border-box",
                                    alignItems: "center",
                                    gap: {
                                        lg: "11.19px",
                                        md: "10.95px",
                                        xs: "10.72px"
                                    }
                                }}>
                                <Box 
                                    component={ReactCountryFlag}
                                    countryCode={cardInfoData.info.codeCountry}
                                    svg
                                    sx={{
                                        width: {
                                            lg: "30px !important",
                                            md: "25px !important",
                                            xs: "20px !important",
                                        },
                                        height: {
                                            lg: "30px !important",
                                            md: "25px !important",
                                            xs: "20px !important",
                                        },
                                        borderRadius: "50%",
                                        objectFit: 'cover',
                                        flexShrink: 0, 
                                    }}   
                                />
                                <Typography sx={{
                                    fontSize: {
                                        lg: "15px",
                                        md: "13.5px",
                                        xs: "12px"
                                    }
                                }}>
                                    {dataProduct.country} {dataProduct.region}
                                </Typography>
                            </Box>
                            <Box sx={{display: "inline-flex", gap:"10px", whiteSpace: "nowrap"}}>
                                <Typography sx={{display: "flex", alignItems: "center"}}>
                                    {t("OverallRating")}
                                </Typography>
                                <Box 
                                    sx={{
                                        width: {
                                            lg: "86px",
                                            md: "79px",
                                            xs: "72px"
                                        },
                                        height:{
                                            lg: "36px",
                                            md: "32px",
                                            xs: "28px"
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
                                        gap: "5px",
                                        alignItem: "center"
                                    }}
                                >
                                    {cardInfoData.info.starCount} 
                                    <StarRoundedIcon fontSize="inherit"
                                        sx={{
                                            fill:"#FFB800",
                                            width: "19px",
                                            height: "18px"    
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Typography
                                sx={{
                                    color: "#A1ABFF",
                                    fontSize: {
                                        lg: "20px",
                                        md: "16px",
                                        xs: "12px"
                                    }
                                }}
                            >
                                {t("AllRatings")} {cardInfoData.info.countRating}
                            </Typography>
                        </Box>
                        <Box>
                            <Box 
                                component={"img"}
                                src={cardInfoData.info.src}
                                sx={{
                                    borderRadius: "20px",
                                    width: "100%"
                                }}
                            />
                        </Box>
                    </Box>

                </Box>
                {/*Map*/}
                <Box 
                    sx={{
                        height: {
                            lg: "475px",
                            md: "301.5px",
                            xs: "128px"
                        },

                        '& > div': { 
                            height: '100% !important' 
                        },  
                    }}>
                    <Map 
                        
                        defaultCenter={[cardInfoData.map.x, cardInfoData.map.y]}
                        defaultZoom={10}
                        mouseEvents={false}
                        touchEvents={false}
                        metaWheelZoom={false}
                    >
                        <Marker  width={40} anchor={[cardInfoData.map.x, cardInfoData.map.y]} />
                    </Map>
                </Box>
                {/*block For you*/}
                <Box sx={{
                    padding: {
                        lg: "20.5px 67px 62.5px 67px",
                        md: "20px 40px 65px",  
                        xs: "20px 12.5px 71.9px"
                    }
                }}>
                    <ScrollBar scroll={{team: true, title: t("ForYou"), type: "product", items: cardGet }}></ScrollBar>
                </Box>
            </Box>
        </>
    )
}
export default Product