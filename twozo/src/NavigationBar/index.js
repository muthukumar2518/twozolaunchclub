import React, { useState } from "react";
import logo from "../assets/images/twozo.png";
import Deals from "../assets/icons/deals";
import Contact from "../assets/icons/contact";
import Company from "../assets/icons/company";
import Product from "../assets/icons/product";
import Settings from "../assets/icons/settings";
import profile from "../assets/images/PROFILE.png";
import {
  Paper,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  Stack,
} from "@mui/material";
import theme from "../twozoTheme";

export const NavigationBar = () => {
  
  const ListButtons = [Deals, Contact, Company, Product, Settings];
  const [selectedModulesIndex, setSelectedModulesIndex] = useState(0);

  return (
      <Paper
        sx={{ backgroundColor: theme.palette.secondary.dark, width: "60px", height: "100vh" }}
      >
        <Toolbar disableGutters>
          <Stack
            alignItems="center"
            sx={{
              overflow: "hidden",
            }}
          >
            <img src={logo} alt="logo" width='85px' />
          </Stack>
        </Toolbar>
        <Box>
          <List>
            {ListButtons.map((navButton, index) => (
              <ListItem disablePadding key={index} sx={{p:.6}}>
                <ListItemButton
                  sx={{
                    height: "52px",
                    borderRadius: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                      index === selectedModulesIndex ? theme.palette.secondary.main : "transparent",
                    color: "#fff",
                    '&:hover':{
                      background:
                       index === selectedModulesIndex ? theme.palette.secondary.main : "transparent",
                    }
                  }}
                  onClick={() => {
                    setSelectedModulesIndex(index);
                  }}
                >
                  <Stack>
                    {navButton("22px", "22px", "#fff")}
                  </Stack>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Toolbar
          sx={{
            height:'500px',
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={profile}
              style={{ width:'30px', borderRadius: "50%" }}
              alt="profile"
            />
          </Box>
        </Toolbar>
      </Paper>
  );
};
