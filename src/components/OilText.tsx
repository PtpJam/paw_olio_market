import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

// 1. Створюємо інтерфейс для елемента масиву
interface ListEntry {
  title: string;
  description: string;
}

function OilText() {
    const { t } = useTranslation("oilText");
    const list = t('desacription.list.listDesk', { returnObjects: true }) as ListEntry[];

    return (
        <Box>
            <Typography 
                sx={{
                    fontWeight: 700,
                    fontSize:{
                        lg: "40px",
                        md: "26px",
                        xs: "12px"
                    },
                    mb: {
                        lg: "40px",
                        md: "30px",
                        xs: "20px"
                    }
                }}
            >
                {t("title")}
            </Typography>
            <Box sx={{
                    "& .MuiTypography-root":{
                        fontSize:{
                            lg: "30px",
                            md: "19px",
                            xs: "8px"
                        },
                        lineHeight: 1,
                    }
                }}
            >
                <Typography>
                    {t("desacription.paragraph")}
                </Typography> 
                <Box sx={{ my: 2}}>
                    <Typography component={"span"}>
                        <strong>{t("desacription.bold1")} </strong>
                    </Typography>
                    <Typography component={"span"}>
                        {t("desacription.text1")}
                    </Typography>
                    <Typography component={"span"}>
                        <strong> {t("desacription.bold2")} </strong>
                    </Typography>
                    <Typography component={"span"}>
                        {t("desacription.text2")}
                    </Typography>
                </Box>
                <Typography>
                    <strong>
                        {t("desacription.list.title")}
                    </strong>
                </Typography>
                <List 
                    sx={{
                        mt: 0.5,
                        listStyleType: 'disc',
                        pl: 4, 
                        display: "flex",   
                        flexDirection: "column"
                    }}
                >
                    {Array.isArray(list) && list.map((item, index) => (
                        <ListItem 
                            key={index} 
                            sx={{
                                display: 'list-item',
                                p: 0,
                                mb: 1,
                                '&::marker': {
                                    fontSize: {
                                        lg: "40px", 
                                        md: "25px", 
                                        xs: "14px"
                                    }
                                }
                            }}
                            
                        >
                            <ListItemText
                                primary={
                                    <Typography>
                                        <strong>{item.title}</strong> {item.description}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
                <Box>
                    <Typography component={"span"}>
                        <strong>{t("desacription.lastText.title")} </strong>
                    </Typography>
                    <Typography component={"span"}>
                        {t("desacription.lastText.description")}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default OilText;