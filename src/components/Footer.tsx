import { Box, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./css/Footer.css"
import Visa from "../assets/svg/visa.svg"
import Master from "../assets/svg/logos_mastercard.svg"
import Aple from "../assets/svg/logos_apple-pay.svg"
import Google from "../assets/svg/logos_google-pay.svg"

import YouTube from "../assets/svg/icomoon-free_youtube.svg"
import TickTok from "../assets/svg/mingcute_tiktok-fill.svg"
import Instagram from "../assets/svg/formkit_instagram.svg"
import FaceBook from "../assets/svg/ic_outline-facebook.svg"
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import ApleGoogleApp from "./ApleGoogleApp";

interface SocialMediaItem {
  icon: string;
  url: string;
}

const socialMedias : SocialMediaItem[] = [
    {
        icon: FaceBook,
        url: "https://www.facebook.com/profile.php?id=61581609453105"
    },
    {
        icon: YouTube,
        url: "https://www.youtube.com/@VivoOlioEng",
    },
    {
        icon: Instagram,
        url: "https://www.instagram.com/vivoolioeng/"
    },
    {
        icon: TickTok,
        url: "https://www.tiktok.com/@vivoolio_eng"
    }
]

function Footer(){
    const { t } = useTranslation("header");
    const { t: tFooter } = useTranslation("footer"); 

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    const path = ["/oil", "/cosmetics", "/dishes", "/dietary_supplements"]

    const location = useLocation();
    const currentTab = location.pathname;
    const tabValue = path.includes(currentTab) ? currentTab : false
    
    function PayAndDoun(){
        return(
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap: "40px",
                m: { xs: "60.5px 0", sm: "60.5px 0", md: "0"}
            }}>
                <Box sx={{
                    display:"flex",
                    gap: {
                        lg: "24.35px",
                        md: "22.175px",
                        xs: "20px"
                    },
                    '& .MuiBox-root': {
                        height: {
                            lg: "23px",
                            md: "15.98px",
                            xs: "8.97px"
                        },
                        '& img': {
                            height: "100%",
                            display: "block"
                        }
                    }
                }}>
                    <Box><img src={Visa} alt="" /></Box>
                    <Box><img src={Master} alt="" /></Box>
                    <Box><img src={Aple} alt="" /></Box>
                    <Box><img src={Google} alt="" /></Box>
                </Box>

                <ApleGoogleApp Isfooter={true}/>

            </Box>
        )
    }

    return(
        <>
            <footer>
                <Box sx={{
                    padding: {
                        lg: "40px 64px 56px 40px",
                        md: "30px 40px",
                        xs: "20px 30px"
                    },
                    display:{sm: "block", md: "flex"},
                    justifyContent: "space-between",
                    gap: {lg: "276px", md: "50px"}
                }}>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    gap: {
                        lg: "185px",
                        md: "117px",
                        xs: "49px"
                    },
                  }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap: "32px"
                    }}>
                        <Box 
                            component={Link}
                            to={"/"}
                            sx={{
                                textDecoration: "none",
                                '& .MuiTabs-indicator': { display: 'flex' },

                                alignItems:"center",
                                display: { 
                                    xs: 'flex', 
                                    '@media (min-width: 825px)': { display: 'flex' } 
                                }
                            }}
                            
                        >
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { 
                                        lg: '32px',  
                                        md: "28px",
                                        xs: '24px',  
                                    },
                                    fontWeight: "700",
                                    color: "#fff"
                                }}
                            >
                                VivoOlio
                            </Typography>
                        </Box>
                        <Box sx={{
                                display: "flex",
                                mb: {md: 0, sm:"32px", xs: "32px"} 
                            }}>
                                <Tabs 
                                    value={tabValue}
                                    TabIndicatorProps={{style: { display: 'none' }}}
                                    sx={{
                                        '& .MuiTabs-flexContainer': {
                                            flexWrap: 'wrap', 
                                            columnGap: {
                                                lg: "41px",
                                                md: "30.5px",
                                                xs: "20px"
                                            }
                                        }, 
                                        '& .MuiTab-root': {
                                            fontSize: {
                                                lg: '16px',  
                                                md: "14px",
                                                xs: '10.5px',  
                                            },
                                            '&:focus': {
                                                outline: 'none !important',
                                            },
                                            '&.Mui-selected': {
                                                color: '#fff !important', 
                                            },
                                            color: "#fff",
                                            lineHeight: "140%", 
                                            flexWrap: "wrap"
                                        },
                                    }} >
                                    <Tab component={Link} to={"/"} value={"/"} className="hideElement"/>
                                    <Tab component={Link} to={path[0]} value={path[0]} disableRipple className="tab" label={t("TabsMenu.oil")}></Tab>
                                    <Tab component={Link} to={path[1]} value={path[1]} disableRipple className="tab" label={t("TabsMenu.cosmetics")}></Tab>
                                    <Tab component={Link} to={path[2]} value={path[2]} disableRipple className="tab" label={t("TabsMenu.dishes")}></Tab>
                                    <Tab component={Link} to={path[3]} value={path[3]} disableRipple className="tab" label={t("TabsMenu.DIetary")}></Tab>
                                </Tabs>
                        </Box>
                    </Box>
                    {(!isSm && !isXs) && PayAndDoun()}
                  </Box>
                  <Box 
                  sx={
                    {
                        display: {
                            sm: "block",
                            md: "flex"
                        },
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flex: 1,
                        minWidth: 0,
                    }
                  }> 
                    <Box sx={{
                        display: {
                            md: "flex",
                            sm: "grid",
                            xs: "flex",
                        },
                        flexWrap: "wrap",
                        gridTemplateColumns: {
                            lg: "repeat(4, 1fr)", 
                            md: "repeat(3, 1fr)",
                            sm: "repeat(4, 1fr)",
                        },
                        rowGap: "10px",
                        columnGap: {
                            lg: "57px",
                            md: "34.3px",
                            xs: "11.67px"
                        },
                        fontWeight: 400,
                        '& .MuiTypography-root': {
                            fontSize: {
                                lg: "16px",
                                md: "14px",
                                xs: "12px"
                            },
                            whiteSpace: "nowrap",
                            color: "#FFFFFF",
                            cursor: "pointer",
                            textDecoration: "none"
                        },
                        lineHeight: "100%"
                    }}>
                        <Typography component={Link} to={"/aboutus"}>{tFooter("AboutUs")}</Typography>
                        <Typography>{tFooter("NewsBlog")}</Typography>
                        <Typography component={Link} to={"/privacypolicy"}>{tFooter("PrivacyPolicy")}</Typography>
                        <Typography component={Link} to={"/currentpolicy"}>{tFooter("CurrentPolicy")}</Typography>
                        <Typography component={Link} to={"/contacts"}>{tFooter("Contacts")}</Typography>
                        <Typography component={Link} to={"/termsofsale"}>{tFooter("TermOfSale")}</Typography>
                        <Typography component={Link} to={"/termsofuse"}>{tFooter("TermOfUse")}</Typography>
                    </Box>
                    {(isSm || isXs) && PayAndDoun()}
                    <Box sx={{display: "flex", justifyContent:"space-between"}}>
                        <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
                            <Typography sx={{
                                color:"#FFFFFF8C",
                                fontSize: {
                                    lg: "20px",
                                    md: "16px",
                                    xs: "12px"
                                },
                                lineHeight: "130%",
                                letterSpacing: "4%",
                                textTransform: "uppercase"

                            }}>
                                {tFooter("SocialMedias")}
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                height: "20px",
                                gap: {
                                    lg: "38.67px",
                                    md: "26.835px",
                                    xs: "15px"
                                }
                                
                            }}>
                                {socialMedias.map((item, index) => (
                                    <Box key={index} component={"a"} target="_blank" href={item.url}>
                                        <Box component={"img"} src={item.icon} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={
                            {
                                display: "flex",
                                textAlign: "end",
                                flexDirection: "column",
                                color: "#FFFFFF8C",
                                fontWeight: 400,
                                fontSize: {
                                    lg: "15px",
                                    md: "13.5px",
                                    xs: "12px"
                                }
                            }
                        }>
                            <Typography>©VivoOlio 2024</Typography>
                            <Typography>Усі права захищені</Typography>
                        </Box>
                    </Box>
                  </Box>
                </Box>
            </footer>
        </>
    )
}
export default Footer;