import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionCustom = ({ title, children, defaultExpanded = false }: any) => {
  return (
    <>
      <Accordion
        sx={{
          boxShadow: "none",
          bgcolor: "inherit",
          m: 0,
          "&::before": {
            all: "unset",
          },
          "&.Mui-expanded": {
            mt: 0,
          },
        }}
        defaultExpanded={defaultExpanded}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1-content"
          // id="panel1-header"
          className="p-0"
          sx={{
            "&.Mui-expanded": {
              minHeight: "48px",
            },
          }}
          slotProps={{ content: { className: "m-0" } }}
        >
          <Typography component="span" className="font-semibold text-xl">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0">{children}</AccordionDetails>
      </Accordion>
    </>
  );
};
export default AccordionCustom;
