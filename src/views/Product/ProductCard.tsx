"use client"

import { IconFire } from "@/components/Icons";
import { formatMoney } from "@/lib/format";
import { Box, Stack, Chip, Typography, Button } from "@mui/material";
import Image from "next/image";

const ProductCard = ({ avatar, button = true, hot = true, product }: any) => {
  return (
    <Box className="min-h-[214px] bg-white rounded-[8px] shadow-lg shadow-[#919EAB]/12 hover:shadow-[#0375F329]">
      <Box sx={{ p: 1, cursor: "pointer" }}>
        <div className="relative w-full aspect-square">
          <Image className="object-contain" sizes="auto" src={product?.id ? `/image/pro-list-${((product?.id - 1) % 4) + 1}.png` : "/image/pro-list-1.png"} alt="product" fill />
        </div>
      </Box>
      <Box sx={{ p: 3, pt: 2 }}>
        <Stack direction={"column"} spacing={2}>
          {product?.hot && <Chip
            color="warning"
            icon={<IconFire />}
            label="Giá cực sốc"
            className="pl-[12px] w-fit"
            size="small"
            slotProps={{ label: { className: "text-[#7A0916] font-semibold" } }}
          />}
          <Typography className="typography-subtitle2 cursor-pointer">
            {product?.name || 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)'}
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography
              className="font-semibold text-xl leading-6"
              color="error"
            >
              {product?.new_price}
              {formatMoney(299000)}
            </Typography>
            <Stack direction={"row"} spacing={1.25} alignItems={"center"}>
              <Typography
                className="font-normal text-sm leading-6 line-through"
                color="textDisabled"
              >
                {product?.old_price}
                {formatMoney(329000)}
              </Typography>
              <Typography
                className="font-medium text-xs leading-[22px]"
                color="error"
              >
                {product?.sale && `-${product?.sale}`}
                -10%
              </Typography>
            </Stack>
            {button && (
              <Button className="bg-brand-50 text-brand-600 font-bold rounded-[8px] h-9 min-w-16">
                Mua ngay
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default ProductCard
