import { Product } from "@/lib/types/product";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { memo } from "react";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Grid container spacing={2.5}>
      {products.map((item: Product, index: number) => (
        <Grid key={index} size={{ xl: 3, md: 4, sm: 6, xs: 12 }}>
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
};
export default memo(ProductList)
