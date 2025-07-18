'use client';
import Image from 'next/image';
import { Container, Typography, Button, Card, CardMedia, CardContent, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="xl" className="px-4 py-8">
      {/* Hero Banner */}
      <Box className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg p-8 mb-8 text-white relative overflow-hidden">
        <Typography 
          variant="h3" 
          // component="h1" 
          className="text-4xl font-bold mb-4 text-blue-500"
        >
          TẢI APP NHẬN QUÀ
        </Typography>
        <Typography 
          variant="h6" 
          className="text-xl mb-2"
        >
          Tích điểm ngay trên app SUNFIL !
        </Typography>
        <Typography 
          variant="body1" 
          className="mb-6 text-orange-primary"
        >
          100K = 10 điểm
        </Typography>
        <Button 
          variant="contained"
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium normal-case"
        >
          Tải App Ngay
        </Button>
      </Box>

      {/* Products Section */}
      <Typography 
        variant="h4" 
        component="h2" 
        className="text-3xl font-bold mb-6 text-blue-primary"
      >
        Sản phẩm nổi bật
      </Typography>
      
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {[1, 2, 3, 4, 5].map((item) => (
          <Card 
            key={item} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardMedia
              component="div"
              className="h-48 bg-gray-100 flex items-center justify-center"
            >
              <Image 
                src="/vercel.svg" 
                alt={`Sản phẩm ${item}`} 
                width={80} 
                height={80}
                className="opacity-30"
              />
            </CardMedia>
            <CardContent className="p-4">
              <Typography 
                variant="body2" 
                className="text-sm text-gray-600 mb-2"
              >
                Lọc gió động cơ Air Filter
              </Typography>
              <Typography 
                variant="h6" 
                className="text-lg font-semibold text-blue-600 mb-4"
              >
                299.000 đ
              </Typography>
              <Button 
                variant="contained"
                fullWidth
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 normal-case"
              >
                Mua ngay
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Call to Action */}
      <Box className="text-center mt-12 py-8">
        <Typography 
          variant="h5" 
          className="text-2xl font-semibold mb-4"
        >
          Xem hệ thống cửa hàng trên toàn quốc
        </Typography>
        <Button 
          variant="outlined"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors normal-case"
        >
          Xem ngay →
        </Button>
      </Box>
    </Container>
  );
}
