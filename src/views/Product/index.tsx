import { Box, Breadcrumbs, Container, Link } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Image from "next/image";



export default function ProductsPage() {
  return (
    <>
      <Container disableGutters>
        <Box sx={{minHeight: '100vh'}}>
          <CustomBreadcrumbs />
          <Box sx={{borderRadius: 3, overflow: 'hidden', bgcolor: "#ddd"}}>
            <div className="relative w-full h-[500px]">
              <Image src={"/image/banner.png"} fill alt="banner" priority quality={100}/>
            </div>
            <div className="min-h-[500px]">

            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}
