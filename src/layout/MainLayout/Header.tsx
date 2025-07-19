import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Container, Toolbar, Button, IconButton, InputBase, Stack, Typography, Box, Avatar, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Camera, Cart, IconFastShipping, IconFreeDelivery, IconRefund, IconSupport, Search, User, Vietnam } from '@/components/Icons';

const Header = () => {
  return (
    <AppBar 
      position="relative" 
      className="bg-white shadow-none"
    >
      {/* Top notification bar */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        <span className="inline-flex items-center">
          ⭐ Nhập mã NEWBIE giảm ngay 10% cho lần đầu mua hàng
          <span className="ml-auto mr-4">📞 Hotline: 0283 760 7607 | 🎧 Tài ứng dụng</span>
        </span>
      </div>

      <Container disableGutters>
        {/* Main header */}
        <Toolbar sx={{ px: { sm: 2, lg: 0 }, py: 0, gap: { sm: 2, lg: 6 } }} className=''>
          <Box className="w-[250px] h-[111px] relative inline-block">
            <Image src={"/logo_sunfil1.svg"} fill alt='logo-sunfil' />
          </Box>

          <Box className="flex-1 relative">
            <div className="flex items-center border-2 border-blue-600 rounded-full overflow-hidden bg-white">
              <InputBase
                placeholder="Tìm sản phẩm"
                className="flex-1 px-2 py-2 text-gray-700"
              />
              <IconButton className="p-2 text-gray-400">
                <Camera size={24}/>
              </IconButton>
              <IconButton className="p-3 px-[24px] bg-blue-600 text-white rounded-full m-1 hover:bg-blue-700">
                <Search size={24}/>
              </IconButton>
            </div>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="outlined" startIcon={<Vietnam />} className='border-none text-black ml-[-15px]'>
              VI
            </Button>
            
            <Button variant="outlined" startIcon={<Badge badgeContent={12} color='primary' slotProps={{badge: {className: "bg-[#FF5630] rounded-full w-[24px] h-[24px]"}}}><Cart color="#025FCA"/></Badge>} className='border-none text-black'>
              Giỏ hàng
            </Button>

            <Button variant="outlined" startIcon={<User color="#025FCA" />} className='border-none text-black'>
              Tài khoản
            </Button>
          </Stack>
        </Toolbar>

        <Box sx={{mt: 3, mb: 2}}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Button 
              className="font-medium text-white bg-[#0155C6] hover:opacity-90 flex items-center"
              endIcon={<KeyboardArrowDownIcon />}
            >
              ☰ Danh Mục Sản Phẩm
            </Button>
            <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} className='flex-1'>
              <Stack direction="row" spacing={2.5} alignItems={"center"}>
                <Button className="text-gray-600 hover:text-blue-600 normal-case">
                  Về Chúng Tôi
                </Button>
                <Button className="text-gray-600 hover:text-blue-600 normal-case">
                  Bài Viết
                </Button>
                <Button className="text-gray-600 hover:text-blue-600 normal-case">
                  Catalog
                </Button>
                <Button className="text-gray-600 hover:text-blue-600 normal-case">
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