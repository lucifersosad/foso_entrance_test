"use client";

import { Box, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}} className="text-gray-disabled font-normal">
    Trang chủ
  </Link>,
  <Link underline="hover" key="2" href="/" onClick={() => {}} className="font-semibold text-brand-700">
    Sản phẩm
  </Link>,
];

const CustomBreadcrumbs = () => {
  return (
    <Box sx={{ pt: 3, pb: 4 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};
export default CustomBreadcrumbs;
