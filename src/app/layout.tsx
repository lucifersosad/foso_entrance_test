import { Metadata } from 'next';
import { Epilogue, Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import "./globals.css";
import MainLayout from '@/layout/MainLayout';
import ReactQueryProvider from './ReactQueryProvider';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const epilogue = Epilogue({
  weight: ["100", '200', "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-epilogue',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={epilogue.variable}>
      <body className="font-epilogue bg-white relative">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <ReactQueryProvider>
              <MainLayout>
                {children}
              </MainLayout>
            </ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
