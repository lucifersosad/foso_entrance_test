"use client"

import ToggleButton from "@/components/ToggleButton";
import { SORT } from "@/lib/contants";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductMain = ({ sort, setSort }: any) => {
  const handleSort = (value: string) => {
    if (sort.some((item: string) => item !== value)) {
      setSort([value]);
    }
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Stack
        direction={{md: 'row', xs: 'column'}}
        justifyContent={"space-between"}
        alignItems={"center"}
        // className="pb-2"
        sx={{pb: 1, mt: {xs: 2, md: 0}}}
      >
        <Typography className="font-semibold text-xl">
          Danh sách sản phẩm
        </Typography>
        <Stack direction={{md: 'row', xs: 'column'}} spacing={3} alignItems={"center"}>
          <Typography className="text-base leading-[26px] font-medium">
            Sắp xếp theo
          </Typography>
          <Stack direction={{sm: 'row', xs: 'column'}} spacing={1.5} alignItems={"center"}>
            {Object.entries(SORT).map(([key, object]) => (
              <ToggleButton
                key={key}
                values={sort}
                value={object.value}
                onClick={() => handleSort(object.value)}
                className="border-white"
                active={sort.some((item: string) => item === object.value)}
              >
                <Typography className="text-sm leading-6 font-bold text-brand-500">
                  {object.label}
                </Typography>
              </ToggleButton>
            ))}
            <Button className="btn-outlined">
              <Typography className="font-medium">
                Giá: Thấp → Cao
                <KeyboardArrowDownIcon />
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <div className="mt-5">
        <Grid container spacing={2.5}>
          <Grid size={{xl: 3, md: 4, sm: 6, xs: 12}}>
            <ProductCard />
          </Grid>
          <Grid size={{xl: 3, md: 4, sm: 6, xs: 12}}>
            <ProductCard />
          </Grid>
          <Grid size={{xl: 3, md: 4, sm: 6, xs: 12}}>
            <ProductCard />
          </Grid>
          <Grid size={{xl: 3, md: 4, sm: 6, xs: 12}}>
            <ProductCard />
          </Grid>
          <Grid size={{xl: 3, md: 4, sm: 6, xs: 12}}>
            <ProductCard />
          </Grid>
          <Grid size={{xl: 3, md: 4, sm: 6, xs: 12}}>
            <ProductCard />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
export default ProductMain;
