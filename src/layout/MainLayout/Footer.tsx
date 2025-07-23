import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconMap, Vietnam } from "@/components/Icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-50 border-t border-gray-200">
      <Box sx={{ bgcolor: "#E6F1FF" }}>
        <Container disableGutters>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            className="py-9"
          >
            <Link href={"/"} className="flex items-center gap-4">
              <Box>
                <IconMap />
              </Box>
              <Typography className="font-medium text-[28px] leading-8 text-primary">
                Xem hệ thống 88 cửa hàng trên toàn quốc
              </Typography>
            </Link>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon className="size-8" color="primary" />}
              className="py-3 px-6 border-none font-semibold text-2xl leading-6 rounded-full bg-white hover:opacity-60"
            >
              Xem ngay
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: 'url("/image/bg-footer.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.35,
            zIndex: 0,
          }}
        />
        <Container disableGutters sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              px: { lg: 0, xs: 3 },
              py: 12,
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
            }}
          >
            <Box className="md:col-span-2 lg:col-span-6 flex flex-col gap-8">
              <Stack>
                <Typography className="text-xl leading-6 text-brand-800 font-semibold uppercase">
                  Viet Hung Auto Production Trading Joint Stock Company
                </Typography>
                <br />
                <Typography className="text-secondary text-base leading-7">
                  Tax code: <span className="font-semibold">0305094228</span>
                </Typography>
                <Typography className="text-secondary text-base leading-7">
                  Address:{" "}
                  <span className="font-semibold">
                    13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
                    Nam.
                  </span>
                </Typography>
                <Typography className="text-secondary text-base leading-7">
                  Phone number:{" "}
                  <span className="font-semibold">0283 760 7607</span>
                </Typography>
                <Typography className="text-secondary text-base leading-7">
                  Opening hour:{" "}
                  <span className="font-semibold">
                    09:00 - 22:00 from Mon - Fri
                  </span>
                </Typography>
              </Stack>
              <img className="w-[200px]" src={"/icon-bo-cong-thuong.png"} />
            </Box>

            {/* Sitemap */}
            <Stack direction={"column"} spacing={4} className="lg:col-span-2">
              <Typography className="text-2xl leading-[30px] font-semibold text-brand-800">
                Sitemap
              </Typography>
              <Stack spacing={1}>
                <Link
                  href="/about"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  About
                </Link>
                <Link
                  href="/cart"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  Cart
                </Link>
                <Link
                  href="/account"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  Account
                </Link>
                <Link
                  href="/account"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  Contact
                </Link>
              </Stack>
            </Stack>

            {/* Legal */}
            <Stack
              direction={"column"}
              spacing={4}
              className="lg:col-span-2 w-[200px]"
            >
              <Typography className="text-2xl leading-[30px] font-semibold text-brand-800">
                Legal
              </Typography>
              <Stack spacing={1}>
                <Link
                  href="/about"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/cart"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  Cookie policy
                </Link>
                <Link
                  href="/account"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  Delivery policy
                </Link>
                <Link
                  href="/account"
                  className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  FAQs
                </Link>
              </Stack>
            </Stack>

            {/* Download App */}
            <Stack
              direction={"column"}
              spacing={4}
              className="md:col-span-4 lg:col-span-2"
            >
              <Typography className="text-2xl leading-[30px] font-semibold text-brand-800">
                Download App
              </Typography>
              <Stack spacing={1}>
                <Link
                  href="/"
                  // className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  <img src={"/icon-play-store.svg"} />
                </Link>
                <Link
                  href="/"
                  // className="text-base leading-7 text-secondary hover:text-brand-700"
                >
                  <img src={"/icon-app-store.svg"} />
                </Link>
                <Button
                  variant="outlined"
                  startIcon={<Vietnam />}
                  endIcon={<KeyboardArrowDownIcon />}
                  className="btn-icon-outlined w-fit ml-auto"
                >
                  <div className="h-[22px]">VI</div>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
