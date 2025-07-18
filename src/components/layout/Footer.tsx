'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      className="bg-gray-50 py-12 border-t border-gray-200"
    >
      <Container maxWidth="xl" className="px-4">
        <Box className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-8">
          {/* Company Info */}
          <Box className="md:col-span-2 lg:col-span-4">
            <Stack spacing={2}>
              <Image src="/vercel.svg" alt="Sunfil Logo" width={120} height={40} />
              <Typography 
                variant="body2" 
                className="text-sm text-gray-600"
              >
                VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
              </Typography>
              <Typography 
                variant="body2" 
                className="text-sm text-gray-600"
              >
                Tax code: 0309699294
              </Typography>
              <Typography 
                variant="body2" 
                className="text-sm text-gray-600"
              >
                Address: 47 Ngô Đức Kế, Phường Bến Nghé, Quận 1, Tp Hồ Chí Minh, Việt Nam
              </Typography>
              <Typography 
                variant="body2" 
                className="text-sm text-gray-600"
              >
                Opening Hour: 08:00 - 22:00 from Mon - Fri
              </Typography>
            </Stack>
          </Box>

          {/* Sitemap */}
          <Box className="lg:col-span-2">
            <Typography 
              variant="h6" 
              className="text-lg font-semibold mb-4"
            >
              Sitemap
            </Typography>
            <Stack spacing={1}>
              <Link 
                href="/about" 
                className="block text-gray-600 hover:text-blue-600 text-sm no-underline"
              >
                About
              </Link>
              <Link 
                href="/cart" 
                className="block text-gray-600 hover:text-blue-600 text-sm no-underline"
              >
                Cart
              </Link>
              <Link 
                href="/account" 
                className="block text-gray-600 hover:text-blue-600 text-sm no-underline"
              >
                Account
              </Link>
            </Stack>
          </Box>

          {/* Legal */}
          <Box className="lg:col-span-2">
            <Typography 
              variant="h6" 
              className="text-lg font-semibold mb-4"
            >
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link 
                href="/privacy" 
                className="block text-gray-600 hover:text-blue-600 text-sm no-underline"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="block text-gray-600 hover:text-blue-600 text-sm no-underline"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookie" 
                className="block text-gray-600 hover:text-blue-600 text-sm no-underline"
              >
                Cookie Policy
              </Link>
            </Stack>
          </Box>

          {/* Download App */}
          <Box className="md:col-span-4 lg:col-span-4">
            <Typography 
              variant="h6" 
              className="text-lg font-semibold mb-4"
            >
              Download App
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="https://play.google.com" target="_blank" rel="noopener">
                <Image 
                  src="/vercel.svg" 
                  alt="Google Play" 
                  width={135} 
                  height={40} 
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://apps.apple.com" target="_blank" rel="noopener">
                <Image 
                  src="/vercel.svg" 
                  alt="App Store" 
                  width={135} 
                  height={40} 
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </Stack>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box className="pt-8 border-t border-gray-200">
          <Typography 
            variant="body2" 
            align="center"
            className="text-center text-sm text-gray-600"
          >
            © {new Date().getFullYear()} Sunfil. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 