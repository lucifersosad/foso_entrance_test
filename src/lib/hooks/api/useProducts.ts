import { useQuery, useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "@/lib/types/product";
import { useMemo } from "react";

export interface ProductsApiResponse {
  data: Product[];
}

export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: { categories?: string[]; price?: string; brands?: string[]; years?: string[]; countries?: string[] }) => {
    const normalizedFilters = {
      categories: filters.categories ? [...filters.categories].sort() : [],
      price: filters.price || '',
      brands: filters.brands ? [...filters.brands].sort() : [],
      years: filters.years ? [...filters.years].sort() : [],
      countries: filters.countries ? [...filters.countries].sort() : [],
    };
    return [...productKeys.lists(), normalizedFilters] as const;
  },
};

export function useGetProducts(params: { categories?: string[], price?: string, brands?: string[], years?: string[], countries?: string[] }) {
  const normalizedParams = useMemo(() => ({
    categories: params.categories || [],
    price: params.price || '',
    brands: params.brands || [],
    years: params.years || [],
    countries: params.countries || [],
  }), [
    params.categories?.join(','),
    params.price,
    params.brands?.join(','),
    params.years?.join(','),
    params.countries?.join(','),
  ]);

  return useQuery({
    queryKey: productKeys.list(normalizedParams),
    queryFn: async (): Promise<ProductsApiResponse> => {
      const { categories, price, brands, years, countries } = normalizedParams;
      const urlParams = new URLSearchParams();
      if (categories.length > 0) {
        urlParams.set('categories', categories.toString());
      }
      if (price) {
        urlParams.set('price', price);
      }
      if (brands.length > 0) {
        urlParams.set('brands', brands.toString());
      }
      if (years.length > 0) {
        urlParams.set('years', years.toString());
      }
      if (countries.length > 0) {
        urlParams.set('countries', countries.toString());
      }
      
      const url = `/api/products?${urlParams.toString()}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json()
    },
  });
} 