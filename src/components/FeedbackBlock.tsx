import { Box, Button, Tab, Tabs, Typography } from "@mui/material"
import React from "react";
import { useTranslation } from "react-i18next"
import TabPanel from "./TabPanel";
import FeedbeakData from "./Data/FeedbeakData";
import Feedback from "./Carts/Feedback";

interface FeedbackBlockProps {
  all: boolean;
}

function FeedbackBlock({all}: FeedbackBlockProps){
    const {t} = useTranslation("feedbeak");
    const tabsLabels = Object.values(t('tabs', { returnObjects: true }) as Record<string, string>);

    const [value, setValue] = React.useState(0);
    
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Box>
            <Box sx={{
                    display: "flex",
                    flexDirection: {md: "row", xs: "column"},

                    alignItems: {md: "center", xs: "start"},
                    gap: {lg: "45px", xs: '10px'},
                }}>
                <Typography sx={{
                    fontSize: {
                        lg: "40px",
                        md: "32px",
                        xs: "24px"
                    }
                }}>
                    {t("Feedbacks")}
                </Typography>
                <Tabs
                    variant="scrollable"
                    scrollButtons={false}
                    value={value}
                    onChange={handleChange}
                    sx={{
                        minHeight: 'auto',
                        display: "flex",
                        alignItems: "center",
                        '& .MuiTabs-indicator': { background: 'none'},
                        '& .MuiTabs-flexContainer': {
                            display: 'flex',
                            gap: {
                                lg: '10px',
                                md: '8px',
                                xs: '5px'
                            },
                            justifyContent: {
                                md: "flex-end",
                                xs: "start"
                            },
                        },
                        width: "100%",

                    }}
                >
                    {tabsLabels.map((label, index) => (
                        <Tab 
                            key={index}
                            label={label}
                            value={index}
                            sx={{

                                minWidth: 0,
                                minHeight: 'auto',
                                maxWidth: 'none',
                                flexShrink: 0,
                                
                                fontSize: {
                                    lg: "14px",
                                    md: "13px",
                                    xs: "10px"
                                },
                                border: "1px solid #000",
                                borderRadius: "32px",
                                height: {
                                    lg: "38px",
                                    md: "33px",
                                    xs: "28px"
                                },
                                px: { 
                                    lg: "13px",
                                    md: "10px",
                                    xs: "8px"
                                },
                                py: {
                                    lg: "8.5px",
                                    md: "6.75px",
                                    xs: "5px"
                                },
                                boxSizing: "border-box",
                                textTransform: "none",
                                '&.Mui-selected': {
                                    color: '#fff',
                                    bgcolor: "#000"
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>
            <Typography sx={{
                color: "#73843D",
                fontSize: {
                    lg: "20px",
                    md: "16px",
                    xs: "12px"
                },
                textAlign: "end",
                mt: "15px",
                mb: {lg: "20px", md: "15px", xs: "10px"}
            }}>
                {t("Add")}
            </Typography>
            <Box>
                <TabPanel value={value} index={0}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        {FeedbeakData.map((item, index) => {
                            if (!all && index >= 3) {return null}  
                            return <Feedback key={index} {...item} />
                            
                        })}
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        {FeedbeakData.map((item, index) => {
                            if (!all && index >= 3) {return null}  
                            return <Feedback key={index} {...item} />
                            
                        })}
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        {FeedbeakData.map((item, index) => {
                            if (!all && index >= 3) {return null}  
                            return <Feedback key={index} {...item} />
                            
                        })}
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        {FeedbeakData.map((item, index) => {
                            if (!all && index >= 3) {return null}  
                            return <Feedback key={index} {...item} />
                            
                        })}
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        {FeedbeakData.map((item, index) => {
                            if (!all && index >= 3) {return null}  
                            return <Feedback key={index} {...item} />
                            
                        })}
                    </Box>
                </TabPanel>
            </Box>
            {!all && 
                <Box sx={{
                    mt: {lg: "20px", md: "15px", xs: "10px"},
                    display: "flex",
                    justifyContent: {
                        md: "end",
                        xs: "start"
                    }
                }}>
                    <Button 
                        variant="contained"
                        sx={{
                            bgcolor: "#000",
                            borderRadius: "82px",
                            padding: {
                                lg: "13.5px 25px",
                                md: "13px 25px",
                                sx: "13.5px 25px"
                            },
                            height: "39px"
                        }}
                    >
                        {t("All")}
                    </Button>
                </Box>
            }
        </Box>
    )
}
export default FeedbackBlock