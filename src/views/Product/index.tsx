import { Box, Breadcrumbs, Button, Chip, Container, Link, Stack, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Image from "next/image";
import { Fragment } from "react";
import { IconFire, Search } from "@/components/Icons";
import { formatMoney } from "@/utils/helper/format";
import Slide from "@/components/Slide";
import ProductSlide from "./ProductSlide";

export default function ProductsPage() {
  return (
    <>
      <Container disableGutters>
        <Box sx={{minHeight: '100vh'}}>
          <CustomBreadcrumbs />
          <Box sx={{borderRadius: 3}} className="bg-brand-600">
            <div className="relative w-full h-[500px]">
              <Image src={"/image/banner.png"} fill alt="banner" priority quality={100}/>
            </div>
            <ProductSlide />
          </Box>
        </Box>
      </Container>
    </>
  );
}
