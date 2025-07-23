import { SORT } from "@/lib/contants";
import { Stack, Typography, Button } from "@mui/material";
import ToggleButton from "@/components/ToggleButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { memo } from "react";

const ProductHeader = ({ sort, setSort }: any) => {
  const handleSort = (value: string) => {
    if (sort.some((item: string) => item !== value)) {
      setSort([value]);
    }
  };
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ pb: 1, mt: { xs: 2, md: 0 } }}
    >
      <Typography className="font-semibold text-xl">
        Danh sách sản phẩm
      </Typography>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={3}
        alignItems={"center"}
      >
        <Typography className="text-base leading-[26px] font-medium">
          Sắp xếp theo
        </Typography>
        <Stack
          direction={{ sm: "row", xs: "column" }}
          spacing={1.5}
          alignItems={"center"}
        >
          {Object.entries(SORT).map(([key, object]) => (
            <ToggleButton
              key={key}
              values={sort}
              value={object.value}
              onClick={() => handleSort(object.value)}
              className="border-white"
              active={sort.some((item: string) => item === object.value)}
            >
              <Typography className="text-sm leading-6 font-bold text-brand-500">
                {object.label}
              </Typography>
            </ToggleButton>
          ))}
          <Button className="btn-outlined">
            <Typography className="font-medium">
              Giá: Thấp → Cao
              <KeyboardArrowDownIcon />
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default memo(ProductHeader);
