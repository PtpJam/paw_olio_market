import {useEffect, useState } from 'react'
import { Box, Drawer, FormControl, Grid, MenuItem, Pagination, PaginationItem,  Select,  Typography, useMediaQuery, useTheme, type SelectChangeEvent} from '@mui/material';

import ScrollBar from "../Scroll";
import ReclamBlock from "../Reclam";
import TabPanel from "../TabPanel";
import type ICard from "../interface/ICard";
import sideBarData from "../Data/sideBarData";
import SideBar from "../SideBar";
import Card from "../Carts/Card";
import UpArrow from "../../assets/svg/up.svg"
import DownArrow from "../../assets/svg/down.svg"


import Down from "../../assets/svg/downIco.svg"
import Filter from '../../assets/svg/filter.svg';
import React from 'react';
import cards from "../Data/CardDataDeScroll"
import itemsMegaCard from "../Data/MegaCardData"
import { useTranslation } from 'react-i18next';
import { Sort } from '../api/CardApi';
import type { ISortData } from '../interface/ISort';

type SelectedFilters = Record<string, string[]>;

function Oil(){

    const {t} = useTranslation("sortPage");

    const [cardGet, cardSet] = useState<ICard[]>([]);
    const [selected, setSelected] = useState<SelectedFilters>({});
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState<number[]>([]);
    const [totalPages, totalPagesSet] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorting, setSorting] = React.useState('');

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const itemsPerPage = 18

    const siblingCount = isMobile ? 0 : isTablet ? 1 : 4;
    const paginationSize = isMobile ? "small" : isTablet ? "medium" : "large";

    const handleChangePage = (_event: React.ChangeEvent<unknown>, newValue: number) => {
        setCurrentPage(newValue);
    };

    const handleChangeSorting = (event: SelectChangeEvent) => {
        setSorting(event.target.value as string);
    };
    useEffect(() => {
        if (cardGet.length < 18) {
            
            for (let index = 0; index < 10; index++) {
            cardSet((prev) => [...prev, ...cards]);          
            }
        }
        setValue([sideBarData.minPrice, sideBarData.maxPrice])
    }, []);
    
    useEffect(()=>{
        const page = Math.ceil(cardGet.length / itemsPerPage)
        totalPagesSet(page != 0 ? page : 1)
    }, [cardGet])

    const sideBarContent = (
        <SideBar  
          setSelected={setSelected}
          selected={selected}
          sideData={sideBarData}
          value={value}
          setValue={setValue}
          setClose={setOpen}
        />
    );


    const [page, pageSet] = useState(1);
    const [cardData, cardDataSet] = useState<ISortData>()

    useEffect(() => {
      const fetchData = async() => {
          const data = await Sort({page: page, limit: isMobile ? 8 : 15});
          cardDataSet(data)  
      }
      fetchData()
    }, [isMobile])

    return(
        <>
          <Grid container spacing={2} sx={{pt: {xs: "33px"}, pr: {xs: "20px"}}}>
            <Grid 
              size={{lg: 2.2}}
              sx={{
                display: { xs: 'none', md: 'block' },
                padding:"0 23px 0 26px"
              }}>
              {sideBarContent}
            </Grid> 
            <Grid size={{lg: 9.8, xs: 12}} 
              sx={{
                flex: 1,
                padding: {
                  md: "0",
                  xs: "20px 13px 86px 25px"
                }
              }}>
              {/* sort */}
              <Box sx={{display: "flex",padding: "0 0", justifyContent:"space-between", margin:"20px 0 20px 0"}}>
                <Box>
                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Box onClick={() => setOpen(true)}><Box component={"img"} src={Filter}/></Box>
                    <Drawer 
                      open={open}
                      onClose={() => setOpen(false)}
                      PaperProps={{
                        sx: { width: '100%' },
                      }}
                    >
                      <Box sx={{ p: 2, pt:{ md: "150px", xs: "80px"}}}>
                        {sideBarContent}
                      </Box>
                    </Drawer>
                  </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:"end", alignItems:"center", gap: 1.5}}>
                  <Typography>
                    sorting:
                  </Typography>
                    <FormControl sx={{ 
                      width: "120px",   
                      minWidth: "120px" 
                    }}>          
                      <Select
                        sx={{
                          height: "25px",
                          width:"100%",
                          borderRadius: "40px", 
                          
                          '& .MuiSelect-select': {
                            padding: "5px 14px", 
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                          },
                          
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: "1px solid #14141233", 
                            borderWidth: "1px"
                          },
                          
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: "1px solid #14141233", 
                          },
                        }}
                        id="demo-simple-select"
                        value={sorting}
                        label=""
                        onChange={handleChangeSorting}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              marginTop: "5px",
                              padding: "12px 20px",
                              borderRadius: "10px",
                              '& .MuiMenuItem-root': {
                                fontSize: "16px",
                                padding: "2px 0",
                                margin: "0",
                              },
                            },
                          },
                        }}
                    >
                      <MenuItem value={0} sx={{borderBottom: "1px solid #0000004D"}}>
                        {t("New")}
                      </MenuItem>
                      <MenuItem value={1} sx={{borderBottom: "1px solid #0000004D"}}>
                        {t("Old")}
                      </MenuItem>
                      <MenuItem value={2} sx={{display: 'flex', justifyContent: "space-between", borderBottom: "1px solid #0000004D"}}>
                        {t("Expensive")} <Box component={"img"} src={UpArrow}/>
                      </MenuItem>
                      <MenuItem value={3} sx={{display: 'flex', justifyContent: "space-between"}}>
                        {t("Cheaper")} <Box component={"img"} src={DownArrow}/>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/* cosmetick  */}
              <Box sx={{
                gap: "10px",
                margin: "20px 0",
              }}>
                <ScrollBar scroll={{ team: true, type:"cosmetics", items: itemsMegaCard}}></ScrollBar>
              </Box>

              {/*  */}
              <Box sx={{display: 'flex', alignItems:"center"}}>
                
                {
                  Array.from({ length: totalPages }, (_, i) => i).map((num) => {
                    const start = num * itemsPerPage;
                    const end = (start + itemsPerPage) > cardGet.length ? cardGet.length : (start + itemsPerPage);
                    const pageItems = cardGet.slice(start, end)
                    
                    return (
                      <TabPanel value={currentPage} index={num+1} key={num+1+"-panel"} >
                        <Grid container spacing={"30px"}>
                          {cardData?.products.map((product, index) => (
                            <React.Fragment key={product._id}>
                              <Grid
                                size={{lg: 4, md: 4, xs: 6}}
                                key={product._id}>
                                <Card {...product} scroll={false} />
                              </Grid>
                              {((index === 11 && !isMobile) || (index === 5 && isMobile) && currentPage === 1) && (
                                <ReclamBlock/>
                              )}
                            </React.Fragment>
                          ))}
                        </Grid>
                      </TabPanel>
                      )  
                    }
                  )
                }
              
              </Box>
              <Box marginTop={5} display={'flex'} justifyContent="space-between">
                <Pagination 
                  size = {paginationSize}
                  count={totalPages} 
                  siblingCount={siblingCount} 
                  onChange={handleChangePage}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      slots={{ 
                        previous: () => <Typography>&lt; Back</Typography>, 
                        next: () => <Typography>Next &gt;</Typography> 
                      }}
                      sx={{
                        '& .MuiTouchRipple-root': { display: 'none' }, 
                        '&.Mui-selected': {
                          background: '#fff',
                          color: '#A1ABFF',
                          '&:hover': {
                            background: 'none',
                          },
                        },
                        '&:hover': {
                            background: 'none',
                          },
                      }}
                    />
                  )}
                />
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  Result per page 
                  <Typography component="span" sx={{ fontWeight: 'bold' }}>
                    {totalPages}
                  </Typography>
                </Typography>
                <img width={8} height={4.5} src={Down} alt="down arrow" />
              </Box>
              </Box>
            </Grid>

          </Grid>
        </>
    )
}
export default Oil;