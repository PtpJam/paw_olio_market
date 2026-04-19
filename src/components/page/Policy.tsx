import { useTranslation } from "react-i18next";
import PolicyBox from "../StyleBlock/PolicyBox";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Markdown from 'react-markdown';

interface IPolicySection {
    title: string;
    description?: {
        item?: string[];
        list?: string[];
    }[];
}


function Policy({translate}: {translate: string}){
    const {t} = useTranslation(translate);
    const listTranslate = t('description', { returnObjects: true }) as IPolicySection[];
    
    return(
        <PolicyBox>
            <Typography
                sx={{
                    fontSize: {lg: "36px", md: "30px", xs: "24px"},
                    fontWeight: 700
                }}    
            >
                {t("title")}
            </Typography>
            <Stack spacing={"20px"}
                sx={{
                    "& *": {
                        fontSize: {lg: "20px", md: "18px", xs: "16px"},
                        textAlign: "justify",
                        "& p": { margin: 0 },
                        "& ul": { margin: 0, padding: 0 }, 
                        "& ol": { pl: "20px", margin: 0,}
                    }
                }}
            >
                {listTranslate.map((desc, index) =>
                    <Stack spacing={"20px"} key={index}>
                        <Markdown>{desc.title}</Markdown>
                        <Stack spacing={"20px"}>
                            {desc.description?.map((textList, textId) => (
                                <Box key={textId}>
                                    {textList.item?.map((item, index) => (
                                        <Markdown key={index}>
                                            {item}
                                        </Markdown>
                                    ))}
                                    {textList.list &&
                                        <List sx={{listStyleType: 'disc', pl: 3}}>
                                           {
                                                textList.list.map((item, index) => (
                                                    <ListItem key={index} sx={{display: 'list-item', ml:"30px", p:0}}>
                                                        <Markdown>{item}</Markdown>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    }
                                    
                                </Box>

                            ))}
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </PolicyBox>
    )
}
export default Policy