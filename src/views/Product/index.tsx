"use client"

import { Box, Breadcrumbs, Button, Chip, Container, Link, Stack, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BreadcrumbsCustom from "@/components/BreadcrumbsCustom";
import Image from "next/image";
import { Fragment, useState } from "react";
import { IconFire, Search } from "@/components/Icons";
import Slide from "@/components/Slide";
import ProductSlide from "./ProductSlide";
import ProductFilters from "./ProductFilters";
import ProductMain from "./ProductMain";

const initialFilter = {
    categories: ['air_filter', 'fuel_filter', 'petrol_filter'],
    price: '',
    brands: [],
    years: [],
    countries: [],
  };
  const initialSort = ["relevant"];

export default function ProductsPage() {
  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState(initialSort);

  return (
    <>
      <Container disableGutters>
        <Box sx={{minHeight: '100vh'}}>
          <BreadcrumbsCustom />
          <Box sx={{borderRadius: 3}} className="bg-brand-600">
            <div className="relative w-full h-[500px]">
              <Image src={"/image/banner.png"} fill alt="banner" priority quality={100}/>
            </div>
            <ProductSlide />
          </Box>
          <Box sx={{ mt: 4, display: "flex", minHeight: '400px' }}>
            <ProductFilters filter={filter} setFilter={setFilter}/>
            <ProductMain sort={sort} setSort={setSort}/>
          </Box>
        </Box>
      </Container>
    </>
  );
}
