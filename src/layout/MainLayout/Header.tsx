'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Container, Toolbar, Button, IconButton, InputBase, Stack, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Header = () => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      className="bg-white shadow-sm"
    >
      <Container maxWidth="xl" className="px-4">
        {/* Top notification bar */}
        <div className="bg-blue-600 text-white text-center py-2 text-sm -mx-4">
          <span className="inline-flex items-center">
            ⭐ Nhập mã NEWBIE giảm ngay 10% cho lần đầu mua hàng
            <span className="ml-auto mr-4">📞 Hotline: 0283 760 7607 | 🎧 Tài ứng dụng</span>
          </span>
        </div>

        {/* Main header */}
        <Toolbar disableGutters className="h-20 min-h-0 w-full justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-8">
            <Box className="text-blue-600 font-bold text-2xl">
              SUNFIL
              <Typography variant="caption" className="block text-xs text-gray-600 -mt-1">
                GENUINE FILTER
              </Typography>
            </Box>
          </Link>

          {/* Search bar */}
          <Box className="flex-1 max-w-2xl mx-4 relative">
            <div className="flex items-center border-2 border-blue-600 rounded-full overflow-hidden bg-white">
              <IconButton className="p-2 text-gray-400">
                <CameraAltOutlinedIcon />
              </IconButton>
              <InputBase
                placeholder="Tìm sản phẩm"
                className="flex-1 px-2 py-2 text-gray-700"
              />
              <IconButton className="p-3 bg-blue-600 text-white rounded-full m-1 hover:bg-blue-700">
                <SearchIcon />
              </IconButton>
            </div>
          </Box>

          {/* Right actions */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Star rating */}
            <Box className="flex items-center bg-red-600 text-white px-2 py-1 rounded text-sm">
              ⭐ VI
            </Box>
            
            {/* Cart */}
            <Box className="relative">
              <IconButton className="p-2 text-gray-700">
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <Typography variant="body2" className="text-gray-700 text-sm">
                Giỏ hàng
              </Typography>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Box>
            
            {/* Account */}
            <Box className="flex items-center">
              <IconButton className="p-2 text-gray-700">
                <PersonOutlineIcon />
              </IconButton>
              <Typography variant="body2" className="text-gray-700 text-sm">
                Tài khoản
              </Typography>
            </Box>
          </Stack>
        </Toolbar>

        {/* Navigation */}
        <div className="py-3 border-t border-gray-200">
          <Stack direction="row" spacing={6} alignItems="center">
            <Button 
              className="font-medium text-gray-900 hover:text-blue-600 normal-case p-0 flex items-center"
              endIcon={<KeyboardArrowDownIcon />}
            >
              ☰ Danh Mục Sản Phẩm
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-0">
              Về Chúng Tôi
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-0">
              Bài Viết
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-0">
              Catalog
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-0">
              Liên Hệ
            </Button>
          </Stack>
        </div>

        {/* Features bar */}
        <div className="py-3 border-t border-gray-200">
          <Stack direction="row" spacing={8} justifyContent="center">
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <SupportAgentIcon className="mr-2 text-blue-600" fontSize="small" />
              Hỗ trợ 24/7
            </Typography>
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <LocalShippingIcon className="mr-2 text-blue-600" fontSize="small" />
              Miễn Phí Vận Chuyển
            </Typography>
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <AccessTimeIcon className="mr-2 text-blue-600" fontSize="small" />
              Giao Hàng Nhanh 2h
            </Typography>
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <SwapHorizIcon className="mr-2 text-blue-600" fontSize="small" />
              30 Ngày Đổi Trả
            </Typography>
          </Stack>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header; 