'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Container, Toolbar, Button, IconButton, InputBase, Stack, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      className="bg-white text-gray-900 border-b border-gray-200"
    >
      <Container maxWidth="xl" className="px-4">
        {/* Top bar */}
        <Toolbar disableGutters className="h-16 min-h-0">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/vercel.svg" alt="Sunfil Logo" width={120} height={40} />
          </Link>

          {/* Search bar */}
          <div className="flex-1 mx-8 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <span className="text-gray-400">🔍</span>
            </div>
            <InputBase
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Actions */}
          <Stack direction="row" spacing={2}>
            <IconButton className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
              <span className="text-xl">🛒</span>
            </IconButton>
            <Button
              variant="contained"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 normal-case min-w-max whitespace-nowrap"
            >
              <span className="mr-2">👤</span>
              <span>Đăng nhập</span>
            </Button>
          </Stack>
        </Toolbar>

        {/* Navigation */}
        <div className="py-2">
          <Stack direction="row" spacing={4} alignItems="center">
            <Button className="font-medium text-gray-900 hover:text-blue-600 normal-case p-1">
              Danh Mục Sản Phẩm
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-1">
              Về Chúng Tôi
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-1">
              Bảo Hành
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-1">
              Catalog
            </Button>
            <Button className="text-gray-600 hover:text-blue-600 normal-case p-1">
              Liên Hệ
            </Button>
          </Stack>
        </div>

        {/* Features bar */}
        <div className="py-2 border-t border-gray-200">
          <Stack direction="row" spacing={4} justifyContent="center">
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <Image src="/globe.svg" alt="24/7" width={20} height={20} className="mr-2" />
              Hỗ trợ 24/7
            </Typography>
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <Image src="/window.svg" alt="Free shipping" width={20} height={20} className="mr-2" />
              Miễn Phí Vận Chuyển
            </Typography>
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <Image src="/file.svg" alt="Fast delivery" width={20} height={20} className="mr-2" />
              Giao Hàng Nhanh 2h
            </Typography>
            <Typography 
              variant="body2" 
              className="flex items-center text-sm text-gray-600"
            >
              <Image src="/window.svg" alt="Exchange" width={20} height={20} className="mr-2" />
              Đổi Ngay Sản Phẩm
            </Typography>
          </Stack>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header; 