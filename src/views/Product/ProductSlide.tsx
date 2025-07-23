"use client"

import { Box, Button, Chip, Stack, Typography } from "@mui/material"
import Image from "next/image"
import { IconFire } from "@/components/Icons"
import Slide from "@/components/Slide"
import { memo } from "react"
import { formatMoney } from "@/lib/format"
import ProductCard from "./ProductCard"

let products = Array(8).fill(0).map((item, index) => {
  return ({
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    price_old: 329000,
    price_new: 299000,
    sale: 10,
    hot: true,
    image: `/image/pro-slide-${index < 5 ? index + 1 : index - 4}.png`
  })
})

const ProductSlide = () => {
  return (
    <div className="slider-container p-[48px]">
      <Slide
        custom={
          products.map((data, index) => (
            <div
              key={index}
            >
              <div className="mx-[10px]">
                <ProductCard product={data} />
              </div>
            </div>
          ))
        }
      />
    </div>
  )
}
// const Product
export default memo(ProductSlide)