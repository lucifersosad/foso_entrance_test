"use client";

import {
  Box,
  Button,
  Fade,
  Paper,
  Popper,
  PopperPlacementType,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

import Cascader, { CascaderValue, Category } from "../Cascader";

const filterCategories: Category[] = [
  // Danh mục cha
  {
    id: 1,
    name: "Bộ Lọc Dầu",
  },
  {
    id: 2,
    name: "Bộ Lọc Không Khí",
  },
  {
    id: 3,
    name: "Bộ Lọc Nhiên Liệu",
  },
  {
    id: 4,
    name: "Bộ Lọc Trong Cabin",
  },
  {
    id: 5,
    name: "Bộ Lọc Không Khí",
  },
  {
    id: 6,
    name: "Bộ Lọc Trong Cabin",
  },
  {
    id: 7,
    name: "Bộ Lọc Nhiên Liệu",
  },
  {
    id: 8,
    name: "Bộ Lọc Không Khí",
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 1,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 1,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 1,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 1,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 1,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 1,
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 2,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 2,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 2,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 2,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 2,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 2,
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 3,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 3,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 3,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 3,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 3,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 3,
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 4,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 4,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 4,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 4,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 4,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 4,
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 5,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 5,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 5,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 5,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 5,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 5,
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 6,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 6,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 6,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 6,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 6,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 6,
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 7,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 7,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 7,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 7,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 7,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 7,
  },
  {
    id: 11,
    name: "Bộ lọc gió",
    parentId: 8,
  },
  {
    id: 12,
    name: "Bộ lọc gió",
    parentId: 8,
  },
  {
    id: 13,
    name: "Bộ lọc gió",
    parentId: 8,
  },
  {
    id: 14,
    name: "Bộ lọc gió",
    parentId: 8,
  },
  {
    id: 15,
    name: "Bộ lọc gió",
    parentId: 8,
  },
  {
    id: 16,
    name: "Bộ lọc gió",
    parentId: 8,
  },
];

const SelectCategory = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState<CascaderValue>({
    parentCategory: null,
    childCategory: null,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <>
      <Button
        className="font-medium text-white bg-[#0155C6] hover:opacity-90 flex items-center"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        ☰ Danh Mục Sản Phẩm
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start" className="max-w-full">
        <Paper sx={{mt: 1}} elevation={3} className="rounded-b-[12px] max-w-full overflow-hidden overflow-y-hidden overflow-x-auto bg-[#F4F6F8]">
          <Cascader
            categories={filterCategories}
            value={selectedValue}
            onChange={setSelectedValue}
          />
        </Paper>
      </Popper>
    </>
  );
};
export default SelectCategory;
