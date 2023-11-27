import Layout from "./App";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";

function HeadInfoItem({ head, content }) {
  return (
    <Box>
      <Stack>
        <Box
          sx={{ opacity: 0.5 }}
          fontSize={13}
          fontWeight={500}
          color={"#fff"}
        >
          {head}
        </Box>
        <Box fontSize={17} fontWeight={700} color={"#fff"}>
          {content}
        </Box>
      </Stack>
    </Box>
  );
}
function HeadInfo({ head, content }) {
  return (
    <Box>
      <HeadInfoItem head={head} content={content}></HeadInfoItem>
    </Box>
  );
}

const WhiteDisabledButton = styled(Button)({
  "&.Mui-disabled": {
    background: "#d7d7d7",
    color: "rgba(0, 0, 0, 0.26)",
    borderRadius: "10px",
  },
});

const StyledAccordion = styled(Accordion)({
  ".MuiAccordionSummary-root:hover:not(.Mui-expanded)": {
    backgroundColor: "rgb(6,6,6)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#fff",
  },
});
const Claim = () => {
  return (
    <Layout>
      <StyledAccordion sx={{ background: "rgb(42, 42, 42)", color: "#fff" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Stack
            width={"100%"}
            direction={"row"}
            textAlign={"left"}
            justifyContent={"space-between"}
          >
            <Box sx={{ fontSize: "17px", fontWeight: 700 }}>Stake Wblur</Box>
            <HeadInfo head={"Claimable (USD value)"} content={"$0"} />
            <HeadInfo head={"vApr"} content={"0.43%"} />
            <WhiteDisabledButton
              disabled
              sx={{
                marginX: "8px",
                height: "41px",
                background: "#eee",
              }}
              variant="contained"
            >
              Claim
            </WhiteDisabledButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion sx={{ background: "rgb(42, 42, 42)", color: "#fff" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Stack
            width={"100%"}
            direction={"row"}
            textAlign={"left"}
            justifyContent={"space-between"}
          >
            <Box sx={{ fontSize: "17px", fontWeight: 700 }}>Lock Burst</Box>
            <HeadInfo head={"Claimable (USD value)"} content={"$0"} />
            <HeadInfo head={"vApr"} content={"0.43%"} />
            <WhiteDisabledButton
              disabled
              sx={{
                marginX: "8px",
                height: "41px",
                background: "#eee",
              }}
              variant="contained"
            >
              Claim
            </WhiteDisabledButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </Layout>
  );
};

export default Claim;