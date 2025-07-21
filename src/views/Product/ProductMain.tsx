import ToggleButton from "@/components/ToggleButton";
import { SORT } from "@/lib/contants";
import { Box, Stack, Typography } from "@mui/material";

const ProductMain = ({ sort, setSort }: any) => {
  const handleSort = (value: string) => {
    if (sort.some((item: string) => item !== value)) {
      setSort([value]);
    }
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography className="font-semibold text-xl">Danh sách sản phẩm</Typography>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <Typography className="text-base leading-[26px] font-medium">Sắp xếp theo</Typography>
          <Stack direction={"row"} spacing={1.5}>
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
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
export default ProductMain;
