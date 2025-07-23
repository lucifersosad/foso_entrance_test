import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
  Box,
  Avatar,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {
  Camera,
  Cart,
  IconAppSubHeader,
  IconFastShipping,
  IconFreeDelivery,
  IconMoneySubHeader,
  IconPhoneSubHeader,
  IconRefund,
  IconSupport,
  Search,
  User,
  Vietnam,
} from "@/components/Icons";
import SelectCategory from "@/components/SelectCategory";

const Header = () => {
  return (
    <AppBar position="relative" className="bg-white shadow-none">
      {/* Sub header */}
      <Box sx={{ background: 'linear-gradient(270deg, #0D57C6 0%, #37CFFF 50.39%, #0F5ED6 100%)' }}>
        <Container disableGutters>
          <Box sx={{ px: { xs: 3, lg: 0 } }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} gap={1}>
                <IconMoneySubHeader />
                <Typography className="text-sm">
                  Nhập mã{" "}
                  <span className="text-yellow-primary font-bold">NEWBIE</span>{" "}
                  giảm ngay 10% cho lần đầu mua hàng
                </Typography>
              </Stack>
              <Stack spacing={3} direction={"row"}>
                <Stack direction={"row"} gap={1}>
                  <IconPhoneSubHeader />
                  <Typography className="text-sm text-white">
                    Hotline:{" "}
                    <span className="text-yellow-primary font-bold text-xs">
                      0283 760 7607
                    </span>
                  </Typography>
                </Stack>
                <Stack direction={"row"} gap={1}>
                  <IconAppSubHeader />
                  <Typography className="text-sm">Tải ứng dụng</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
      
      {/* Main header */}
      <Container disableGutters>
        <Toolbar
          sx={{
            px: { xs: 3, lg: 0 },
            py: 0,
            gap: { sm: 2, lg: 6 },
            overflowX: "auto",
            flexDirection: { xs: "column", md: "row" },
          }}
          className="overflow-x-auto"
        >
          <Link
            href={"/"}
            className="w-[250px] h-[111px] relative inline-block"
          >
            <Image src={"/logo_sunfil1.svg"} fill alt="logo-sunfil" />
          </Link>

          <Box className="flex-1 relative">
            <div className="flex items-center border-2 border-brand-500 rounded-full overflow-hidden bg-white">
              <InputBase
                placeholder="Tìm sản phẩm"
                className="flex-1 px-2 py-2 text-gray-700"
              />
              <IconButton className="p-2 text-gray-400">
                <Camera size={24} />
              </IconButton>
              <IconButton className="p-3 px-[24px] bg-brand-500 text-white rounded-full m-1 hover:bg-blue-700">
                <Search size={24} />
              </IconButton>
            </div>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              startIcon={<Vietnam />}
              className="btn-icon-outlined ml-[-15px]"
            >
              VI
            </Button>

            <Button
              variant="outlined"
              startIcon={
                <Badge
                  badgeContent={12}
                  slotProps={{
                    badge: {
                      className:
                        "bg-[#FF5630] rounded-full w-[24px] h-[24px] text-white",
                    },
                  }}
                >
                  <Cart color="#025FCA" />
                </Badge>
              }
              className='btn-icon-outlined'
            >
              Giỏ hàng
            </Button>

            <Button
              variant="outlined"
              startIcon={<User color="#025FCA" />}
              className='btn-icon-outlined'
            >
              Tài khoản
            </Button>
          </Stack>
        </Toolbar>

        <Box sx={{ mt: 3, mb: 2, px: { lg: 0, xs: 3 }, overflowX: "auto" }}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={3}
            alignItems="center"
          >
            {/* <Button 
              className="font-medium text-white bg-[#0155C6] hover:opacity-90 flex items-center"
              endIcon={<KeyboardArrowDownIcon />}
            >
              ☰ Danh Mục Sản Phẩm
            </Button> */}
            <SelectCategory />
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="flex-1"
            >
              <Stack direction="row" spacing={2.5} alignItems={"center"}>
                <Button className="btn-outlined">
                  Về Chúng Tôi
                </Button>
                <Button className="btn-outlined">
                  Bài Viết
                </Button>
                <Button className="btn-outlined">
                  Catalog
                </Button>
                <Button className="btn-outlined">
                  Liên Hệ
                </Button>
              </Stack>
              <Stack direction="row" spacing={2.5} alignItems="center">
                <Typography
                  variant="body2"
                  className="flex items-center text-sm text-gray-600 gap-[2px]"
                >
                  <IconSupport />
                  Hỗ trợ 24/7
                </Typography>
                <Typography
                  variant="body2"
                  className="flex items-center text-sm text-gray-600 gap-[2px]"
                >
                  <IconFreeDelivery />
                  Miễn Phí Vận Chuyển
                </Typography>
                <Typography
                  variant="body2"
                  className="flex items-center text-sm text-gray-600 gap-[2px]"
                >
                  <IconFastShipping />
                  Giao Hàng Nhanh 2h
                </Typography>
                <Typography
                  variant="body2"
                  className="flex items-center text-sm text-gray-600 gap-[2px]"
                >
                  <IconRefund />
                  30 Ngày Đổi Trả
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
