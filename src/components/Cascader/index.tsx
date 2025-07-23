"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Paper,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Stack,
} from "@mui/material";
import {
  ChevronRight,
} from "@mui/icons-material";
import Image from "next/image";
import ProductCard from "@/views/Product/ProductCard";
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// Interface cho dữ liệu danh mục
export interface Category {
  id: string | number;
  name: string;
  parentId?: string | number | null;
  icon?: React.ReactNode;
  description?: string;
}

// Interface cho giá trệ đã chọn
export interface CascaderValue {
  parentCategory: Category | null;
  childCategory: Category | null;
}

// Props cho component
export interface CascaderProps {
  categories: Category[];
  value?: CascaderValue;
  onChange: (value: CascaderValue) => void;
  className?: string;
  sidebarWidth?: number;
  showIcons?: boolean;
  hoverDelay?: number;
}

let products = Array(5).fill(0).map((item, index) => {
  return ({
    id: index + 1, 
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    price_old: 329000,
    price_new: 299000,
    sale: 10,
    hot: false,
    image: `/image/pro-cate-${index + 1}.png`
  })
})

const Cascader: React.FC<CascaderProps> = ({
  categories,
  value,
  onChange,
  className = "",
  sidebarWidth = 320,
  showIcons = false,
  hoverDelay = 0,
}) => {
  const [selectedParent, setSelectedParent] = useState<Category | null>(
    value?.parentCategory || null
  );
  const [selectedChild, setSelectedChild] = useState<Category | null>(
    value?.childCategory || null
  );
  const [hoveredParent, setHoveredParent] = useState<Category | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Lọc ra các danh mục cha (không có parentId hoặc parentId = null)
  const parentCategories = categories.filter(
    (category) => !category.parentId || category.parentId === null
  );

  // Lọc ra các danh mục con dựa trên danh mục cha
  const getChildCategories = (parentId: string | number) => {
    return categories.filter((category) => category.parentId === parentId);
  };

  // Lấy danh mục con để hiển thị (từ hover hoặc selected)
  const displayedChildCategories = hoveredParent
    ? getChildCategories(hoveredParent.id)
    : selectedParent
    ? getChildCategories(selectedParent.id)
    : [];

  // Cập nhật giá trị khi props value thay đổi
  useEffect(() => {
    if (value) {
      setSelectedParent(value.parentCategory);
      setSelectedChild(value.childCategory);
    }
  }, [value]);

  // Tự động chọn danh mục cha đầu tiên khi component mount
  useEffect(() => {
    if (parentCategories.length > 0 && !selectedParent) {
      const firstParent = parentCategories[0];
      setSelectedParent(firstParent);
      onChange({
        parentCategory: firstParent,
        childCategory: null,
      });
    }
  }, [parentCategories, selectedParent, onChange]);

  // Cleanup timeout khi component unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Xử lý khi hover vào danh mục cha - chọn luôn
  const handleParentMouseEnter = (parent: Category) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    const timeout = setTimeout(() => {
      setHoveredParent(parent);

      // Hover vào là chọn luôn danh mục cha
      setSelectedParent(parent);
      setSelectedChild(null); // Reset danh mục con khi thay đổi danh mục cha
      onChange({
        parentCategory: parent,
        childCategory: null,
      });
    }, hoverDelay);

    setHoverTimeout(timeout);
  };

  // Xử lý khi hover ra khỏi danh mục cha
  const handleParentMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    const timeout = setTimeout(() => {
      setHoveredParent(null);
    }, hoverDelay);

    setHoverTimeout(timeout);
  };

  // Xử lý khi click vào danh mục cha
  const handleParentClick = (parent: Category) => {
    const childCategories = getChildCategories(parent.id);

    if (childCategories.length === 0) {
      // Nếu không có danh mục con, chọn trực tiếp danh mục cha
      setSelectedParent(parent);
      setSelectedChild(null);
      onChange({
        parentCategory: parent,
        childCategory: null,
      });
    } else {
      // Nếu có danh mục con, chỉ chọn danh mục cha (chưa chọn con)
      setSelectedParent(parent);
      setSelectedChild(null);
      onChange({
        parentCategory: parent,
        childCategory: null,
      });
    }
  };

  // Xử lý khi click vào danh mục con
  const handleChildClick = (child: Category, parent: Category) => {
    setSelectedParent(parent);
    setSelectedChild(child);
    setHoveredParent(null); // Ẩn hover state khi đã chọn
    onChange({
      parentCategory: parent,
      childCategory: child,
    });
  };

  return (
    <div className={`flex ${className} bg-grey-200 w-fit`}>
      {/* Sidebar danh mục */}
      <Paper
        className="h-[714px] bg-white max-h-[714px]"
        sx={{ width: sidebarWidth }}
        elevation={0}
      >
        <List className="py-0 flex flex-col gap-[12px]">
          {parentCategories.map((parent, index) => {
            const childCategories = getChildCategories(parent.id);
            const isSelected = selectedParent?.id === parent.id;
            const isHovered = hoveredParent?.id === parent.id;

            return (
              <ListItem key={parent.id} disablePadding>
                <ListItemButton
                  onClick={() => handleParentClick(parent)}
                  onMouseEnter={() => handleParentMouseEnter(parent)}
                  onMouseLeave={handleParentMouseLeave}
                  className={`p-4 ${
                    isSelected
                      ? "bg-grey-200 border-l-4 border-[#0D57C6]"
                      : isHovered
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {!showIcons && (
                    <ListItemIcon className="min-w-[40px]">
                      <Box
                        className={`${
                          isSelected
                            ? "text-blue-600"
                            : isHovered
                            ? "text-blue-500"
                            : "text-gray-600"
                        } size-10 relative`}
                      >
                        <Image
                          src={`/image/category-${index + 1}.png`}
                          alt="category"
                          fill
                        />
                      </Box>
                    </ListItemIcon>
                  )}

                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        className={`font-semibold text-base ml-3 ${
                          isSelected ? "text-brand-700" : "text-gray-800"
                          // isHovered ? 'text-blue-500' : 'text-gray-800'
                        }`}
                      >
                        {parent.name}
                      </Typography>
                    }
                    // secondary={parent.description && (
                    //   <Typography variant="body2" className="text-gray-500 mt-1">
                    //     {parent.description}
                    //   </Typography>
                    // )}
                  />

                  {childCategories.length > 0 && (
                    <Box
                      className={`${
                        isSelected ? "text-brand-700" : "text-gray-400"
                      }`}
                    >
                      <ChevronRight />
                    </Box>
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>

      {/* Khu vực hiển thị danh mục con bên phải */}
      <Box className="flex-1 p-6">
        {
          displayedChildCategories.length > 0 && (
            <Paper className="bg-inherit h-full" elevation={0}>
              {/* <Box className="mb-4">
                <Typography variant="h6" className="text-gray-800 mb-2">
                  {hoveredParent ? hoveredParent.name : selectedParent?.name}
                </Typography>

                <Typography variant="body2" className="text-gray-500">
                  {hoveredParent ? (
                    <>
                      Đang xem: {displayedChildCategories.length} danh mục con
                    </>
                  ) : (
                    <>Đã chọn: {selectedParent?.name}</>
                  )}
                </Typography>
              </Box> */}

              {/* Grid hiển thị danh mục con */}
              <Grid container spacing={2} maxWidth={1064}>
                {displayedChildCategories.map((child, index) => {
                  const isChildSelected = selectedChild?.id === child.id;

                  return (
                    <Grid key={child.id} size={4}>
                      <Card
                        key={child.id}
                        className={`bg-white h-full transition-all duration-200 cursor-pointer rounded-[8px] hover:bg-brand-50`}
                        elevation={0}
                      >
                        <CardActionArea
                          onClick={() =>
                            handleChildClick(
                              child,
                              hoveredParent || selectedParent!
                            )
                          }
                          className="h-full px-4 py-3"
                        >
                          <CardContent className="p-0">
                            <Box className="flex items-center gap-3">
                              <Box className={``}>
                                <Box className={`size-[70px] relative`}>
                                  <Image
                                    src={`/image/sub-category-${index + 1}.png`}
                                    alt="category"
                                    fill
                                  />
                                </Box>
                              </Box>

                              <Box className="flex-1">
                                <Typography
                                  variant="subtitle1"
                                  className={`font-medium mb-1 ${
                                    isChildSelected
                                      ? "text-blue-600"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {child.name}
                                </Typography>

                                {/* {child.description && (
                              <Typography 
                                variant="body2" 
                                className="text-gray-500 text-sm"
                              >
                                {child.description}
                              </Typography>
                            )} */}
                              </Box>
                            </Box>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Divider className="mt-[28px] mb-[24px]" />

              <Box>
                <Stack direction={'row'} justifyContent={"space-between"} alignItems={'center'} className="mb-6">
                  <Typography className="text-2xl font-semibold">
                    Sản Phẩm Bán Chạy ({selectedParent?.name})
                  </Typography>
                  <Link href={""}>
                    <Typography className="text-base font-semibold text-brand-500">
                      Xem tất cả
                      <KeyboardDoubleArrowRightIcon />
                    </Typography>
                  </Link>
                </Stack>
                {/* <Grid container spacing={2}>
                  <Grid size={2.4}>
                    <ProductCard hot={false} button={false} />
                  </Grid>
                </Grid> */}
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  {products.map((item, index) =>(
                    <Box key={index} sx={{width: '200px'}}>
                      <ProductCard product={item} type="category"/>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Paper>
          )
          //  : (
          //   // Trạng thái mặc định
          //   <Paper className="p-6 bg-inherit h-full" elevation={0}>
          //     <Box className="text-center py-12">
          //       <Typography variant="h6" className="text-gray-500 mb-2">
          //         Hover vào danh mục để xem chi tiết
          //       </Typography>
          //       <Typography variant="body2" className="text-gray-400">
          //         Di chuyển chuột qua các danh mục bên trái để xem danh mục con
          //       </Typography>
          //     </Box>
          //   </Paper>
          // )
        }
      </Box>
    </div>
  );
};

export default Cascader;
