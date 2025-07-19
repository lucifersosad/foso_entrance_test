import { Box, Breadcrumbs, Container, Link } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Image from "next/image";
import MemoizedSliders from "@/components/Sliders";

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
          <Box sx={{borderRadius: 3, bgcolor: "#ddd"}}>
            <div className="relative w-full h-[500px]">
              <Image src={"/image/banner.png"} fill alt="banner" priority quality={100}/>
            </div>
            <div className="">
              <MemoizedSliders
                settings={settingsliders}
                custom={
                  Array(7).fill(0).map((data, index) => (
                    <div
                      key={index}
                      className="min-h-[200px] bg-rose-400"
                    >
                      {index}
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
