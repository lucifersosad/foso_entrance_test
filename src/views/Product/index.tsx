"use client";

import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import BreadcrumbsCustom from "@/components/BreadcrumbsCustom";
import Image from "next/image";
import { useState, useMemo } from "react";
import {
  IconDeliveryFeatured,
  IconFire,
  IconMoneyFeatured,
  IconPackageFeatured,
  IconSupportFeatured,
  Search,
} from "@/components/Icons";
import Slide from "@/components/Slide";
import ProductSlide from "./ProductSlide";
import ProductFilters from "./ProductFilters";
import { useGetProducts } from "@/lib/hooks/api/useProducts";
import Loader from "@/components/Loader";
import { Product } from "@/lib/types/product";
import Spin from "@/components/Spin";
import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";

const initialFilter = {
  categories: ["air_filter", "fuel_filter", "oil_filter"],
  price: "",
  brands: [],
  years: [],
  countries: [],
};
const initialSort = ["relevant"];

export default function ProductsPage() {
  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState(initialSort);

  const memoizedFilter = useMemo(() => ({
    categories: filter.categories,
    price: filter.price,
    brands: filter.brands,
    years: filter.years,
    countries: filter.countries,
  }), [
    filter.categories.join(','),
    filter.price,
    filter.brands.join(','),
    filter.years.join(','),
    filter.countries.join(','),
  ]);

  const { data, isLoading, isFetching, error, refetch } = useGetProducts(memoizedFilter);

  const products: Product[] = data?.data || [];

  return (
    <>
      <Container disableGutters>
        <Box sx={{ minHeight: "100vh", px: { lg: 0, xs: 3 } }}>

          <BreadcrumbsCustom />

          <Box sx={{ borderRadius: 3 }} className="bg-brand-600">
            <div className="relative w-full shadow-md h-[500px]">
              <Image
                src={"/image/banner.png"}
                fill
                alt="banner"
                priority
                quality={100}
              />
            </div>
            <ProductSlide />
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <ProductFilters filter={filter} setFilter={setFilter} />
            <Box sx={{flex: 1, display: "flex", flexDirection: 'column', gap: 2.5, height: 'fit-content'}}>
              <ProductHeader sort={sort} setSort={setSort}/>
              {(!isLoading && !isFetching) ? <ProductList products={products}/> : <Spin />}
            </Box>
          </Box>

          <Box sx={{ py: 5, mt: 4 }}>
            <Stack direction={{ md: "row", xs: "column" }} spacing={4}>
              <Paper className="px-[11px] h-[101px] flex items-center w-full shadow-md shadow-[#919EAB29] bg-white rounded-[12px]">
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                  alignItems={"center"}
                >
                  <Box>
                    <IconMoneyFeatured />
                  </Box>
                  <Stack direction={"column"}>
                    <Typography className="text-base font-bold text-primary">
                      Miễn phí vận chuyển
                    </Typography>
                    <Typography className="text-sm font-medium text-secondary">
                      Với hóa đơn từ 1 triệu
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <Paper className="px-[11px] h-[101px] flex items-center w-full shadow-md shadow-[#919EAB29] bg-white rounded-[12px]">
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                  alignItems={"center"}
                >
                  <Box>
                    <IconSupportFeatured />
                  </Box>
                  <Stack direction={"column"}>
                    <Typography className="text-base font-bold text-primary">
                      Hỗ trợ 24/7
                    </Typography>
                    <Typography className="text-sm font-medium text-secondary">
                      Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận
                      tâm
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <Paper className="px-[11px] h-[101px] flex items-center w-full shadow-md shadow-[#919EAB29] bg-white rounded-[12px]">
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                  alignItems={"center"}
                >
                  <Box>
                    <IconDeliveryFeatured />
                  </Box>
                  <Stack direction={"column"}>
                    <Typography className="text-base font-bold text-primary">
                      Giao hàng nhanh 2h
                    </Typography>
                    <Typography className="text-sm font-medium text-secondary">
                      Trong vòng bán kính 10km nội thành TP HCM
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <Paper className="px-[11px] h-[101px] flex items-center w-full shadow-md shadow-[#919EAB29] bg-white rounded-[12px]">
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                  alignItems={"center"}
                >
                  <Box>
                    <IconPackageFeatured />
                  </Box>
                  <Stack direction={"column"}>
                    <Typography className="text-base font-bold text-primary">
                      30 ngày đổi trả
                    </Typography>
                    <Typography className="text-sm font-medium text-secondary">
                      Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận
                      chuyển
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Box>

        </Box>
      </Container>
    </>
  );
}
