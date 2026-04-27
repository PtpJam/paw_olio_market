import {useEffect, useState } from 'react'
import { Box, Drawer, FormControl, Grid, MenuItem, Pagination, PaginationItem,  Select,  Typography, useMediaQuery, useTheme, type SelectChangeEvent} from '@mui/material';

import ScrollBar from "../Scroll";
import ReclamBlock from "../Reclam";
import sideBarData from "../Data/sideBarData";
import SideBar from "../SideBar";
import Card from "../Carts/Card";
import UpArrow from "../../assets/svg/up.svg"
import DownArrow from "../../assets/svg/down.svg"

import Down from "../../assets/svg/downIco.svg"
import Filter from '../../assets/svg/filter.svg';
import React from 'react';
import itemsMegaCard from "../Data/MegaCardData"
import { useTranslation } from 'react-i18next';
import { Sort } from '../api/CardApi';
import type { ISortData } from '../interface/ISort';
import Beak from '../../assets/svg/beak.svg';
import { useSearchParams } from 'react-router';
import _default from '@emotion/styled';
import sortingParam from '../Data/SortingParamsData';

type SelectedFilters = Record<string, string[]>;

function Oil(){
    const sortParam = {
      "0": "new",
      "1": "old",
      "2": "expensive",
      "3": "cheaper"
    }

    const {t} = useTranslation("sortPage");
    const [searchParams, setSearchParams] = useSearchParams();

    const [selected, setSelected] = useState<SelectedFilters>({});
    const [open, setOpen] = useState(false);
    const [priceRange, setPriceRange] = React.useState<number[]>([]);
    const [priceRangeStatick, setPriceRangeStatick] = React.useState<number[]>([]);
    
    const [sorting, setSorting] = React.useState(() => {
        const sortTitle = searchParams.get('sort');
        const sortKey = Object.keys(sortParam).find(k => sortParam[k as keyof typeof sortParam] === sortTitle ) ?? "";
        return sortKey;
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const paginationSize = isMobile ? "small" : isTablet ? "medium" : "large";
    
    const handleChangePage = (_event: React.ChangeEvent<unknown>, newValue: number) => {
        pageSet(newValue);

        searchParams.set("page", newValue.toString());
        setSearchParams(searchParams);
    };


    const handleChangeSorting = (event: SelectChangeEvent) => {
        const key = (event.target.value as string)
        setSorting(key);

        searchParams.set("sort", sortParam[key as keyof typeof sortParam]);
        setSearchParams(searchParams);
    };
        
    const sideBarContent = (
        <SideBar  
          statickRange={priceRangeStatick}
          setSelected={setSelected}
          selected={selected}
          sideData={sideBarData}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          setClose={setOpen}
        />
    );

    const [page, pageSet] = useState(() =>{
        const pageParam = searchParams.get('page');
        const parsed = Number(pageParam);
        return (Number.isInteger(parsed) && parsed > 0) ? parsed : 1;
    });
    const [maxPage, maxPageSet] = useState(1);
    const [cardData, cardDataSet] = useState<ISortData>()

    useEffect(() => {
      const fetchData = async() => {
          const data = await Sort({
            page: page,
            limit: isMobile ? 8 : 15,
            sorting: sorting == "" ? undefined : sortingParam[Number(sorting)],
            brands: selected["Brand"] 
          });
          console.log(selected["Brand"])
          cardDataSet(data);

          maxPageSet(data.totalPages) 
                    
        }
      fetchData()
    }, [isMobile, page, sorting, selected])
    
    useEffect(() => {
      const minPrice = Math.min(...cardData?.products.map(p => p.averagePrice) || [0]);
      const maxPrice = Math.max(...cardData?.products.map(p => p.averagePrice) || [0]);
      setPriceRange([minPrice, maxPrice])
      setPriceRangeStatick([minPrice, maxPrice])
    }, [cardData])

    return(
        <>
          <Grid container spacing={2} sx={{pt: {xs: "33px"}, pr: {xs: "20px"}, pb: {lg: "51px", md: "66px", xs: "86px"}}}>
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
                    {t("Sorting")}:
                  </Typography>
                    <FormControl 
                      sx={{ 
                        width: "120px",   
                        minWidth: "120px" 
                      }}
                    >          
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
                  <Grid container spacing={"30px"}>
                    {cardData?.products?.map((product, index) => (
                      <React.Fragment key={product._id}>
                        <Grid
                          size={{lg: 4, md: 4, xs: 6}}
                          key={product._id}>
                          <Card {...product} scroll={false} />
                        </Grid>
                        {((index === 11 && !isMobile) || (index === 5 && isMobile) && page === 1) && (
                          <ReclamBlock/>
                        )}
                      </React.Fragment>
                    ))}
                  </Grid>
              </Box>
              <Box marginTop={5} display={'flex'} justifyContent="space-between">
                <Pagination 
                  page={page}
                  size = {paginationSize}
                  count={maxPage} 
                  siblingCount={isMobile ? 0 : 2}
                  boundaryCount={isMobile ? 1 : 1} 
                  onChange={handleChangePage}  
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      slots={{ 
                        previous: () => 
                        <Box sx={{display: "flex", gap: "9.6px"}}>
                          <Box component={"img"} src={Beak}/>
                          <Typography>{t("Back")}</Typography> 
                        </Box>, 
                        next: () => 
                          <Box sx={{display: "flex", gap: "9.6px"}}>
                            <Typography>{t("Next")}</Typography>
                            <Box 
                                component={"img"} src={Beak}
                                sx={{rotate: "180deg"}}
                            />
                          </Box> 
                      }}
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        '& .MuiPagination-ul': {
                          width: '100%',
                          display: 'flex',
                          flexWrap: 'nowrap',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        },
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
              <Box sx={{ display: {lg: "flex", md: "none", xs: "none"}, gap: 1, alignItems: "center" }}>
                <Typography sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  {t("Result")} 
                  <Typography component="span">
                    {maxPage}
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