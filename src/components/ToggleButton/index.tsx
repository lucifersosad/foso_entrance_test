import { cn } from "@/lib/util";
import CheckIcon from "@mui/icons-material/Check";
import { ButtonBase, Typography } from "@mui/material";

const ToggleButton = ({
  children,
  value,
  values = [],
  onClick,
  active,
  className,
}: any) => {
  // const active = active values.some((item: string) => item === value);
  return (
    <div
      className={cn(
        "border border-[#E5E8EB] inline-flex justify-center items-center rounded-lg relative font-medium overflow-hidden cursor-pointer h-10 min-w-10 bg-white px-4 py-2",
        className,
        active ? "border-brand-500" : "",
      )}
      onClick={onClick}
    >
      {children}
      {active && (
        <div className="w-[0px] h-[0px] top-[6px] right-[10px] border-t-[26px] border-l-[26px] border-solid border-l-transparent border-t-brand-500 -mt-[6px] -mr-[12px] absolute">
          <CheckIcon className="absolute -top-[22px] right-[3px] w-[10px] h-[10px] text-white font-bold" />
        </div>
      )}
    </div>
  );
};
export default ToggleButton;
