import { IconFilter } from "@/components/Icons";
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardHeader, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Grid, Skeleton, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { memo, useEffect, useState } from "react";
import AccordionCustom from "@/components/AccordionCustom";
import ToggleButton from "@/components/ToggleButton";
import { FILTER_BRAND, FILTER_CATEGORY, FILTER_COUNTRY, FILTER_PRICE, FILTER_YEAR } from "@/lib/contants";
import { formatMoney } from "@/lib/format";

const ProductFilters = ({ filter, setFilter }: any) => {

  const handleFilter = (type: any, params: string, rating: any) => {
    switch (type) {
      case 'categories':
        if (filter.categories.some((item: any) => item === params)) {
          setFilter({ ...filter, categories: filter.categories.filter((item: any) => item !== params) });
        } else {
          setFilter({ ...filter, categories: [...filter.categories, params] });
        }
        break;
      case 'price':
        console.log("🚀 ~ handleFilter ~ params:", params)
        if (filter.price !== params) {
          setFilter({ ...filter, price: params });
        } else {
          setFilter({ ...filter, price: '' });
        }
        break;
      case 'brands':
        if (filter.brands.some((item: any) => item === params)) {
          setFilter({ ...filter, brands: filter.brands.filter((item: any) => item !== params) });
        } else {
          setFilter({ ...filter, brands: [...filter.brands, params] });
        }
        break;
      case 'years':
        if (filter.years.some((item: any) => item === params)) {
          setFilter({ ...filter, years: filter.years.filter((item: any) => item !== params) });
        } else {
          setFilter({ ...filter, years: [...filter.years, params] });
        }
        break;
      case 'countries':
        if (filter.countries.some((item: any) => item === params)) {
          setFilter({ ...filter, countries: filter.countries.filter((item: any) => item !== params) });
        } else {
          setFilter({ ...filter, countries: [...filter.countries, params] });
        }
        break;
      default:
        break;
    }
  };

  return (
    <Card 
      sx={{
        background: '#fff',
        borderRadius: 2,
        boxShadow: 'none',
        width: {xs: '100%', md: '315px'}
      }} 
      className=" mr-5 py-3 flex flex-col gap-1"
      title=""
    >
      <CardHeader className="p-3" title={<Stack direction={"row"} className="gap-3"><IconFilter />Bộ lọc</Stack>} slotProps={{title: {className: "text-brand-500 font-bold text-2xl"}}}/>
      <Divider />
      <CardContent className="p-3">
        <AccordionCustom title="Danh mục sản phẩm" defaultExpanded>
          <Categories categories={filter.categories} handleFilter={handleFilter}/>
        </AccordionCustom>
        <Divider className="my-3"/>
        <AccordionCustom title="Khoảng giá" defaultExpanded>
          <Price price={filter.price} handleFilter={handleFilter}/>
        </AccordionCustom>
        <Divider className="my-3"/>
        <AccordionCustom title="Thương hiệu" defaultExpanded>
          <Brands brands={filter.brands} handleFilter={handleFilter}/>
        </AccordionCustom>
        <Divider className="my-3"/>
        <AccordionCustom title="Năm sản xuất" defaultExpanded>
          <Years years={filter.years} handleFilter={handleFilter}/>
        </AccordionCustom>
        <Divider className="my-3"/>
        <AccordionCustom title="Xuất xứ" defaultExpanded>
          <Countries countries={filter.countries} handleFilter={handleFilter}/>
        </AccordionCustom>
      </CardContent>
    </Card>
  )
}
export default memo(ProductFilters);

function Categories({ categories, handleFilter }: any) {
  const [isCategoriesLoading, setCategoriesLoading] = useState(true);
  useEffect(() => {
    setCategoriesLoading(false);
  }, []);

  return (
    <Box sx={{ pl: 0.5 }}>
      <Stack>
        {Object.entries(FILTER_CATEGORY).map(([key, object]) => (
          <FormControlLabel
            key={key}
            slotProps={{typography: {className: "text-sm font-medium"}}}
            control={<Checkbox checked={categories.some((item: any) => item === object.value)} />}
            onChange={() => handleFilter('categories', object.value)}
            label={<>{object.label} <Typography className="text-secondary text-sm inline-flex">(24)</Typography></>}
          />
        ))}
      </Stack>
    </Box>
  );
}

function Price({price, handleFilter}: any) {
  return (
    <Box sx={{ pl: 0.5 }}>
      <Stack direction={"column"} spacing={1}>
        {Object.entries(FILTER_PRICE).map(([key, object]) => {
          let label = ''
          if (object.min && object.max) {
            label = `${formatMoney(object.min)} - ${formatMoney(object.max)}`
          } else if (object.max) {
            label = `Dưới ${formatMoney(object.max)}`
          } else {
            label = `Trên ${formatMoney(object.min)}`
          }
          return (
            <ToggleButton
              key={key}
              className='rounded-[4px] px-0'
              active={price === object.value}
              onClick={() => handleFilter('price', object.value)}
            >
              <Typography className="text-sm text-primary font-normal">{label}</Typography>
            </ToggleButton>
          )
        })}
      </Stack>
    </Box>
  );
}

function Brands({ brands, handleFilter }: any) {
  return (
    <Box sx={{ pl: 0.5 }}>
      <Stack>
        {Object.entries(FILTER_BRAND).map(([key, object]) => (
          <FormControlLabel
            key={key}
            slotProps={{typography: {className: "text-sm font-medium"}}}
            control={<Checkbox checked={brands.some((item: any) => item === object.value)} />}
            onChange={() => handleFilter('brands', object.value)}
            label={<>{object.label} <Typography className="text-secondary text-sm inline-flex">(24)</Typography></>}
          />
        ))}
      </Stack>
    </Box>
  );
}

function Years({ years, handleFilter }: any) {
  return (
    <Box sx={{ pl: 0.5 }}>
      <Stack>
        {Object.entries(FILTER_YEAR).map(([key, object]) => (
          <FormControlLabel
            key={key}
            slotProps={{typography: {className: "text-sm font-medium"}}}
            control={<Checkbox checked={years.some((item: any) => item === object.value)} />}
            onChange={() => handleFilter('years', object.value)}
            label={<>{object.label} <Typography className="text-secondary text-sm inline-flex">(24)</Typography></>}
          />
        ))}
      </Stack>
    </Box>
  );
}

function Countries({ countries, handleFilter }: any) {
  return (
    <Box sx={{ pl: 0.5 }}>
      <Stack>
        {Object.entries(FILTER_COUNTRY).map(([key, object]) => (
          <FormControlLabel
            key={key}
            slotProps={{typography: {className: "text-sm font-medium"}}}
            control={<Checkbox checked={countries.some((item: any) => item === object.value)} />}
            onChange={() => handleFilter('countries', object.value)}
            label={<>{object.label} <Typography className="text-secondary text-sm inline-flex">(24)</Typography></>}
          />
        ))}
      </Stack>
    </Box>
  );
}

