import PolicyBox from "../StyleBlock/PolicyBox";
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next";
import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

interface ITranslete{
    title: string;
    description: {
        item: string,
        list?: string[]
    }[],

}

function AboutUs(){
    const {t} = useTranslation("aboutUs");
    const list = t('list', { returnObjects: true }) as ITranslete[];
    
    return(
        <PolicyBox src={logo}>
            <Typography
                sx={{
                    fontSize: {lg: "40px", md: "36px", xs: "32px"},
                    fontWeight: 500
                }}    
            >
                {t("title")}
            </Typography>
            <Stack spacing="45px" 
                sx={{
                    "& *": {
                        fontSize: {lg: "20px", md: "18px", xs: "16px"},
                        textAlign: "justify"
                    }
                }}
            >
                {
                    list.map((item, index) => (
                        <Stack spacing="15px" key={index}>
                            <Typography fontWeight={700}>{item.title}</Typography>
                            {item.description.map((description, index) => (
                                <Box key={index+0.1}>
                                    <Typography>{description.item}</Typography>
                                    {description.list &&
                                        <List sx={{listStyleType: 'square', pl: 3}}>
                                            {
                                                description.list.map((text, index) => (
                                                    <ListItem    
                                                        sx={{
                                                             display: 'list-item', p: 0,
                                                            '&::marker': {
                                                                fontSize: '12px',
                                                            },    
                                                        }} 
                                                        key={index}
                                                    >
                                                        <ListItemText primary={text}/>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>    
                                    }
                                </Box>
                            ))}
                        </Stack>
                    ))
                }
            </Stack>
        </PolicyBox>
    )
}
export default AboutUs