import { Button, IconButton, Stack, Box, Typography } from "@mui/material";
import React from "react";
import { FilterIcon } from "../assets/icons/filterIcon";
import { DropdownIcon } from "../assets/icons/dropdownIcon";
import { addIcon } from "../assets/icons/addIcon";
import { MoreIcon } from "../assets/icons/moreIcon";
import theme from "../twozoTheme";

const ContactHeader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        height: "60px",
        px: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        alignItems='center'
      >
        {FilterIcon("20", "20")}
        <Stack
          direction="row"
          spacing={1}
          alignItems='center'
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            All Contacts
          </Typography>
          <Box>{DropdownIcon("16", "16", "#000")}</Box>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent= "center"
        alignItems= "center"
        spacing={2}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#33BC7E1f",
            color: theme.palette.secondary.main,
            "&:hover": { backgroundColor: "#2383581f" },
          }}
        >
          Import Contacts
        </Button>
        <Stack direction="row" spacing={1}>
          <Button
            startIcon={addIcon("20", "20")}
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: "#238358",
              },
            }}
          >
            Contact
          </Button>
          <IconButton sx={{ color: theme.palette.secondary.main }}>
            {MoreIcon("20", "20", theme.palette.secondary.main)}
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactHeader;
