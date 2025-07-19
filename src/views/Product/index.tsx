import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Image from "next/image";
import MemoizedSliders from "@/components/Sliders";
import { Fragment } from "react";

const settingsliders = {
  arrows: true, // Đảm bảo rằng arrows đã được đặt là true
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  // autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: true,
  nextArrow: true,
};

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
            <div className="slider-container p-[48px]">
              <MemoizedSliders
                settings={settingsliders}
                custom={
                  Array(7).fill(0).map((data, index) => (
                    <div
                      key={index}
                    >
                      <div className="mx-[10px]">
                        <Box className="min-h-[200px] bg-white rounded-[8px]">
                          <Box sx={{p: 1}}>
                            <div className="relative w-full aspect-square">
                              <Image src={"/image/product-1.png"} alt="product-1" fill objectFit="cover"/>
                            </div>
                          </Box>
                          <Box sx={{px: 3}}>
                            <Typography className="text-sm">Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)</Typography>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  ))
                }
              />
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}
