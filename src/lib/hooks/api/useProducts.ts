import { useQuery, useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "@/lib/types/product";

export interface ProductsApiResponse {
  data: Product[];
}

// Key factory cho query keys
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: { categories?: string[]; price?: string; brands?: string[]; years?: string[]; countries?: string[] }) => 
    [...productKeys.lists(), filters] as const,
};

// Hook để fetch tasks (server-side filtering + pagination)
export function useGetProducts(params: { categories?: string[], price?: string, brands?: string[], years?: string[], countries?: string[] }) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: async (): Promise<ProductsApiResponse> => {
      const { categories, price, brands, years, countries } = params;
      const urlParams = new URLSearchParams();
      if (categories) {
        urlParams.set('categories', categories.toString());
      }
      if (price) {
        urlParams.set('price', price);
      }
      if (brands) {
        urlParams.set('brands', brands.toString());
      }
      if (years) {
        urlParams.set('years', years.toString());
      }
      if (countries) {
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