import { IconFilter } from "@/components/Icons";
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardHeader, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Grid, Skeleton, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { memo, useEffect, useState, useCallback } from "react";
import AccordionCustom from "@/components/AccordionCustom";
import ToggleButton from "@/components/ToggleButton";
import { FILTER_BRAND, FILTER_CATEGORY, FILTER_COUNTRY, FILTER_PRICE, FILTER_YEAR } from "@/lib/contants";
import { formatMoney } from "@/lib/format";

const ProductFilters = ({ filter, setFilter }: any) => {

  const handleFilter = useCallback((type: any, params: string) => {
    switch (type) {
      case 'categories':
        setFilter((prevFilter: any) => {
          if (prevFilter.categories.some((item: any) => item === params)) {
            return { ...prevFilter, categories: prevFilter.categories.filter((item: any) => item !== params) };
          } else {
            return { ...prevFilter, categories: [...prevFilter.categories, params] };
          }
        });
        break;
      case 'price':
        setFilter((prevFilter: any) => ({
          ...prevFilter,
          price: prevFilter.price !== params ? params : ''
        }));
        break;
      case 'brands':
        setFilter((prevFilter: any) => {
          if (prevFilter.brands.some((item: any) => item === params)) {
            return { ...prevFilter, brands: prevFilter.brands.filter((item: any) => item !== params) };
          } else {
            return { ...prevFilter, brands: [...prevFilter.brands, params] };
          }
        });
        break;
      case 'years':
        setFilter((prevFilter: any) => {
          if (prevFilter.years.some((item: any) => item === params)) {
            return { ...prevFilter, years: prevFilter.years.filter((item: any) => item !== params) };
          } else {
            return { ...prevFilter, years: [...prevFilter.years, params] };
          }
        });
        break;
      case 'countries':
        setFilter((prevFilter: any) => {
          if (prevFilter.countries.some((item: any) => item === params)) {
            return { ...prevFilter, countries: prevFilter.countries.filter((item: any) => item !== params) };
          } else {
            return { ...prevFilter, countries: [...prevFilter.countries, params] };
          }
        });
        break;
      default:
        break;
    }
  }, [setFilter]);

  return (
    <Card 
      sx={{
        background: '#fff',
        borderRadius: 2,
        boxShadow: 'none',
        width: {xs: '100%', md: '315px'},
        minWidth: '315px',
        height: 'fit-content'
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

