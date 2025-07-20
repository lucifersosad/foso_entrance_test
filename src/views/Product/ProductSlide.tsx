import { Box, Button, Chip, Stack, Typography } from "@mui/material"
import Image from "next/image"
import { IconFire } from "@/components/Icons"
import Slide from "@/components/Slide"
import { formatMoney } from "@/utils/helper/format"

const ProductSlide = () => {
  return (
    <div className="slider-container p-[48px]">
      <Slide
        custom={
          Array(7).fill(0).map((data, index) => (
            <div
              key={index}
            >
              <div className="mx-[10px]">
                <Box className="min-h-[200px] bg-white rounded-[8px]">
                  <Box sx={{p: 1}}>
                    <div className="relative w-full aspect-square">
                      <Image src={"/image/product-1.png"} alt="product-1" fill />
                    </div>
                  </Box>
                  <Box sx={{p: 3, pt: 2}}>
                    <Stack direction={"column"} spacing={2}>
                      <Chip color="warning" icon={<IconFire />} label="Giá cực sốc" className="pl-[12px] w-fit" size="small" slotProps={{label: {className: 'text-[#7A0916] font-semibold'}}}/>
                      <Typography className="typography-subtitle2">Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)</Typography>
                      <Stack direction="column" spacing={1}>
                        <Typography className="font-semibold text-xl leading-6" color="error">{formatMoney(299000)}</Typography>
                        <Stack direction={"row"} spacing={1.25} alignItems={"center"}>
                          <Typography className="font-normal text-sm leading-6 line-through" color="textDisabled">{formatMoney(329000)}</Typography>
                          <Typography className="font-medium text-xs leading-[22px]" color="error">-10%</Typography>
                        </Stack>
                        <Button className="bg-brand-50 text-brand-600 font-bold">Mua ngay</Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </div>
            </div>
          ))
        }
      />
    </div>
  )
}
export default ProductSlide