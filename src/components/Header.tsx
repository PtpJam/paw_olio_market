import "./css/Header.css"
import Box from '@mui/material/Box';
import Search from "../assets/svg/search.svg"
import Balance from "../assets/svg/balans.svg"
import WorkOutlineIcon from '../assets/svg/WorkOutlineIcon.svg';;
import Login from '../assets/svg/login.svg';
import Oui_arrowUp from '../assets/svg/oui_arrow-up.svg';
import Follow from '../assets/svg/follow.svg';
import Close from '../assets/svg/close.svg';
import Next from '../assets/svg/next.svg';
import Beak from '../assets/svg/beak.svg';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'
import { useTranslation } from "react-i18next";

interface HeaderProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function Header({ value, handleChange }: HeaderProps){
    const [open, setOpen] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);

    const [mode, setMode] = useState('main'); // 'main' | 'search' | 'lang'
    const languages = [
        { label: "Eng", code: "en" },
        { label: "УКР", code: "uk" },
        { label: "РУ", code: "ru" },
        { label: "DEU", code: "de" },
        { label: "ESP", code: "es" },
        { label: "ITA", code: "ita" },
        { label: "POR", code: "pt" },
        { label: "FR", code: "fr" },
        { label: "عرب", code: "ar" },
        { label: "中文", code: "zh" },
        { label: "한", code: "ko" },
        { label: "Ⴀმ", code: "ka" },
        { label: "日本語", code: "ja" }
    ];

    const { i18n, t } = useTranslation("header");

    const handleLanguageChange = (newLang : string) => {
        i18n.changeLanguage(newLang); 
        setMode("main"); 
    };
    return(
        <>
            <header>
                {mode === 'main' && (
                    <Box sx={{height: "48px", display: "flex", justifyContent:"space-between", padding:"0 2rem", gap:"20px"}}>
                        
                        <Box sx={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "space-between"    
                        }}>
                            <Box sx={{
                                display: { 
                                    xs: 'none', 
                                    '@media (min-width: 1039px)': { display: 'flex' } 
                                } 
                                }}>
                                <Tabs value={value} onChange={handleChange} sx={{
                                    '& .MuiTabs-flexContainer': {
                                        gap: '2vw'
                                    }, 
                                    '& .MuiTabs-indicator': {
                                        backgroundColor: "#fff",
                                        transition: "none",
                                        bottom: '12px',
                                    },
                                    '& .MuiTab-root': {
                                        fontSize: {
                                            xs: '0',  
                                            sm: '10px',  
                                            md: "12px",
                                            lg: '15px'  
                                        },
                                        '&:focus': {
                                            outline: 'none !important',
                                        },
                                        '&.Mui-selected': {
                                            color: '#fff !important', 
                                        },
                                    }
                                    }} >
                                    <Tab value={0} className="hideElement"/>
                                    <Tab disableRipple className="tab" value={1} label={t("TabsMenu.oil")}></Tab>
                                    <Tab disableRipple className="tab" value={2} label={t("TabsMenu.cosmetics")}></Tab>
                                    <Tab disableRipple className="tab" value={3} label={t("TabsMenu.dishes")}></Tab>
                                    <Tab disableRipple className="tab" value={4} label={t("TabsMenu.DIetary")}></Tab>
                                </Tabs>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', '@media (min-width: 1039px)': { display: 'none' } } }}>
                                <Box sx={{display: "flex", gap: {md: "10px", sx: "5px"}}}>
                                    {!open ? 
                                        <IconButton onClick={() => setOpen(true)} sx={{ color: 'white', alignItems: "center" }}>
                                            <MenuIcon sx={{ width: { xs: '14px', sm: '20px', md: '24px' }, height: {xs: "14px", small:"15px", md: "24px"} }}/>
                                        </IconButton> 
                                        :
                                        <IconButton onClick={() => {setOpen(false), setOpenLanguage(false)}} sx={{ color: 'white', alignItems: "center" }}>
                                            <Box 
                                            component="img" 
                                            src={Close} 
                                            alt="arrow" 
                                            sx={{ width: { xs: '14px', sm: '20px', md: '24px' },height: {xs: "14px", small:"15px", md: "24px"} }}
                                            />
                                        </IconButton> 
                                    }
                                    <IconButton disableRipple sx={{p: 0}}>
                                        <Box component={"img"} src={Search} alt="serch" onClick={(_e) => setMode("search")} sx={{ width: { xs: '14px', sm: '15px', md: '24px' }, height: {xs: "14px", small:"20px", md: "24px"} }}/>
                                    </IconButton>
                                </Box>


                            </Box>
                        </Box>
                        <Box   
                            sx={{
                                '& .MuiTabs-indicator': { display: 'none'},
                                display: "flex",
                                alignItems:"center",
                                flexShrink: 0,
                                cursor: "pointer",
                            }}
                            onClick={(event) => 
                                {
                                    setOpenLanguage(false);
                                    handleChange(event, 0);
                                    setOpen(false);
                                }
                            }
                        >
                                <Typography
                                    sx={{  fontSize: { 
                                        xs: '20px',  
                                        sm: '20px',  
                                        md: "28px",
                                        lg: '32px',
                                    },
                                    display: "flex",
                                    ignItems: "baseline",
                                    alignItems: "baseline", 
                                    lineHeight: 1,
                                }}
                                    className="logoTipe"
                                >
                                    <Box component="span">Vivo</Box>
                                    <Box component="span" sx={{ color: '#73843D'}}>
                                        Olio Market
                                    </Box>

                                </Typography>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center", gap: "50px", flex: 1, justifyContent: "flex-end"}}>
                            <Box>
                                <Stack direction="row" spacing="1px" sx={{ gap: {xs: "12px", sm: "12px", md: '25px', }, display:"flex"}}>
                                    <IconButton disableRipple sx={{ p: 0, display: { '@media (max-width: 1039px)': { display: 'none' }, md: "flex" } }}>
                                        <Box component={"img"} src={Search} alt="serch" onClick={(_e) => setMode("search")} />
                                    </IconButton>
                                    <IconButton disableRipple sx={{ p: 0}} >
                                        <Box component={"img"} src={Balance} alt="balance" sx={{ width: { xs: '14px', sm: '20px', md: '24px' }, height: {xs: "14px", small:"15px", md: "24px"} }}/>
                                    </IconButton>
                                    <IconButton disableRipple sx={{ p: 0, display: { '@media (max-width: 1039px)': { display: 'none' }, md: "flex" } }}>
                                        <Box component={"img"} src={Follow} alt="follow" />
                                    </IconButton>
                                    <IconButton disableRipple sx={{ p: 0 }}>
                                        <Box component={"img"} src={WorkOutlineIcon} alt="work" sx={{ width: { xs: '14px', sm: '20px', md: '24px' }, height: {xs: "14px", small:"15px", md: "24px"} }} />
                                    </IconButton>
                                    <IconButton disableRipple sx={{ p: 0, display: { '@media (max-width: 1039px)': { display: 'none' }, md: "flex" } }}>
                                        <Box component={"img"} src={Login} alt="login" />
                                    </IconButton>
                                </Stack>
                            </Box>

                            <Box
                                onClick = {(_e) => setMode("lang")}
                                sx={{ 
                                display: { 
                                    '@media (max-width: 1039px)': { display: 'none' }, 
                                    md: "flex"
                                },
                                cursor: "pointer" 
                                }}
                            >
                                <Box sx={{color:"#fff", gap: "10px", display:"flex"}}>
                                    <Box component={"span"} sx={{textTransform: "uppercase" }}>{t('lable')}</Box>
                                    <Box sx={{width:"12px", height:"12px"}}>
                                        <Box component={"img"} src={Oui_arrowUp}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
                {mode === 'search' && (
                    <Box sx={{padding: "0 2rem", zIndex: 1300 }} onMouseLeave={() => setMode("main")}>
                        <label className="serch">
                            <Box className="search-button">
                                <Box component={"img"} src={Search}/>
                            </Box>
                            <input type="text" placeholder="Search"/>
                        </label>
                    </Box>
                    )
                }
                {mode === 'lang' && (
                    <Box 
                        onMouseLeave={() => setMode("main")}
                        sx={{
                        padding: "40px 2rem",
                        display:"flex",
                        color: "#fff",
                        gap: '5.5vw',
                        justifyContent: "center",
                        alignItems:"center",
                    }}>
                        {languages.map((item) => (
                            <>
                            <Box sx={{
                                cursor: "pointer",
                                color: "#ccc",
                                alignItems: "center",
                                fontSize: "16px",
                                display: "flex",
                                flexWrap: "nowrap",
                                textWrap: "nowrap",
                                '&:hover': { color: "#fff" }
                            }} 
                                onClick={() => handleLanguageChange(item.code)}
                                key={item.code}
                            >
                                {item.label}
                            </Box>
                            </>
                        ))}
                    </Box>
                )}
                <Drawer 
                    anchor="left"
                    open={open} onClose={() => setOpen(false)}
                    hideBackdrop
                    disableEnforceFocus
                    sx={{
                        mt: '328px',
                        '& .MuiDrawer-paper': {
                            top: { xs: '60px', md: '60px', lg: "134px" },
                            height: '100%', 
                            width: "100vw",
                            boxShadow: 'none', 
                            padding:"1.25rem 1.875rem",
                            boxSizing: 'border-box'
                        },
                        }}>
                    <List>
                        {[t("TabsMenu.oil"), t("TabsMenu.cosmetics"), t("TabsMenu.dishes"), t("TabsMenu.DIetary")].map((text, index) => {
                           const tabValue = index + 1;
                           return(
                              <ListItem key={text} disablePadding sx={{borderBottom: "1px solid #0000004D"}}>
                                <ListItemButton 
                                        sx={{ pl: 0}}
                                        selected={value === tabValue} 
                                        onClick={(event) => {
                                            handleChange(event as React.SyntheticEvent, tabValue); 
                                            setOpen(false);
                                        }}
                                > 
                                    <ListItemText 
                                        sx={{textTransform: "uppercase"}} 
                                        primary={text}
                                        primaryTypographyProps={{sx: {fontSize:"12px", fontWeight: 600}}}
                                    />
                                    <ListItemIcon sx={{ minWidth: '20px' }}>
                                        <Box 
                                            component="img" 
                                            src={Next} 
                                            alt="profile" 
                                            sx={{ width: '12px', height: '10px', filter: 'invert(1) brightness(0)', }} 
                                        />
                                </ListItemIcon>
                                </ListItemButton>
                              </ListItem>
                            )
                        })}
                        <ListItem disablePadding sx={{borderBottom: "1px solid #0000004D"}}>
                            <ListItemButton 
                                    sx={{ pl: 0}}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                            > 
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                    <Box 
                                        component="img" 
                                        src={Login} 
                                        alt="profile" 
                                        sx={{ width: '12px', height: '10px', filter: 'invert(1) brightness(0)', }} 
                                    />
                                </ListItemIcon>
                                <ListItemText 
                                    sx={{textTransform: "uppercase"}} 
                                    primary={t('profile')}
                                    primaryTypographyProps={{sx: {fontSize:"12px", fontWeight: 600}}}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton 
                                    sx={{ pl: 0}}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                            > 
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                    <Box 
                                        component="img" 
                                        src={Follow} 
                                        alt="profile" 
                                        sx={{ width: '12px', height: '10px', filter: 'invert(1) brightness(0)', }} 
                                    />
                                </ListItemIcon>
                                <ListItemText 
                                    sx={{textTransform: "uppercase"}} 
                                    primary={t('saved')}
                                    primaryTypographyProps={{sx: {fontSize:"12px", fontWeight: 600}}}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton 
                                sx={{ 
                                    pl: 0, 
                                    justifyContent: "center",
                                    display: "flex",
                                    alignItems: "center"
                                }}
                                onClick={() => setOpenLanguage(true)}
                            > 
                                <ListItemText 
                                    primary={t('lable')}
                                    sx={{ 
                                        textTransform: "uppercase", 
                                        flex: "none",
                                        mr: "8px"   
                                    }} 
                                    primaryTypographyProps={{ sx: { fontSize: "12px", fontWeight: 600 } }}
                                />
                                <ListItemIcon sx={{ minWidth: 'auto' }}>
                                    <Box 
                                        component="img" 
                                        src={Oui_arrowUp} 
                                        alt="arrow" 
                                        sx={{ 
                                            width: '12px', 
                                            height: '10px', 
                                            filter: 'invert(1) brightness(0)',
                                            display: 'block' 
                                        }} 
                                    />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                <Drawer 
                    anchor="left"
                    open={openLanguage}
                    onClose={() => setOpenLanguage(false)}
                    hideBackdrop
                    disableEnforceFocus
                    sx={{
                        zIndex: 1400, 
                        mt: '328px',
                        '& .MuiDrawer-paper': {
                            top: { xs: '60px', md: '60px', lg: "134px"},
                            height: '100%', 
                            width: "100vw",
                            boxShadow: 'none', 
                            padding:"1.25rem 1.875rem",
                            boxSizing: 'border-box'
                        },
                    }}
                >
                    <Box 
                        display="flex"
                        alignItems="center"
                        gap="6px"
                        sx={{cursor:"pointer"}} 
                        onClick={() => setOpenLanguage(false)}
                    >
                        <Box 
                            component="img" 
                            src={Beak}
                            sx={{ width: '13px', height: '10px', filter: 'invert(1) brightness(0)'}}
                        />
                        <Typography sx={{ fontSize: '13px', fontWeight: 600, textTransform: "uppercase"}}> 
                            Language
                        </Typography>
                    </Box>
                    <List>
                        {languages.map((text, index) => {
                           return(
                              <ListItem 
                                key={text.code+(index+1)}
                                disablePadding 
                                sx={{borderBottom: index + 1 !== languages.length ? "1px solid #0000004D" : "none"}}>
                                <ListItemButton 
                                        sx={{ pl: 0}}
                                        onClick={(_event) => {
                                            setOpenLanguage(false);
                                            handleLanguageChange(text.code)
                                        }}
                                > 
                                    <ListItemText 
                                        sx={{textTransform: "uppercase"}} 
                                        primary={text.label}
                                        primaryTypographyProps={{sx: {fontSize:"12px", fontWeight: 600}}}
                                    />
                                </ListItemButton>
                              </ListItem>
                            )
                        })}
                    </List>
                </Drawer>
            </header>

        </>
    )
}
export default Header